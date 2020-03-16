# Generated by Django 2.1.5 on 2020-03-16 02:18

from django.conf import settings
import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ProfileImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.ImageField(default='/profile_pictures/default.png', upload_to='profile_pictures/')),
            ],
        ),
        migrations.CreateModel(
            name='SocialMedia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('websiteUrl', models.URLField(blank=True)),
                ('facebookUrl', models.URLField(blank=True)),
                ('twitterUrl', models.URLField(blank=True)),
                ('telegramUrl', models.URLField(blank=True)),
                ('linkedinUrl', models.URLField(blank=True)),
                ('youtubeUrl', models.URLField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nickname', models.CharField(blank=True, max_length=300)),
                ('firstName', models.CharField(blank=True, max_length=300)),
                ('lastName', models.CharField(blank=True, max_length=300)),
                ('description', models.TextField(blank=True)),
                ('coordinates', django.contrib.gis.db.models.fields.PointField(blank=True, null=True, srid=4326)),
                ('is_printing', models.BooleanField(default=False)),
                ('unique_id', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('phone_number', phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, region=None)),
                ('date_joined', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='socialmedia',
            name='profile',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='socialMedia', to='accounts.UserProfile'),
        ),
        migrations.AddField(
            model_name='profileimage',
            name='profile',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profileImage', to='accounts.UserProfile'),
        ),
    ]
