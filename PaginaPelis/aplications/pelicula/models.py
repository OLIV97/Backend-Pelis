from django.db import models
from model_utils.models import TimeStampedModel
#



class Peliculas(TimeStampedModel):

    id = models.AutoField(primary_key=True)

    nombre = models.CharField('Nombre', max_length=100,null=True)

    Fecha = models.DateField(
        'Fecha', 
        blank=True,
        null=True
    )

    descripcion = models.CharField('Descripcion', max_length=100,null=True)

    rango = models.PositiveIntegerField(blank=True)

    director = models.CharField('Director', max_length=100,null=True)

    autores = models.CharField('Autores', max_length=100,null=True)

    duracion = models.CharField('Duracion', max_length=100,null=True)

    # genero =  models.TextField('genero',null=True)

    imagen = models.FileField("imagen", upload_to='peliculas',blank=True)
    

    def __str__(self):
        return self.nombre