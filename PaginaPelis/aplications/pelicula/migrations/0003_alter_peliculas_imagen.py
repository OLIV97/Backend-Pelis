# Generated by Django 4.0.1 on 2022-01-18 03:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pelicula', '0002_rename_date_birth_peliculas_fecha'),
    ]

    operations = [
        migrations.AlterField(
            model_name='peliculas',
            name='imagen',
            field=models.FileField(blank=True, upload_to='peliculas', verbose_name='portada'),
        ),
    ]
