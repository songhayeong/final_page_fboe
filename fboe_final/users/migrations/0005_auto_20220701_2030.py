# Generated by Django 3.2.13 on 2022-07-01 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_contactus1'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactus1',
            name='company1',
            field=models.CharField(max_length=255, verbose_name='company1'),
        ),
        migrations.AlterField(
            model_name='contactus1',
            name='email1',
            field=models.CharField(max_length=255, verbose_name='email1'),
        ),
        migrations.AlterField(
            model_name='contactus1',
            name='firstname1',
            field=models.CharField(max_length=255, verbose_name='firstname1'),
        ),
        migrations.AlterField(
            model_name='contactus1',
            name='industry1',
            field=models.CharField(max_length=255, verbose_name='industry1'),
        ),
        migrations.AlterField(
            model_name='contactus1',
            name='job_title1',
            field=models.CharField(max_length=255, verbose_name='job_title1'),
        ),
        migrations.AlterField(
            model_name='contactus1',
            name='lastname1',
            field=models.CharField(max_length=255, verbose_name='lastname1'),
        ),
        migrations.AlterField(
            model_name='contactus1',
            name='message1',
            field=models.CharField(max_length=255, verbose_name='message1'),
        ),
    ]
