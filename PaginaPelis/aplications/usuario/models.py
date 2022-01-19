from django.db import models

from model_utils.models import TimeStampedModel
#

class User(TimeStampedModel):
    id = models.AutoField(primary_key=True)

    nombre = models.CharField('Nombre', max_length=100)

    email = models.EmailField(unique=True)

    edad = models.PositiveIntegerField()

    password =  models.TextField('password')
    def __str__(self):
        return self.nombre

