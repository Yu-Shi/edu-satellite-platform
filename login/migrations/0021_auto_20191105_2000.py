# Generated by Django 2.2.4 on 2019-11-05 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0020_userextension_gstatus'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userextension',
            name='gstatus',
            field=models.CharField(default='OUT', max_length=20),
        ),
    ]