from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from inventory.models import Parts, PartsRequest
from inventory.serializers import PartSerializer, PartRequestSerializer


class PartViewSet(viewsets.ModelViewSet):
    queryset = Parts.objects.all()
    serializer_class = PartSerializer


class PartRequestViewSet(viewsets.ModelViewSet):
    queryset = PartsRequest.objects.all()
    serializer_class = PartRequestSerializer
