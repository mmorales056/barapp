from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    is_admin = models.BooleanField(default=False)
    is_employee = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=False)
    
    def __str__(self) :
        return '{0},{1}'.format(self.first_name, self.last_name)
