# Generated by Django 3.2.23 on 2024-03-05 16:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0018_auto_20240305_1600'),
    ]

    operations = [
        migrations.CreateModel(
            name='other_user',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.IntegerField(blank=True, null=True)),
                ('address', models.TextField(blank=True, null=True)),
                ('relationship', models.CharField(blank=True, max_length=255, null=True)),
                ('last_updated_date', models.DateTimeField(auto_now=True)),
                ('last_updated_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='other_last_updated_by', to=settings.AUTH_USER_MODEL)),
                ('patient_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='patient', to='users.patientinfo')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='other_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
