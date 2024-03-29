# Generated by Django 3.2.20 on 2023-10-26 11:13

import datetime
from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=250)),
                ('description', models.TextField(blank=True, null=True)),
                ('status', models.PositiveIntegerField(choices=[(1, 'Active'), (2, 'Inactive')], default=1)),
            ],
            options={
                'verbose_name': '2 - Category',
            },
        ),
        migrations.CreateModel(
            name='Invoice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('invoice_type', models.PositiveIntegerField(choices=[(1, 'Sales Invoice'), (2, 'Overdue Invoice'), (3, 'Interim Invoice'), (4, 'Final Invoice')], default=4)),
                ('total_amount', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('transaction', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('remaining_amount', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('invoice_date', models.DateField(default=datetime.date.today)),
            ],
            options={
                'verbose_name': '5 - Invoice',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('code', models.CharField(blank=True, max_length=256, null=True)),
                ('name', models.CharField(blank=True, max_length=256, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('price', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('status', models.PositiveIntegerField(choices=[(1, 'Active'), (2, 'Inactive')], default=1)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_category', to='inventory_management.category')),
            ],
            options={
                'verbose_name': '3 - Product',
            },
        ),
        migrations.CreateModel(
            name='Supplier',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=120, unique=True)),
                ('phone_number', phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, null=True, region=None, unique=True)),
                ('address', models.CharField(max_length=220)),
            ],
            options={
                'verbose_name': '1 - Supplier',
            },
        ),
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('quantity', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('type', models.PositiveIntegerField(choices=[(1, 'Stock-In'), (2, 'Stock-Out')], default=1)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_stock', to='inventory_management.product')),
            ],
            options={
                'verbose_name': '4 - Stock',
            },
        ),
        migrations.CreateModel(
            name='InvoiceItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('unit_price', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('quantity', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('invoice', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='invoice_item', to='inventory_management.invoice')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='invoiceitem_product', to='inventory_management.product')),
                ('stock', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='inventory_management.stock')),
            ],
            options={
                'verbose_name': '6 - Invoice Item',
            },
        ),
        migrations.AddField(
            model_name='invoice',
            name='supplier',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='supplier_user', to='inventory_management.supplier'),
        ),
    ]
