# Generated by Django 3.2.23 on 2024-03-20 09:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0029_merge_20240320_1447'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todolist',
            old_name='task_name',
            new_name='title',
        ),
    ]
