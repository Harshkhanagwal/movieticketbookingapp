from django.db import models

class Genre(models.Model):
    id = models.IntegerField(primary_key=True) 
    genre = models.CharField(max_length=100)

    def __str__(self):
        return self.genre



class Movie(models.Model):
    movie_id = models.IntegerField()
    title = models.CharField(max_length=255)
    original_title = models.CharField(max_length=255)
    adult = models.BooleanField()
    backdrop_path = models.CharField(max_length=255)
    overview = models.TextField()
    popularity = models.FloatField()
    release_date = models.CharField(max_length=99)
    vote_average = models.FloatField()
    vote_count = models.IntegerField()
    genre_ids = models.ManyToManyField(Genre) 
    poster_path = models.CharField(max_length=255)

    def __str__(self):
        return self.title



# {
# "adult": false,
# "backdrop_path": "/k6tdiMTO39RQj3dhfspuzprfoe0.jpg",
# "genre_ids": [
# 80
# ],
# "id": 941109,
# "original_language": "en",
# "original_title": "Play Dirty",
# "overview": "Expert thief Parker gets a shot at a major heist, but to pull it off he and his team must outsmart a South American dictator, the New York mob, and the world's richest man.",
# "popularity": 460.1031,
# "poster_path": "/ovZ0zq0NwRghtWI1oLaM0lWuoEw.jpg",
# "release_date": "2025-10-01",
# "title": "Play Dirty",
# "video": false,
# "vote_average": 6.497,
# "vote_count": 178
# }