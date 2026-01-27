from rest_framework import serializers
from bmflower.models import Item, Home, About, Message, ServiceDescription

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

class ServiceDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceDescription
        fields = '__all__'


class AboutSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True)
    descriptions = ServiceDescriptionSerializer(many=True, read_only=True)
    class Meta:
        model = About
        fields = '__all__'
