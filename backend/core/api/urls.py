from server.views import movies, genres
from django.urls import path

urlpatterns = [
    path('movie/',movies),
    path('genre/',genres )
]