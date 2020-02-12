# Generated by Django 2.2.4 on 2019-10-30 13:36

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0007_auto_20191030_2018'),
    ]

    operations = [
        migrations.AddField(
            model_name='program',
            name='create_timestamp',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='program',
            name='description',
            field=models.CharField(default=0, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='program',
            name='stars',
            field=models.IntegerField(default=0),
        ),
    ]