from rest_framework import serializers

from inventory.models import Parts, PartsRequest


class PartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parts
        fields = '__all__'


class PartRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartsRequest
        fields = '__all__'
