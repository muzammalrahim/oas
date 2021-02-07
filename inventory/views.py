from rest_framework import viewsets
from inventory import models as inventory_model
from inventory import serializers as inventory_serializer
from rest_framework.decorators import action
from rest_framework.status import (
	HTTP_200_OK,
)
from rest_framework.response import Response

class EnquiryViewSet(viewsets.ModelViewSet):
	queryset = inventory_model.Enquiry.objects.all()
	serializer_class = inventory_serializer.EnquirySerializer


class InventoryViewSet(viewsets.ModelViewSet):
	queryset = inventory_model.Inventory.objects.all()
	serializer_class = inventory_serializer.InventorySerializer
	filterset_fields = ['condition','status','hazmat','hot_sale_item','unit_of_measure']
	search_fields = ['part_number','alt_part_number','quantity','tag_date','unit_price',
	'supplier__company_name', 'product_category__name','product_manufacturer__name']

	@action(detail=False, methods=['post'], url_path='delete-all', url_name="delete-all")
	def destroy_all(self, request, *args, **kwargs):
		ids = request.data.get('ids', [])
		inventory_model.Inventory.objects.filter(id__in=ids).delete()
		return Response(status=HTTP_200_OK)


class ManufacturerViewSet(viewsets.ModelViewSet):
	queryset = inventory_model.Manufacturer.objects.all()
	serializer_class = inventory_serializer.ManufacturerSerialzier


class ProductCategoryViewSet(viewsets.ModelViewSet):
	queryset = inventory_model.ProductCategory.objects.all()
	serializer_class = inventory_serializer.ProductCategorySerialzier



