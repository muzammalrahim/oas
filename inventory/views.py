from rest_framework import viewsets
from django.contrib.auth.models import User
from inventory import models as inventry_model
from inventory import serializers as inventry_serializer
from rest_framework.viewsets import ViewSet
from constance import config
from rest_framework.response import Response

from oas import settings
from utils.utils import get_settings


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = inventry_serializer.UserSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = inventry_model.Profile.objects.all()
    serializer_class = inventry_serializer.ProfileSerialzier


class SupplierViewSet(viewsets.ModelViewSet):
    queryset = inventry_model.Supplier.objects.all()
    serializer_class = inventry_serializer.SupplierSerialzier


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = inventry_model.Customer.objects.all()
    serializer_class = inventry_serializer.CustomerSerialzier


class ContractViewSet(viewsets.ModelViewSet):
    queryset = inventry_model.Contract.objects.all()
    serializer_class = inventry_serializer.ContractSerialzier


class BillingViewSet(viewsets.ModelViewSet):
    queryset = inventry_model.BilingContract.objects.all()
    serializer_class = inventry_serializer.BillingSerialzier


class ShippingViewSet(viewsets.ModelViewSet):
    queryset = inventry_model.ShippingContract.objects.all()
    serializer_class = inventry_serializer.ShippingSerialzier


class EnquiriesViewSet(viewsets.ModelViewSet):
    queryset = inventry_model.Enquiries.objects.all()
    serializer_class = inventry_serializer.EnquiriesSerializer


class InventryViewSet(viewsets.ModelViewSet):
    queryset = inventry_model.Inventry.objects.all()
    serializer_class = inventry_serializer.InventrySerializer


class CountryViewSet(viewsets.ModelViewSet):
    queryset = inventry_model.Country.objects.all()
    serializer_class = inventry_serializer.CountrySerializer


class ManufacturetViewSet(viewsets.ModelViewSet):
    queryset = inventry_model.Manufacturer.objects.all()
    serializer_class = inventry_serializer.ManufacturerSerialzier


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = inventry_model.Category.objects.all()
    serializer_class = inventry_serializer.CategorySerialzier


class SettingViewSet(ViewSet):
    def setting(self, request, allow_settings):
        if request.method == 'GET':
            return Response(data=get_settings(allow_settings))
        else:
            for key in request.data:
                if key in allow_settings:
                    value = request.data[key]
                    setattr(config, key, '' if value is None else value)

            return Response(data=get_settings(allow_settings))

    def create(self, request):
        allow_settings = [key for key, options in getattr(settings, 'CONSTANCE_CONFIG', {}).items()]
        return self.setting(request, allow_settings)

    def list(self, request):
        allow_settings = [key for key, options in getattr(settings, 'CONSTANCE_CONFIG', {}).items()]
        print(allow_settings)
        return self.setting(request, allow_settings)
