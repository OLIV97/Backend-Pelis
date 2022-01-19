
from unicodedata import name
from django.urls import path, re_path

from . import views

app_name = 'pelicula_app'
urlpatterns = [
    path(
        'api/pelicula/create/',
        views.PeliculaCreateView.as_view(),
    ),
    path(
        'api/pelicula/search-titulo/<str:kword>/',
        views.PeliculaSearchApiView.as_view(),
    ),
    path(
        'api/pelicula/search-range/<str:kword>/<str:kword1>/',
        views.PeliculaFechaApiView.as_view(),
    ),

    path(
        'api/pelicula/lista/',
        views.listPelicula.as_view(),
    ),

    path(
        'api/pelicula/list-all/',
        views.listPeliculaall.as_view(),
    )
]