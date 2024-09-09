from django.shortcuts import render, redirect

from django.http import Http404, HttpResponse, JsonResponse

from django.middleware.csrf import get_token

from django.contrib.auth import authenticate, login, logout

from .models import Gamers

import json


def index(request):
    return render(request, "main_page/index.html")


def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})

def sign_up(request):
    if request.method == 'POST':

        try:
            data = json.loads(request.body)

            username = data.get('username')
            email = data.get('email')
            password = data.get('password')

        except Exception as e:
            return HttpResponse(f"Error: {str(e)}", status=400)


        if Gamers.objects.filter(email=email).exists():
            return HttpResponse("Email already in use", status=400)


        try:
            Gamers.objects.create_user(email=email, username=username, password=password)

        except Exception as e:
            return HttpResponse(f"Error: {str(e)}", status=400)



        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)

            request.session['user_id'] = user.id
            request.session['username'] = user.username
            request.session['email'] = user.email

            print('---', user.username + '#' + user.id, user.email)

            return HttpResponse("User has been created!" + " - Hello " + user.username + '#' + user.id + " " + user.email, status=200)

        else:
            return HttpResponse("Invalid credentials", status=401)




def sign_in(request):
    if request.method == 'POST':

        try:
            data = json.loads(request.body)

            email = data.get('email')
            password = data.get('password')

        except Exception as e:
            return HttpResponse(f"Error: {str(e)}", status=400)


        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)

            request.session['user_id'] = user.id
            request.session['username'] = user.username
            request.session['email'] = user.email

            print('---', user.username + '#' + user.id, user.email)

            return HttpResponse("User authenticated successfully" + " - Hello " + user.username + '#' + user.id + " " + user.email, status=200)
        else:
            return HttpResponse("Invalid credentials", status=401)


def logout_session(request):
    if request.method == 'GET':
        logout(request)
        return HttpResponse("You logout from", status=200)


def test(request):
    if request.method == 'GET':
        user_id = request.session.get('user_id')
        username = request.session.get('username')
        email = request.session.get('email')

        print(user_id)

        return HttpResponse(str(username) + '#' + str(user_id), email, status=200)
