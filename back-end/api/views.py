from rest_framework.generics import CreateAPIView
from .serializers import UserSerializers
from .models import User

class CreateUserAPIView(CreateAPIView):
    serializer_class = UserSerializers
    queryset = User.objects.all()