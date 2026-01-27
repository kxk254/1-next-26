from django.db import models
import os 

# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)


class Home(models.Model):
    item_url = models.URLField(max_length=200, default="")
    img_src = models.ImageField(
            upload_to='home_images/',
            blank=True,
            null=True,
            )
    description = models.TextField()
    item_name = models.CharField(max_length=50, default="")
    item_category = models.CharField(max_length=50, default="")
    item_price = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.item_name



class About(models.Model):
    service_title = models.CharField(max_length=50, default="")
    img_first = models.ImageField(
            upload_to='about_images/',
            blank=True,
            null=True,
            )
    img_second = models.ImageField(
            upload_to='about_images/',
            blank=True,
            null=True,
            )
    img_third = models.ImageField(
            upload_to='about_images/',
            blank=True,
            null=True,
            )
    service_link = models.URLField(blank=True)
    service_insta = models.URLField(blank=True)

    def __str__(self):
        return self.service_title

class Message(models.Model):
    service = models.ForeignKey(About, on_delete=models.CASCADE, related_name="messages")
    content = models.TextField()
    href = models.URLField(blank=True)
    icon = models.ImageField(
            upload_to='about_images/',
            blank=True,
            null=True,
            )


    def __str__(self):
        return self.content[:20]

class ServiceDescription(models.Model):
    TYPE_CHOICES = [
            ("text", "Text"),
            ("link", "Link"),
            ]
    service = models.ForeignKey(About, on_delete=models.CASCADE, related_name="descriptions")
    type_choice = models.CharField(max_length=10, choices=TYPE_CHOICES)
    content = models.TextField()
    href =  models.URLField(blank=True)
    icon =  models.ImageField(
            upload_to='about_images/',
            blank=True,
            null=True,
            )


    def __str__(self):
        return f"{self.type_choice}: {self.content[:20]}"
