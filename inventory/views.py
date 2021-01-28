from rest_framework import viewsets
from django.contrib.auth.models import User
from inventory.models import Parts, PartsRequest
from inventory.serializers import PartSerializer, PartRequestSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PartViewSet(viewsets.ModelViewSet):
    queryset = Parts.objects.all()
    serializer_class = PartSerializer


class PartRequestViewSet(viewsets.ModelViewSet):
    queryset = PartsRequest.objects.all()
    serializer_class = PartRequestSerializer
