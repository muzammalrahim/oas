from rest_framework import viewsets
from inventory import models as inventory_model
from inventory import serializers as inventory_serializer
from rest_framework.decorators import action
from rest_framework.status import (
	HTTP_200_OK,
)
from rest_framework.response import Response
from rest_framework.request import Request


class EnquiryViewSet(viewsets.ModelViewSet):
	queryset = inventory_model.Enquiry.objects.all()
	serializer_class = inventory_serializer.EnquirySerializer
	filterset_fields = ['part_number', 'phone_number']
	search_fields = ['company__name']

	@action(detail=False, methods=['post'], url_path='delete-all', url_name="delete-all")
	def destroy_all(self, request):
		ids = request.data.get('ids', [])
		inventory_model.Enquiry.objects.filter(id__in=ids).delete()
		return Response(status=HTTP_200_OK)


class InventoryViewSet(viewsets.ModelViewSet):
	queryset = inventory_model.Inventory.objects.all()
	serializer_class = inventory_serializer.InventorySerializer
	filterset_fields = ['condition', 'status', 'hazmat', 'hot_sale_item', 'unit_of_measure']
	search_fields = ['part_number', 'alt_part_number', 'quantity', 'tag_date', 'unit_price',
					 'supplier__company_name', 'product_category__name', 'product_manufacturer__name']

	def retrieve(self, request: Request, *args, **kwargs):
		instance = self.get_object()
		serializer = self.get_serializer(instance)
		data = serializer.data
		data['product_image_name'] = instance.product_image.name
		return Response(data)

	@action(detail=False, methods=['post'], url_path='delete-all', url_name="delete-all")
	def destroy_all(self, request, *args, **kwargs):
		ids = request.data.get('ids', [])
		inventory_model.Inventory.objects.filter(id__in=ids).delete()
		return Response(status=HTTP_200_OK)


class ManufacturerViewSet(viewsets.ModelViewSet):
	queryset = inventory_model.Manufacturer.objects.all()
	serializer_class = inventory_serializer.ManufacturerSerializer

	search_fields = ['name']

	@action(detail=False, methods=['post'], url_path='delete-all', url_name='delete-all')
	def delete_all(self, request):
		ids = request.data.get('ids', [])
		inventory_model.Manufacturer.objects.filter(id__in=ids).delete()
		return Response(status=HTTP_200_OK)


class ProductCategoryViewSet(viewsets.ModelViewSet):
	queryset = inventory_model.ProductCategory.objects.all()
	serializer_class = inventory_serializer.ProductCategorySerializer

	search_fields = ['name']

	@action(detail=False, methods=['post'], url_path='delete-all', url_name='delete-all')
	def delete_all(self, request):
		ids = request.data.get('ids', [])
		inventory_model.ProductCategory.objects.filter(id__in=ids).delete()
		return Response(status=HTTP_200_OK)
