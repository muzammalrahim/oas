from profile import Profile

from django.db import models
from django.contrib.auth.models import User
from polymorphic.models import PolymorphicModel


class Parts(models.Model):
    description = models.TextField(max_length=5000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class PartsRequest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    part = models.ForeignKey(Parts, on_delete=models.SET_NULL, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Country(models.Model):
    name = models.CharField(max_length=191)
    code = models.CharField(max_length=191, blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Manufacturer(models.Model):
    name = models.CharField(max_length=191)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Category(models.Model):
    name = models.CharField(max_length=191)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Enquiries(models.Model):
    phone = models.CharField(max_length=191, blank=True, null=True)
    email = models.CharField(max_length=191)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, blank=True, null=True)
    part_request = models.ForeignKey(PartsRequest, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Inventry(models.Model):
    description = models.TextField(blank=True, null=True)
    CONDITION_CHOICES = (
        ('NE', 'ne'),
        ('NS', 'ns'),
        ('SV', 'sv'),
        ('AR', 'ar'),
        ('FN', 'fn'),
        ('US', 'us'),
        ('RP', 'rp'),
    )
    condition = models.CharField(choices=CONDITION_CHOICES, max_length=5, blank=True, null=True)
    quantity = models.IntegerField()
    date = models.DateField(blank=True, null=True)
    turn_around_time = models.TextField()
    HAZMAT_CHOICES = (
        ('asas', 'yeasass'),
        ('asaz', 'as')
    )
    hazmat = models.CharField(choices=HAZMAT_CHOICES, max_length=5, blank=True, null=True)
    certification = models.TextField()
    unit_price = models.DecimalField(max_digits=7, decimal_places=2, blank=True)
    UOM_CHOICES = (
        ('CM', 'cm'),
        ('Box', 'box'),
        ('KG', 'kg'),
    )
    unit_of_measure = models.CharField(choices=UOM_CHOICES, max_length=5, blank=True, null=True)
    HOT_SALE_CHOICES = (
        ('as', 'asas'),
        ('asas', 'asas')
    )
    hot_sale_item = models.CharField(choices=HOT_SALE_CHOICES, max_length=5, blank=True, null=True)
    product_image = models.ImageField(max_length=191, blank=True, null=True)
    # supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True)
    manufacture = models.ForeignKey(Manufacturer, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Profile(PolymorphicModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=191)
    contact_person = models.CharField(max_length=191, blank=True, null=True)
    email = models.CharField(max_length=191)
    contact_Phone = models.CharField(max_length=191, blank=True, null=True)
    landine_number = models.CharField(max_length=191, blank=True, null=True)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Supplier(Profile):
    suppliers = models.CharField(max_length=30)


class Customer(Profile):
    bill_address_one = models.TextField(blank=True, null=True)
    bill_address_two = models.TextField(blank=True, null=True)


class Contract(PolymorphicModel):
    name = models.CharField(max_length=191)
    contact_person = models.CharField(max_length=191, blank=True, null=True)
    email = models.CharField(max_length=191)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, blank=True, null=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, blank=True, null=True)
    bill_address_one = models.TextField(blank=True, null=True)
    bill_address_two = models.TextField(blank=True, null=True)
    contact_person = models.CharField(max_length=191, blank=True, null=True)
    zip_code = models.CharField(max_length=191, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class BilingContract(Contract):
    billingcontracts = models.CharField(max_length=30)


class ShippingContract(Contract):
    shippingcontracts = models.CharField(max_length=30)
