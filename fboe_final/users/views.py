from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.messages.views import SuccessMessageMixin
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.views.generic import DetailView, RedirectView, UpdateView
from django.shortcuts import render, redirect
from .models import *
from .forms import Contact, Contact1
from django.core.mail import EmailMultiAlternatives, BadHeaderError
from django.template import loader
from django.http import HttpResponse
import threading

User = get_user_model()

def send_email(subject, body, from_email, recipient_list, fail_silently=False, html=False, *args, **kwargs):

    EmailThread(subject, body, from_email, recipient_list, fail_silently, html).start()


class EmailThread(threading.Thread):

    def __init__(self, subject, body, from_email, recipient_list, fail_silently, html):

        self.subject = subject

        self.body = body

        self.recipient_list = recipient_list

        self.from_email = from_email

        self.fail_silently = fail_silently

        self.html = html

        threading.Thread.__init__(self)



    def run(self):

        msg = EmailMultiAlternatives(self.subject, self.body, self.from_email, self.recipient_list)



        if self.html:

            msg.attach_alternative(self.html, 'text/html')

        msg.send(self.fail_silently)


def index(request):
    if request.method == 'GET':
        form = Contact1()
        return render(request, 'index.html', {'form': form})
    elif request.method == 'POST':
        form = Contact1(request.POST)

        if form.is_valid():
            obj = Contactus1(
                company1=form.cleaned_data['company1'],
                industry1=form.cleaned_data['industry1'],
                firstname1=form.cleaned_data['firstname1'],
                lastname1=form.cleaned_data['lastname1'],
                job_title1=form.cleaned_data['job_title1'],
                email1=form.cleaned_data['email1'],
                # MM = form.cleaned_data['MM'],
                # DD = form.cleaned_data['DD'],
                # YYYY = form.cleaned_data['YYYY'],
                message1=form.cleaned_data['message1'],

            )

            obj.save()

            Meet = loader.render_to_string('test1.html', {
                "company1": request.POST['company1'],
                "industry1": request.POST['industry1'],
                "firstname1": request.POST['firstname1'],
                "lastname1": request.POST['lastname1'],
                "job_title1": request.POST['job_title1'],
                "email1": request.POST['email1'],
                # "MM": request.POST['MM'],
                # "DD": request.POST['DD'],
                # "YYYY": request.POST['YYYY'],
                "message1": request.POST['message1'],

            })

            try:
                send_email("새로운 미팅 알림", Meet, "smtp.gmail.com", ["ulsan@fboeit.com"])

            except BadHeaderError:
                return HttpResponse("Invalid header found.")
        # if form.is_valid():
        #     form.save()
        return render(request, 'index.html')



def contactus(request):
    if request.method == 'GET':
        form = Contact()
        return render(request, 'contactus.html', {'form': form})
    elif request.method == 'POST':
        form = Contact(request.POST)

        if form.is_valid():
            obj = Contactus(
                company=form.cleaned_data['company'],
                industry=form.cleaned_data['industry'],
                firstname=form.cleaned_data['firstname'],
                lastname=form.cleaned_data['lastname'],
                job_title=form.cleaned_data['job_title'],
                email=form.cleaned_data['email'],
                # MM = form.cleaned_data['MM'],
                # DD = form.cleaned_data['DD'],
                # YYYY = form.cleaned_data['YYYY'],
                message=form.cleaned_data['message'],

            )

            obj.save()

            Meet = loader.render_to_string('test.html', {
                "company": request.POST['company'],
                "industry": request.POST['industry'],
                "firstname": request.POST['firstname'],
                "lastname": request.POST['lastname'],
                "job_title": request.POST['job_title'],
                "email": request.POST['email'],
                # "MM": request.POST['MM'],
                # "DD": request.POST['DD'],
                # "YYYY": request.POST['YYYY'],
                "message": request.POST['message'],

            })

            try:
                send_email("새로운 미팅 알림", Meet, "smtp.gmail.com", ["ulsan@fboeit.com"])

            except BadHeaderError:
                return HttpResponse("Invalid header found.")
        # if form.is_valid():
        #     form.save()
        return render(request, 'contactus.html')


# def index(request):
#     return render(request, "index.html")

def amc(request):
    return render(request, "amc.html")

def mbca(request):
    return render(request, "mbca.html")

def introduction(request):
    return render(request, "introduction.html")

def history(request):
    return render(request, "history.html")



class UserDetailView(LoginRequiredMixin, DetailView):

    model = User
    slug_field = "username"
    slug_url_kwarg = "username"


user_detail_view = UserDetailView.as_view()


class UserUpdateView(LoginRequiredMixin, SuccessMessageMixin, UpdateView):

    model = User
    fields = ["name"]
    success_message = _("Information successfully updated")

    def get_success_url(self):
        assert (
            self.request.user.is_authenticated
        )  # for mypy to know that the user is authenticated
        return self.request.user.get_absolute_url()

    def get_object(self):
        return self.request.user


user_update_view = UserUpdateView.as_view()


class UserRedirectView(LoginRequiredMixin, RedirectView):

    permanent = False

    def get_redirect_url(self):
        return reverse("users:detail", kwargs={"username": self.request.user.username})


user_redirect_view = UserRedirectView.as_view()
