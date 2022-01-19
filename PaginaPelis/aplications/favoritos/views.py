import json
import datetime
from django.http import HttpResponse
from django.shortcuts import render
from aplications.pelicula.models import Peliculas

from aplications.usuario.models import User
from .models import Favorites
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView, CreateAPIView,
    RetrieveAPIView, DestroyAPIView,
    UpdateAPIView, RetrieveUpdateAPIView,

# RetrieveAPIView es como el detailview
)
# Create your views here.

from .serializers import(
    FavoritesSerializer
)

# class PeliculaCreateView(CreateAPIView):
#     """ Crea un objeto """
#     parser_classes = (FileUploadParser,)    
#     serializer_class = PeliculaSerializer



# Create your views here.
class PersonDetailView(RetrieveUpdateAPIView):
    """ detail view osea ver todos los datos """

    serializer_class = FavoritesSerializer
    queryset =Favorites.objects.all()

class FavoritesCreateView(APIView):
    serializer_class = FavoritesSerializer

    # parser_classes = (FileUploadParser,)   

    def post(self, request, *args, **kwargs):
        user= request.data['user']
        us= User.objects.get(
            nombre= user
        )
        
        peliculas= request.data['Peliculas']
        peli= Peliculas.objects.get(
            nombre= peliculas
        )
        print(peli,'adsasdads')
        Favorites.objects.create(
           user=us,
            Peliculas=peli,
        )
        return HttpResponse(json.dumps({'message': "User Create"}), status=200)  