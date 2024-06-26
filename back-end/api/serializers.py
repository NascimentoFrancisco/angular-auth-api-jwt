from rest_framework import serializers
from .models import User

class UserSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['username','name','email', 'password']
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user