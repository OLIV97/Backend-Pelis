# Generated by Django 4.0.1 on 2022-01-19 02:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pelicula', '0007_peliculas_genero'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='peliculas',
            name='genero',
        ),
    ]
