from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

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

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
