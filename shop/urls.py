from django.urls import path
from django.contrib import admin
from . import views
from . import views as homepage_views



urlpatterns = [ 
    path('MY_ADMIN/', admin.site.urls),
    path("", views.home_views, name='home_views'),
    path('donate/', views.donate),
    path('shop/', views.shop)
]