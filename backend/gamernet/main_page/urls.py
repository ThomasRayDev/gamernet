from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("main_page/<int:question_id>/", views.detail, name="detail"),
    path("main_page/<int:question_id>/results/", views.results, name="results"),
    path("main_page/<int:question_id>/vote/", views.vote, name="vote"),
    path("test/", views.test, name="test"),
]