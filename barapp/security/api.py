from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSeriliazer,RegisterSerializer, LoginSerializer

#Register Api
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self,request,*args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSeriliazer(user,context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user)[1]

        })

#Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer
    
    def post(self,request,*args, **kwargs):
        serializer= self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSeriliazer(user,context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user)[1]
        })


#Get UserAPI 

class UserAPI(generics.RetrieveAPIView):
    permission_classes =[
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSeriliazer

    def get_object(self):
        return self.request.user
    



# from security.models import User
# from rest_framework import viewsets,permissions, generics
# from rest_framework.response import  Response
# from knox.models import AuthToken
# from .serializers import UserSeriliazer, RegisterSerializer


# #User viewSet
# class UserViewSet(viewsets.ModelViewSet):    
#     permission_classes=[
#         permissions.IsAuthenticated
#     ]
#     serializer_class = UserSeriliazer

#     def getQuerySet(self):
#         return self.request.user.users.all()
    
#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

# class RegisterAPI(generics.CreateAPIView):
#     serializer_class= RegisterSerializer

#     def post(self,request,*args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.save()
#         return Response({
#             "user": UserSeriliazer(user,context=self.get_serializer_context()).data,
#             "token": AuthToken.objects.create(user)
#         })

    