from django.urls import path
from . import views

from fboe_final.users.views import (
    user_detail_view,
    user_redirect_view,
    user_update_view,
)

app_name = "users"
urlpatterns = [
    # path("~redirect/", view=user_redirect_view, name="redirect"),
    # path("~update/", view=user_update_view, name="update"),
    # path("<str:username>/", view=user_detail_view, name="detail"),
    path('', views.index, name='index'),
    path('contact/', views.contactus, name='contactus'),
    path('amc/', views.amc),
    path('mbca/', views.mbca),
    path('mbca/mbca.html', views.mbca),
    path('mbca/amc.html', views.amc),
    path('amc/mbca.html', views.mbca),
    path('amc/amc.html', views.amc),
    path('content1/', views.content1),
    path('content3/', views.content3),
    path('content1/content3.html', views.content3),
    path('content1/content1.html', views.content1),
    path('content3/content1.html', views.content1),
    path('content3/content3.html', views.content3),
]
