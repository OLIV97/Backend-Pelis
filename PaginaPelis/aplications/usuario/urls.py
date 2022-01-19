
from unicodedata import name
from django.urls import path, re_path

from . import views

app_name = 'user_app'
urlpatterns = [
    path(
        'api/user/create/',
        views.UserCreateView.as_view(),
    ),
    path(
        'api/user/login/',
        views.UserLoginApiView.as_view(),
    ),
]