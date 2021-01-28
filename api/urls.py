from rest_framework.routers import DefaultRouter
from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path, include

from inventory.views import PartViewSet, PartRequestViewSet, UserViewSet

router = DefaultRouter()

router.register(r'user', UserViewSet)
router.register(r'part', PartViewSet)
router.register(r'partrequest', PartRequestViewSet)


urlpatterns = format_suffix_patterns([
    path('accounts/', include('rest_registration.api.urls'))

])

urlpatterns += [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls'))
]
