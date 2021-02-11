from rest_framework import serializers
from user import models
from utils import utils
from django.contrib.auth.models import Group


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Country
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = '__all__'


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = '__all__'


class SupplierSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        representation = super(SupplierSerializer, self).to_representation(instance)
        related_models = ['country']

        for model in related_models:
            try:
                representation[model] = utils.to_dict(getattr(instance, model))
            except:
                representation[model] = None

        return representation

    class Meta:
        model = models.Supplier
        fields = '__all__'


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contact
        fields = '__all__'


class BillingContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.BillingContact
        fields = '__all__'


class ShippingContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ShippingContact
        fields = '__all__'
