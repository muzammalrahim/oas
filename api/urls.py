from rest_framework.routers import DefaultRouter
from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path, include
from inventory import views as inventry_view

router = DefaultRouter()

router.register(r'user', inventry_view.UserViewSet)
router.register(r'profile', inventry_view.ProfileViewSet)
router.register(r'supplier', inventry_view.SupplierViewSet)

router.register(r'contract', inventry_view.ContractViewSet)
router.register(r'billingcontract', inventry_view.BillingViewSet)
router.register(r'shippingcontract', inventry_view.ShippingViewSet)

router.register(r'enquiry', inventry_view.EnquiriesViewSet)
router.register(r'inventry', inventry_view.InventryViewSet)

router.register(r'country', inventry_view.CountryViewSet)
router.register(r'manufacture', inventry_view.ManufacturetViewSet)
router.register(r'category', inventry_view.CategoryViewSet)

router.register(r'setting', inventry_view.SettingViewSet, basename='settings')

urlpatterns = format_suffix_patterns([
    path('accounts/', include('rest_registration.api.urls'))

])

urlpatterns += [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls'))
]
