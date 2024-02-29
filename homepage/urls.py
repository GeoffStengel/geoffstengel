from django.urls import path
from django.contrib import admin
from . import views


urlpatterns = [ 
    path('admin/', admin.site.urls),
    path("", views.home_views, name='home_views'),
    path('donate/', views.donate)
]