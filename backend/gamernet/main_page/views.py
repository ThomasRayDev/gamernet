from django.shortcuts import render, redirect
from django.contrib.auth.models import User

from django.http import HttpResponse

from .models import Question

import json


def index(request):
    return render(request, "main_page/index.html")


def sign_up(request):
    if request.method == 'POST':

        data = json.loads(request.body)

        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        try:
            user = User.objects.create_user(username=username,
                                        email=email,
                                        password=password)
            return HttpResponse("Successful!")

        except:
            return HttpResponse("Error!")


