from rest_framework import viewsets
from django.contrib.auth.models import User
from inventory.models import Parts, PartsRequest
from inventory.serializers import PartSerializer, PartRequestSerializer, UserSerializer
from rest_framework.viewsets import ViewSet
from constance import config
from rest_framework.response import Response

from oas import settings
from utils.utils import get_settings


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PartViewSet(viewsets.ModelViewSet):
    queryset = Parts.objects.all()
    serializer_class = PartSerializer


class PartRequestViewSet(viewsets.ModelViewSet):
    queryset = PartsRequest.objects.all()
    serializer_class = PartRequestSerializer


class SettingViewSet(ViewSet):
    # permission_classes = (IsAuthenticatedSettingManager,)
    def setting(self, request, allow_settings):
        if request.method == 'GET':
            # list all setting items
            return Response(data=get_settings(allow_settings))
        else:
            # change all allow setting items in allow_settings
            for key in request.data:
                if key in allow_settings:
                    value = request.data[key]
                    setattr(config, key, '' if value is None else value)

            return Response(data=get_settings(allow_settings))

    def create(self, request):
        """
        <p>update with POST:<code>{'Key': new_value}</code>
        """
        # print(getattr(settings, 'CONSTANCE_CONFIG', {}).items())
        allow_settings = [key for key, options in getattr(settings, 'CONSTANCE_CONFIG', {}).items()]
        # allow_settings.append(['key'])
        # print('allow_settings',allow_settings)
        return self.setting(request, allow_settings)

    def list(self, request):
        """
        get all setting item
        """
        allow_settings = [key for key, options in getattr(settings, 'CONSTANCE_CONFIG', {}).items()]
        print(allow_settings)
        return self.setting(request, allow_settings)