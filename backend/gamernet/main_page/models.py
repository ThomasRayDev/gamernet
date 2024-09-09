from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils.crypto import get_random_string


class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        elif not username:
            raise ValueError('The Username field must be set')
        elif not password:
            raise ValueError('The Password field must be set')

        email = self.normalize_email(email)

        user_id = self.generate_user_id()

        user = self.model(email=email, username=username, id=user_id, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def generate_user_id(self):
        while True:
            user_id = get_random_string(length=4, allowed_chars='0123456789')
            if not Gamers.objects.filter(id=user_id).exists():
                return user_id


class Gamers(AbstractBaseUser):
    id = models.CharField(max_length=5, primary_key=True, blank=False)
    username = models.CharField(max_length=150, blank=False)
    email = models.EmailField(unique=True, blank=False)
    password = models.CharField(max_length=128, blank=False)

    # is_active = models.BooleanField(default=True)
    # is_staff = models.BooleanField(default=False)
    # is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()

    def __str__(self):
        return self.email