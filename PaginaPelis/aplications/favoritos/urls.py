from unicodedata import name
from django.urls import path, re_path

from . import views

app_name = 'favoritos_app'
urlpatterns = [
    path(
        'api/favorites/',
        views.FavoritesCreateView.as_view(),
    ),
]

