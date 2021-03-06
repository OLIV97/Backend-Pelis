# Generated by Django 4.0.1 on 2022-01-19 05:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0003_alter_user_password'),
        ('pelicula', '0008_remove_peliculas_genero'),
        ('favoritos', '0003_alter_favorites_peliculas_alter_favorites_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favorites',
            name='Peliculas',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pelicula.peliculas'),
        ),
        migrations.AlterField(
            model_name='favorites',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuario.user'),
        ),
    ]
