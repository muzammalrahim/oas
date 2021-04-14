# Generated by Django 3.1.5 on 2021-04-13 06:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductEnquiry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'oas_productenquiries',
                'ordering': ['enquiry__status', 'part_number__part_number', '-created_at', '-updated_at'],
            },
        ),
        migrations.AlterModelOptions(
            name='enquiry',
            options={'ordering': ['part_number__part_number', 'company', 'email_address', 'phone_number', 'country__name', 'status', '-created_at', '-updated_at']},
        ),
        migrations.AlterModelOptions(
            name='inventory',
            options={'ordering': ['quantity', 'product_title', 'description', 'condition', 'hazmat', 'unit_price', 'part_number', 'status', '-created_at', '-updated_at']},
        ),
        migrations.AlterModelOptions(
            name='manufacturer',
            options={'ordering': ['name', 'slug', 'created_at', '-updated_at']},
        ),
        migrations.AlterModelOptions(
            name='productcategory',
            options={'ordering': ['name', 'slug', 'created_at', '-updated_at']},
        ),
    ]