from django.urls import path
from django.contrib import admin
from . import views
#from . import views as blog_views




urlpatterns = [ 
    #path('MY_ADMIN/', admin.site.urls),
    #path("", views.home_views, name='home_views'),
    #path('donate/', views.donate),
    #path('shop/', views.shop),
    path('blog/', views.blog, name='blog_views'),
    path('sprouting/', views.blog, name='sprouting_views'),
    path('disclaimer/', views.blog, name='disclaimer_views'),
    path('welcome/', views.blog, name='welcome_views'),
    path('websites/', views.blog, name='websites_views')
]