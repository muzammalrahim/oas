from rest_framework.routers import DefaultRouter
from rest_framework.urls import urlpatterns
from django.urls import path, include

from inventory.views import PartViewSet, PartRequestViewSet

router = DefaultRouter()

router.register(r'part', PartViewSet)
router.register(r'partrequest', PartRequestViewSet)
urlpatterns += [
    path('', include(router.urls))
]
