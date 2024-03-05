# Generated by Django 3.2.23 on 2024-03-05 16:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0019_other_user'),
        ('pharmacy', '0003_auto_20240305_1600'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='prescription',
            name='doctor_name',
        ),
        migrations.AddField(
            model_name='medication',
            name='time',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='prescription',
            name='doctor_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.doctor'),
        ),
    ]
