from rest_framework import serializers
from user import models


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Country
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = '__all__'


class ProfileSerialzier(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = '__all__'


class SupplierSerialzier(serializers.ModelSerializer):
    class Meta:
        model = models.Supplier
        fields = '__all__'


class CustomerSerialzier(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = '__all__'


class ContactSerialzier(serializers.ModelSerializer):
    class Meta:
        model = models.Contact
        fields = '__all__'


class BillingContactSerialzier(serializers.ModelSerializer):
    class Meta:
        model = models.BillingContact
        fields = '__all__'


class ShippingContactSerialzier(serializers.ModelSerializer):
    class Meta:
        model = models.ShippingContact
        fields = '__all__'

