
from rest_framework.response import Response 
from rest_framework.decorators import api_view
from bmflower.models import Item, Home, About, Message, ServiceDescription
from .serializers import ItemSerializer, HomeSerializer, AboutSerializer, MessageSerializer, ServiceDescriptionSerializer

@api_view(['GET'])
def getData(request):
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addItem(request):
    serializer = ItemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def getHomeData(request):
    items = Home.objects.all()
    serializer = HomeSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addHomeItem(request):
    serializer = HomeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def getAboutData(request):
    items = About.objects.all()
    serializer = AboutSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addAboutItem(request):
    serializer = AboutSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def getMessageData(request):
    items = Message.objects.all()
    serializer = MessageSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addMessageItem(request):
    serializer = MessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def getServiceDescriptionData(request):
    items = ServiceDescription.objects.all()
    serializer = ServiceDescriptionSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addServiceDescriptionItem(request):
    serializer = ServiceDescriptionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
