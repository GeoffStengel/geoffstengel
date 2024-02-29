from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
#from users import views as user_views
from homepage import views as homepage_views
from shop import views as shop_views
from blog import views as blog_views
#from blog import views as sprouting_views



urlpatterns = [
    path('MY_ADMIN/', admin.site.urls),
    path('', include('homepage.urls')),
    path('donate/', homepage_views.donate, name='donate'),
    path('shop/', shop_views.shop, name='shop_views'),
    path('blog/', blog_views.blog, name='blog_views'),
    path('sprouting/', blog_views.sprouting, name='sprouting_views'),
    path('disclaimer/', blog_views.disclaimer, name='disclaimer_views'),
    path('welcome/', blog_views.welcome, name='welcome_views'),
    path('websites/', blog_views.websites, name='websites_views'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)