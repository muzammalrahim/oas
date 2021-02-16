from rest_framework import serializers
from inventory import models as inventory_model
from utils import utils


class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = inventory_model.Enquiry
        fields = '__all__'


class InventorySerializer(serializers.ModelSerializer):

    def to_representation(self, instance):
        representation = super(InventorySerializer, self).to_representation(instance)
        related_models = ['product_category', 'supplier', 'product_manufacturer']

        for model in related_models:
            try:
                representation[model] = utils.to_dict(getattr(instance, model))
            except:
                representation[model] = None

        return representation

    class Meta:
        model = inventory_model.Inventory
        fields = '__all__'


class ManufacturerSerializer(serializers.ModelSerializer):
    class Meta:
        model = inventory_model.Manufacturer
        fields = '__all__'


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = inventory_model.ProductCategory
        fields = '__all__'
