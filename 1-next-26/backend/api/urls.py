from django.urls import path
from . import views

urlpatterns = [
        path('', views.getData),
        path('add/', views.addItem),
        path('getHome/', views.getHomeData),
        path('addHome/', views.addHomeItem),
        path('getAbout/', views.getAboutData),
        path('addAbout/', views.addAboutItem),
        path('getMessage/', views.getMessageData),
        path('addMessage/', views.addMessageItem),
        path('addServiceDescription/', views.getServiceDescriptionData),
        path('addServiceDescription/', views.addServiceDescriptionItem),
        ]
