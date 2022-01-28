from . import views
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('api/get/', csrf_exempt(views.getData), name='getData'),
    path('api/ocr/', csrf_exempt(views.ocr_api), name='ocr_api'),
]
