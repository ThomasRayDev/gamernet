from django.shortcuts import render, redirect

from django.http import HttpResponse

from django.contrib.auth import authenticate, login

from .models import Gamers

import json


def index(request):
    return render(request, "main_page/index.html")


def sign_up(request):
    if request.method == 'POST' or request.method == 'GET' :

        data = json.loads(request.body)

        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if Gamers.objects.filter(email=email).exists():
            return HttpResponse("Email already in use", status=400)

        try:
            user = Gamers.objects.create_user(email=email, username=username, password=password)
            return HttpResponse("User created successfully", status=201)

        except Exception as e:
            return HttpResponse(f"Error: {str(e)}", status=400)