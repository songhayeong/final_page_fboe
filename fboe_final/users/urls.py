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
    path('introduction/', views.introduction),
    path('history/', views.history),
    path('introduction/history.html', views.history),
    path('introduction/introduction.html', views.introduction),
    path('history/introduction.html', views.introduction),
    path('history/history.html', views.history),
]
