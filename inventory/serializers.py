from rest_framework import serializers

from inventory import models as inventry_model
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class ProfileSerialzier(serializers.ModelSerializer):
    class Meta:
        model = inventry_model.Profile
        fields = '__all__'


class SupplierSerialzier(serializers.ModelSerializer):
    class Meta:
        model = inventry_model.Supplier
        fields = '__all__'


class CustomerSerialzier(serializers.ModelSerializer):
    class Meta:
        model = inventry_model.Customer
        fields = '__all__'


class ContractSerialzier(serializers.ModelSerializer):
    class Meta:
        model = inventry_model.Contract
        fields = '__all__'


class BillingSerialzier(serializers.ModelSerializer):
    class Meta:
        model = inventry_model.BilingContract
        fields = '__all__'


class ShippingSerialzier(serializers.ModelSerializer):
    class Meta:
        model = inventry_model.ShippingContract
        fields = '__all__'


class EnquiriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = inventry_model.Enquiries
        fields = '__all__'


class InventrySerializer(serializers.ModelSerializer):
    class Meta:
        model = inventry_model.Inventry
        fields = '__all__'


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = inventry_model.Country
        fields = '__all__'


class ManufacturerSerialzier(serializers.ModelSerializer):
    class Meta:
        model = inventry_model.Manufacturer
        fields = '__all__'


class CategorySerialzier(serializers.ModelSerializer):
    class Meta:
        model = inventry_model.Category
        fields = '__all__'
