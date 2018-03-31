from django.db import models
from django.utils import timezone

# Create your models here.

class Time_post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    day = models.CharField(max_length=15)
    starttime = models.TimeField()
    endtime = models.TimeField()
    Descrptn = models.CharField(max_length=200)
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title
