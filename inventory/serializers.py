from rest_framework import serializers
from inventory import models as inventory_model
from utils import utils


# class Base64ImageField(serializers.ImageField):

#     def to_internal_value(self, data):

#         if isinstance(data, six.string_types):
#             if 'data:' in data and ';base64,' in data:
#                 header, data = data.split(';base64,')

#             try:
#                 decoded_file = base64.b64decode(data)
#             except TypeError:
#                 self.fail('invalid_image')

#             if 'data-orig' in header:
#                 fname, garbage = header.split(';data:')
#                 garbage_val, file_name = fname.split('data-orig:')
#                 complete_file_name = "thumb_%s" % (file_name)
#             else:
#                 file_name = str(uuid.uuid4())[:12]  # 12 characters are more than enough.
#                 file_extension = self.get_file_extension(file_name, decoded_file)
#                 complete_file_name = "%s.%s" % (file_name, file_extension,)
#             data = ContentFile(decoded_file, name=complete_file_name)

#         return super(Base64ImageField, self).to_internal_value(data)

#     def get_file_extension(self, file_name, decoded_file):
#         import imghdr

#         extension = imghdr.what(file_name, decoded_file)
#         extension = "jpg" if extension == "jpeg" else extension

#         return extension

#     def from_native(self, data):
#         if isinstance(data, basestring) and data.startswith('data:image'):
#             # base64 encoded image - decode
#             format, imgstr = data.split(';base64,')  # format ~= data:image/X,
#             ext = format.split('/')[-1]  # guess file extension

#             data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)

#         return super(Base64ImageField, self).from_native(data)

class EnquirySerializer(serializers.ModelSerializer):

    def to_representation(self, instance):
        representation = super(InventorySerializer, self).to_representation(instance)
        related_models = ['country', 'part_number']

        for model in related_models:
            try:
                representation[model] = utils.to_dict(getattr(instance, model))
            except:
                representation[model] = None

        return representation
    class Meta:
        model = inventory_model.Enquiry
        fields = '__all__'


class InventorySerializer(serializers.ModelSerializer):
    # product_image = Base64ImageField(max_length=None, use_url=True, required=False)

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
