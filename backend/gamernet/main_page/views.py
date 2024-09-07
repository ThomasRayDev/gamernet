from django.shortcuts import render, redirect
from django.contrib.auth.models import User

from django.http import HttpResponse

from .models import Question


def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    context = {"latest_question_list": latest_question_list}
    return render(request, "main_page/index.html", context)


def sign_up(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            user = User.objects.create_user(username=username,
                                        email=email,
                                        password=password)
            return HttpResponse("Successful!")

        except:
            return HttpResponse("Error!")


