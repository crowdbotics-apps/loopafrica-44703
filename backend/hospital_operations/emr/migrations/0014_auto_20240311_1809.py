# Generated by Django 3.2.23 on 2024-03-11 12:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emr', '0013_alter_testresult_test_reults_signed'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicalrecord',
            name='condition',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='medicalrecord',
            name='status',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]