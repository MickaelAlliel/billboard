from django.db import models

# Create your models here.

class Bill(models.Model):
    title = models.CharField(max_length=200)
    message = models.CharField(max_length=1000)
    author = models.CharField(max_length=200)
    creation_date = models.DateField(auto_now=True)