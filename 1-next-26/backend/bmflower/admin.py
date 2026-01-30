from django.contrib import admin
from .models import Home, About, Message, ServiceDescription

# Register your models here.
admin.site.register(Home)
admin.site.register(About)
admin.site.register(Message)
admin.site.register(ServiceDescription)
