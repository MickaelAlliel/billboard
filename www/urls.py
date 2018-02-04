from django.urls import path
from . import views
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('', views.index, name="index"),
    path('logout', views.logout, name="logout"),
    path('login', views.login, name="login"),
    path('register', views.register, name="register")
]