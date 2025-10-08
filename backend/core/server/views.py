from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from server.models import Movie, Genre
from server.serializers import MovieSerializer, GenreSerializer


@api_view(['GET', 'POST', 'DELETE'])
def movies(request):
    if request.method == 'GET':
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        data = request.data
        obj = Movie.objects.get(id = data['id'])
        obj.delete()

        return Response({
            'message' : "Movie Deleted :)"
        })


@api_view(['GET', 'POST'])
def genres(request):
    if request.method == 'GET':
        genres = Genre.objects.all()
        serializer = GenreSerializer(genres, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GenreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
