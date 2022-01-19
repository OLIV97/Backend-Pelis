import json
import datetime
from django.http import HttpResponse
from django.shortcuts import render
from .models import Peliculas
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView, CreateAPIView,
    RetrieveAPIView, DestroyAPIView,
    UpdateAPIView, RetrieveUpdateAPIView,

# RetrieveAPIView es como el detailview
)
from rest_framework.parsers import FileUploadParser 
# Create your views here.

from .serializers import(
    PeliculaSerializer,PeliculaTituloSerializer
)

# class PeliculaCreateView(CreateAPIView):
#     """ Crea un objeto """
#     parser_classes = (FileUploadParser,)    
#     serializer_class = PeliculaSerializer



import base64

from django.core.files.base import ContentFile


class PeliculaCreateView(APIView):
    queryset = Peliculas.objects.all()
    serializer_class = PeliculaSerializer

    # parser_classes = (FileUploadParser,)   

    def post(self, request, *args, **kwargs):
        
        file = request.data['imagen']
        format, imgstr = file.split(';base64,') 
        ext = format.split('/')[-1] 
        print(file)
        Peliculas.objects.create(
            nombre= request.data['nombre'],
            Fecha= request.data['Fecha'],
            descripcion= request.data['descripcion'],
            rango= request.data['rango'],
            director=request.data['director'],
            autores=request.data['autores'],
            duracion=request.data['duracion'],
            # genero=request.data['genero'],
            imagen=ContentFile(base64.b64decode(imgstr), name='temp.' + ext)
        )
        
        return HttpResponse(json.dumps({'message': "Pelicula Create"}), status=200)

class PeliculaSearchApiView(ListAPIView):
    """retorna datos en base a la palabra""" 
    serializer_class = PeliculaSerializer

    def get_queryset(self):

        Titulo = self.kwargs['kword']

        return Peliculas.objects.filter(
            nombre__icontains= Titulo
        )

class PeliculaFechaApiView(ListAPIView):
    """retorna datos en base a la palabra""" 
    serializer_class = PeliculaSerializer

    def get_queryset(self):

        f1 = str(self.kwargs['kword']).split('-')
        f2 = str(self.kwargs['kword1']).split('-')
        start_date = datetime.date(int(f1[0]), int(f1[1]), int(f1[2]))
        end_date = datetime.date(int(f2[0]), int(f2[1]), int(f2[2]))
        return Peliculas.objects.filter(
            Fecha__range=(start_date, end_date)
        )

class listPelicula(ListAPIView):
    serializer_class = PeliculaTituloSerializer

    def get_queryset(self):
        return  Peliculas.objects.all()

class listPeliculaall(ListAPIView):
    serializer_class = PeliculaSerializer

    def get_queryset(self):
        return  Peliculas.objects.all()
