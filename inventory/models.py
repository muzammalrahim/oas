from django.db import models
from django.contrib.auth.models import User
from polymorphic.models import PolymorphicModel


class Profile(PolymorphicModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=191)
    contact_person = models.CharField(max_length=191, blank=True, null=True)
    email_address = models.CharField(max_length=191)
    landline_phone = models.CharField(max_length=191, blank=True, null=True)
    mobile_Phone = models.CharField(max_length=191, blank=True, null=True)
    country = models.ForeignKey('Country', on_delete=models.CASCADE, blank=True, null=True)
    enquiries = models.ForeignKey('Enquiries', on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)

    class Meta:
        db_table = 'oas_profile'


class Supplier(Profile):
    type = models.CharField(max_length=30)

    class Meta:
        db_table = 'oas_supplier'


class Customer(Profile):
    bill_address_one = models.TextField(blank=True, null=True)
    bill_address_two = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'oas_customer'


class Contact(PolymorphicModel):
    name = models.CharField(max_length=191)
    contact_person = models.CharField(max_length=191, blank=True, null=True)
    email = models.CharField(max_length=191)
    country = models.ForeignKey('Country', on_delete=models.CASCADE, blank=True, null=True)
    customer = models.OneToOneField(Customer, on_delete=models.CASCADE, blank=True, null=True)
    bill_address_one = models.TextField(blank=True, null=True)
    bill_address_two = models.TextField(blank=True, null=True)
    zip_code = models.CharField(max_length=191, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'oas_contact'


class BillingContact(Contact):
    type = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        db_table = 'oas_billing_contact'


class ShippingContact(Contact):
    type = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        db_table = 'oas_shipping_contact'


class Enquiries(models.Model):
    part_number = models.ForeignKey('Inventory', on_delete=models.CASCADE, blank=True, null=True)
    company = models.ForeignKey(Customer, on_delete=models.CASCADE, blank=True, null=True,
                                related_name='company_customer')
    contact_person = models.ForeignKey(Customer, on_delete=models.CASCADE, blank=True, null=True,
                                       related_name='contact_person_customer')
    email_address = models.CharField(max_length=191)
    phone_number = models.CharField(max_length=191, blank=True, null=True)
    country = models.ForeignKey('Country', on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'oas_enquiries'


class Inventory(models.Model):
    part_number = models.TextField(blank=True, null=True)
    alt_part_number = models.TextField(blank=True, null=True)
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
    tag_date = models.DateField(blank=True, null=True)
    turn_around_time = models.TextField()
    HAZMAT_CHOICES = (
        ('YES', 'yeas'),
        ('No', 'no')
    )
    hazmat = models.CharField(choices=HAZMAT_CHOICES, max_length=5, blank=True, null=True)
    certification = models.TextField(blank=True, null=True)
    unit_price = models.DecimalField(max_digits=7, decimal_places=2, blank=True)
    UOM_CHOICES = (
        ('CM', 'cm'),
        ('Box', 'box'),
        ('KG', 'kg'),
    )
    unit_of_measure = models.CharField(choices=UOM_CHOICES, max_length=5, blank=True, null=True)
    HOT_SALE_CHOICES = (
        ('YES', 'yes'),
        ('No', 'no')
    )
    hot_sale_item = models.CharField(choices=HOT_SALE_CHOICES, max_length=5, blank=True, null=True)
    product_image = models.ImageField(max_length=191, blank=True, null=True)
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, blank=True, null=True)
    category = models.ForeignKey('Country', on_delete=models.CASCADE, blank=True, null=True)
    manufacture = models.ForeignKey('Manufacturer', on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'oas_inventory'


class Country(models.Model):
    name = models.CharField(max_length=191)
    code = models.CharField(max_length=191, blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'oas_country'


class Manufacturer(models.Model):
    name = models.CharField(max_length=191)
    slug = models.SlugField(max_length=250, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'oas_manufacturer'


class Category(models.Model):
    name = models.CharField(max_length=191)
    slug = models.SlugField(max_length=250, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'oas_category'
