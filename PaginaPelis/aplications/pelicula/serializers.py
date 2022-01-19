from rest_framework import serializers
from .models import Peliculas

class PeliculaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Peliculas
        fields = ('__all__')#todos los fields de modelo
 



class PeliculaTituloSerializer(serializers.Serializer):
    
    nombre  = serializers.CharField()
        
 