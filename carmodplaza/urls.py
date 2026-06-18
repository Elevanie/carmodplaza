from django.contrib import admin
from django.urls import path
from website import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home_de, name='home'),
    path('de/', views.home_de, name='home_de'),
    path('en/', views.home_en, name='home_en'),
]