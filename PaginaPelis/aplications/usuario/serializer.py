
from rest_framework import serializers
from .models import User
class UserSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        fields = ('__all__')#todos los fields del modelo 


class LoginUserSerializer(serializers.Serializer):

    email = serializers.CharField()
    password = serializers.CharField()
