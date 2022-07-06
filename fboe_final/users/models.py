from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.db import models

class User(AbstractUser):
    """
    Default custom user model for FBOE_FINAL.
    If adding fields that need to be filled at user signup,
    check forms.SignupForm and forms.SocialSignupForms accordingly.
    """

    #: First and last name do not cover name patterns around the globe
    name = CharField(_("Name of User"), blank=True, max_length=255)
    first_name = None  # type: ignore
    last_name = None  # type: ignore

    def get_absolute_url(self):
        """Get url for user's detail view.

        Returns:
            str: URL for user detail.

        """
        return reverse("users:detail", kwargs={"username": self.username})


class Contactus(models.Model):
     company = models.CharField(_("company"), blank=False, max_length=255)
     industry = models.CharField(_("industry"), blank=False, max_length=255)
     firstname = models.CharField(_("firstname"), blank=False, max_length=255)
     lastname = models.CharField(_("lastname"), blank=False, max_length=255)
     job_title = models.CharField(_("job_title"), blank=False, max_length=255)
     email= models.CharField(_("email"), blank=False, max_length=255)
    #  MM = models.CharField(_("MM"), blank=False, max_length=255)
    #  DD = models.CharField(_("DD"), blank=False, max_length=255)
    #  YYYY = models.CharField(_("YYYY"), blank=False, max_length=255)
     message = models.CharField(_("message"), blank=False, max_length=255)

    # def __str__(self):
    #     return self.company


class Contactus1(models.Model):
    company1 = models.CharField(_("company1"), blank=False, max_length=255)
    industry1 = models.CharField(_("industry1"), blank=False, max_length=255)
    firstname1 = models.CharField(_("firstname1"), blank=False, max_length=255)
    lastname1 = models.CharField(_("lastname1"), blank=False, max_length=255)
    job_title1 = models.CharField(_("job_title1"), blank=False, max_length=255)
    email1 = models.CharField(_("email1"), blank=False, max_length=255)
    #  MM = models.CharField(_("MM"), blank=False, max_length=255)
    #  DD = models.CharField(_("DD"), blank=False, max_length=255)
    #  YYYY = models.CharField(_("YYYY"), blank=False, max_length=255)
    message1 = models.CharField(_("message1"), blank=False, max_length=255)
