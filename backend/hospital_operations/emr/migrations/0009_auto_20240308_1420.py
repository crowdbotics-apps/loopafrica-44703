# Generated by Django 3.2.23 on 2024-03-08 08:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emr', '0008_auto_20240308_1412'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicalrecord',
            name='frmdate',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='medicalrecord',
            name='todate',
            field=models.DateField(blank=True, null=True),
        ),
    ]
