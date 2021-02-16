# Generated by Django 3.1.5 on 2021-02-08 06:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Enquiry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email_address', models.CharField(max_length=191)),
                ('phone_number', models.CharField(blank=True, max_length=191, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'oas_enquiries',
                'ordering': ['-updated_at'],
            },
        ),
        migrations.CreateModel(
            name='Manufacturer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=191)),
                ('slug', models.SlugField(blank=True, max_length=191, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'oas_manufacturers',
                'ordering': ['-updated_at'],
            },
        ),
        migrations.CreateModel(
            name='ProductCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=191)),
                ('slug', models.SlugField(blank=True, max_length=191, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'oas_product_category',
                'ordering': ['-updated_at'],
            },
        ),
        migrations.CreateModel(
            name='Inventory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('part_number', models.CharField(max_length=50, unique=True)),
                ('alt_part_number', models.CharField(blank=True, max_length=50, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('condition', models.CharField(blank=True, choices=[('NE', 'NE'), ('NS', 'NS'), ('SV', 'SV'), ('AR', 'AR'), ('FN', 'FN'), ('US', 'US'), ('RP', 'RP')], max_length=5, null=True)),
                ('quantity', models.IntegerField(default=0)),
                ('tag_date', models.DateField(blank=True, null=True)),
                ('turn_around_time', models.TextField(blank=True, null=True)),
                ('hazmat', models.CharField(blank=True, choices=[('YES', 'YES'), ('No', 'No')], max_length=5, null=True)),
                ('certification', models.TextField(blank=True, null=True)),
                ('unit_price', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('unit_of_measure', models.CharField(blank=True, choices=[('CM', 'CM'), ('Box', 'Box'), ('KG', 'KG')], max_length=5, null=True)),
                ('hot_sale_item', models.CharField(blank=True, choices=[('YES', 'YES'), ('No', 'No')], max_length=5, null=True)),
                ('product_image', models.ImageField(blank=True, max_length=191, null=True, upload_to='')),
                ('status', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('product_category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.productcategory')),
                ('product_manufacturer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inventory.manufacturer')),
            ],
            options={
                'db_table': 'oas_inventory',
                'ordering': ['-updated_at'],
            },
        ),
    ]
