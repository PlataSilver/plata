# Generated by Django 4.0.4 on 2022-04-28 15:55

import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('user_name', models.CharField(max_length=50, unique=True, verbose_name='username')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('first_name', models.CharField(max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(max_length=150, verbose_name='last name')),
                ('birthdate', models.DateTimeField(default=django.utils.timezone.now, verbose_name='birthdate')),
                ('address', models.CharField(blank=True, max_length=300, verbose_name='home address')),
                ('phone_number', models.CharField(max_length=12, unique=True, verbose_name='phone number')),
                ('is_active', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(related_name='user_role', to='auth.group')),
                ('user_permissions', models.ManyToManyField(related_name='user_perm', to='auth.permission')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('iban', models.CharField(max_length=34, unique=True)),
                ('acc_type', models.CharField(choices=[('CUR', 'Current'), ('SVG', 'Savings')], default='CUR', max_length=3)),
                ('balance', models.DecimalField(decimal_places=6, max_digits=20)),
                ('currency', models.CharField(max_length=3)),
                ('creation_time', models.DateTimeField(auto_now_add=True, verbose_name='creation date')),
                ('last_updated_time', models.DateTimeField(auto_now=True, verbose_name='last updated date')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.customuser')),
            ],
        ),
    ]
