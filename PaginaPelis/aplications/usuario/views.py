import json
from django.http import HttpResponse
from django.shortcuts import render
from .models import User
from django.contrib.auth.hashers import make_password,check_password
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView, CreateAPIView,
    RetrieveAPIView, DestroyAPIView,
    UpdateAPIView, RetrieveUpdateAPIView,

# RetrieveAPIView es como el detailview
)

from .serializer import (
    UserSerializer,LoginUserSerializer

)

class UserCreateView(APIView):
    """ Crea un objeto """
     
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs): 
        # file = request.data
        passwordhas = make_password(request.data['password'] )
        # print(file,passwordhas)
        user = User.objects.create(
            nombre= request.data['nombre'],
            email= request.data['email'],
            edad= request.data['edad'],
            password= passwordhas,
        )
        # print('+++++++++++++++++++++++++++++++++++++++++++')
        # print(check_password(request.data['password'],passwordhas))
        # print('+++++++++++++++++++++++++++++++++++++++++++')
        return HttpResponse(json.dumps({'message': "User Create"}), status=200)  

class UserLoginApiView(APIView):
    """retorna datos en base a la palabra""" 
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs): 
        print('+++++++++++++++++++++++++++++++++++++++++++')
        correo = request.data['email']
        print('+++++++++++++++++++++++++++++++++++++++++++')
        # print(kword)
        us= User.objects.filter(
            email= correo
        )
        # import pdb; pdb.set_trace()
        print(us[0].nombre)
        if len(us) ==0:
            print("No tiene")
            return HttpResponse(json.dumps({'Error': "usuario no existe",}), status=200)  
        else:
            verifi = check_password(str(request.data['password']),str(us[0].password))
            print(verifi)
            print(str(us[0].password))
            print(str(request.data['password']))
            if verifi ==  True:
                return HttpResponse(json.dumps({'nombre': str(us[0].nombre),
                                            'email':str(us[0].email),
                                            'Login':True}), status=200)  
            else:
               return HttpResponse(json.dumps({'Error': "contraseña invalida",}), status=200)       
            
            

        