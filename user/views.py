from user import models
from user.models import Supplier
from inventory.models import Manufacturer, ProductCategory
from user import serializers
from oas import settings
from utils.utils import get_settings
from rest_framework import viewsets
from constance import config
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.status import (
    HTTP_200_OK
)
# Create your views here.

class CountryViewSet(viewsets.ModelViewSet):
    queryset = models.Country.objects.all()
    serializer_class = serializers.CountrySerializer

    
class UserViewSet(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = models.Profile.objects.all()
    serializer_class = serializers.ProfileSerialzier


class SupplierViewSet(viewsets.ModelViewSet):
    queryset = Supplier.objects.all()
    serializer_class = serializers.SupplierSerialzier


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerialzier


class ContactViewSet(viewsets.ModelViewSet):
    queryset = models.Contact.objects.all()
    serializer_class = serializers.ContactSerialzier


class BillingContactViewSet(viewsets.ModelViewSet):
    queryset = models.BillingContact.objects.all()
    serializer_class = serializers.BillingContactSerialzier


class ShippingContactViewSet(viewsets.ModelViewSet):
    queryset = models.ShippingContact.objects.all()
    serializer_class = serializers.ShippingContactSerialzier


class SettingViewSet(viewsets.ViewSet):

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
        return self.setting(request, allow_settings)
      
      
def admin_panel(request):
	return render(request, 'admin/build/index.html')


@api_view(['POST'])
def oas_models(request):
    search_models = request.data.get('models')
    
    allowed_models = [
        'Country','Supplier','Manufacturer','ProductCategory'
    ]

    output = {}
    for model in search_models:
         # duplicated models will end by __{keyword}
        ending = None
        if '__' in model: 
            model_, ending = model.split('__')
        else:
            model_ = model
        # check if model is allowed 
        if model_ in allowed_models:
            abmodel = globals()[model_] # make model object
            queryset = abmodel.objects.filter()

            # apply filters on base of user params
            kwargs = {}
            maxLength = None 
            for param in search_models[model]:
                if param == 'length':
                    maxLength = search_models[model][param]
                    continue
                # check if model has field mentionend in param
                # if hasattr(abmodel, param): # not work for many to many related field :(
                try:
                    kwargs['{}'.format(param)] = search_models[model][param]
                except:
                    pass
            if kwargs:
                queryset = queryset.filter(**kwargs)

            if maxLength is not None:
                queryset = queryset[:maxLength]
    
            # default_option = [{"id" : "", "name" : "--None--"}]
            # output[model] = default_option + list(queryset.values())
            output[model] = queryset.values()
    return Response(output, status=HTTP_200_OK)
