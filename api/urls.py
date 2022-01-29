from . import views
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('getdata/', csrf_exempt(views.getData), name='getData'),
    path('ocr/', views.ocr_api, name='ocr_api'),
    path('detect/', views.detect_api, name='detect_api'),
    path('translate/', views.translate_api, name='translate_api'),
    path('imagetopdf/', views.imagetopdf, name='imagetopdf'),
]
