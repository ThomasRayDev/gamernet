from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("sign_up/", views.sign_up, name="sign_up"),
    path("sign_in/", views.sign_in, name="sign_in"),
    path("logout/", views.logout_session, name="logout"),
    path("test/", views.test, name="test"),
    path("csrf/", views.csrf, name="csrf"),
]