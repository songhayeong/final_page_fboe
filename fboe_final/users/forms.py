from allauth.account.forms import SignupForm
from allauth.socialaccount.forms import SignupForm as SocialSignupForm
from django.contrib.auth import forms as admin_forms
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from django import forms
from django import forms as django_forms
from .models import Contactus, Contactus1


User = get_user_model()


class Contact(django_forms.ModelForm):
    class Meta:
        model = Contactus
        fields = ['company', 'industry', 'firstname', 'lastname', 'job_title', 'email', 'message']
        widgets = {
            'company': django_forms.TextInput(attrs={'placeholder': 'company'}),
            'industry': django_forms.TextInput(attrs={'placeholder': 'industry'}),
            'firstname': django_forms.TextInput(attrs={'placeholder': 'firstname'}),
            'lastname': django_forms.TextInput(attrs={'placeholder': 'lastname'}),
            'job_title': django_forms.TextInput(attrs={'placeholder': 'job_title'}),
            'email': django_forms.TextInput(attrs={'placeholder': 'email'}),
            # 'MM': django_forms.TextInput(attrs={'placeholder' : 'MM'}),
            # 'DD': django_forms.TextInput(attrs={'placeholder' : 'DD'}),
            # 'YYYY': django_forms.TextInput(attrs={'placeholder' : 'YYYY'}),
            'message': django_forms.TextInput(attrs={'placeholder': 'message'}),
        }


class Contact1(django_forms.ModelForm):
    class Meta:
        model = Contactus1
        fields = ['company1', 'industry1', 'firstname1', 'lastname1', 'job_title1', 'email1', 'message1']
        widgets = {
            'company1': django_forms.TextInput(attrs={'placeholder': 'company1'}),
            'industry1': django_forms.TextInput(attrs={'placeholder': 'industry1'}),
            'firstname1': django_forms.TextInput(attrs={'placeholder': 'firstname1'}),
            'lastname1': django_forms.TextInput(attrs={'placeholder': 'lastname1'}),
            'job_title1': django_forms.TextInput(attrs={'placeholder': 'job_title1'}),
            'email1': django_forms.TextInput(attrs={'placeholder': 'email1'}),
            # 'MM': django_forms.TextInput(attrs={'placeholder' : 'MM'}),
            # 'DD': django_forms.TextInput(attrs={'placeholder' : 'DD'}),
            # 'YYYY': django_forms.TextInput(attrs={'placeholder' : 'YYYY'}),
            'message1': django_forms.TextInput(attrs={'placeholder': 'message1'}),
        }


class UserAdminChangeForm(admin_forms.UserChangeForm):
    class Meta(admin_forms.UserChangeForm.Meta):
        model = User


class UserAdminCreationForm(admin_forms.UserCreationForm):
    """
    Form for User Creation in the Admin Area.
    To change user signup, see UserSignupForm and UserSocialSignupForm.
    """

    class Meta(admin_forms.UserCreationForm.Meta):
        model = User

        error_messages = {
            "username": {"unique": _("This username has already been taken.")}
        }


class UserSignupForm(SignupForm):
    """
    Form that will be rendered on a user sign up section/screen.
    Default fields will be added automatically.
    Check UserSocialSignupForm for accounts created from social.
    """


class UserSocialSignupForm(SocialSignupForm):
    """
    Renders the form when user has signed up using social accounts.
    Default fields will be added automatically.
    See UserSignupForm otherwise.
    """
