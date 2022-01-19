from django.db import models
from aplications.pelicula.models import Peliculas
from aplications.usuario.models import User

# Create your models here.
from model_utils.models import TimeStampedModel


class Favorites(TimeStampedModel):
    """Modelo para favoritos"""

    user = models.ForeignKey(
        User,
        on_delete= models.CASCADE
    )

    Peliculas = models.ForeignKey(
        Peliculas,
        on_delete= models.CASCADE
    )
    class Meta:
        unique_together=('user','Peliculas')
        verbose_name = 'Favorito'
        verbose_name_plural = 'Favoritos'
        
    def __str__(self):
        return self.Peliculas.nombre +" - "+self.user.nombre 