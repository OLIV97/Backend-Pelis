# Generated by Django 4.0.1 on 2022-01-18 01:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pelicula', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='peliculas',
            old_name='date_birth',
            new_name='Fecha',
        ),
    ]
