from rest_framework import serializers
from security.models import User
from django.contrib.auth import authenticate


class UserSeriliazer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email','password')
        extra_kwargs={'password':{'write_only':True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],validated_data['email'],validated_data['password'])

        return user

#login
class LoginSerializer(serializers.Serializer):
    username= serializers.CharField()
    password = serializers.CharField()

    def validate(self,data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")

#class UserSeriliazer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields=('id',
#             'first_name',
#             'last_name',
#             'email',
#             'username',
#             'password',
#             'is_admin',
#             'is_employee',
#             'is_customer')

# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         fields=(
#             'id',
#             'first_name',
#             'last_name',
#             'email',
#             'username',
#             'password',
#             'is_admin',
#             'is_employee',
#             'is_customer'
#         )
#         extra_kwargs={'password':{'write_only': True}}
    
#     def create(self,validated_data):
#         user = User.objects.create_user(validated_data['username'],validated_data['email'], validated_data['password'])
#         return user

