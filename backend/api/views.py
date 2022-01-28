from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from PIL import Image
import cv2
import pytesseract
import numpy as np
import img2pdf
from googletrans import Translator, constants

@api_view(['GET'])
def getData(request):
    data=[
        {
            'Name': 'Surya',
            'Age':21
        }
    ]
    return Response(data)

@api_view(['POST'])
def ocr_api(request):
    json_object = {"success": False}
    if request.method == "POST":
        if request.FILES.get("image", None) is not None:
            image = request.FILES["image"]
            img = Image.open(image)
            img = img.convert("RGB")
            img = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)
            text = pytesseract.image_to_string(img)
            json_object["success"] = True
            json_object["text"] = text
        else:
            json_object["message"] = "No image found"
    return JsonResponse(json_object)

@api_view(['POST'])
def detect_api(request):
    json_object = {'success': False}
    if request.method == "POST":
        text = str(request.POST.get("text"))
        translator = Translator(raise_exception=True)
        translated = translator.detect(text)
        json_object['success'] = True
        json_object['Detected'] = translated.lang
        print(json_object)
    return JsonResponse(json_object)

@api_view(['POST'])
def translate_api(api_request):
    json_object = {'success': False}
    if api_request.method == "POST":
        if api_request.POST.get("text") is not None:
            text = str(api_request.POST.get("text"))
            destlang = str(api_request.POST.get("destlang"))
            print(text+" "+destlang)
            translator = Translator()
            translated = translator.translate(text, dest=destlang)
            json_object['success'] = True
            json_object['Translated'] = translated.text
            print(json_object)
    return JsonResponse(json_object)


@api_view(['POST'])
def imagetopdf(request):
    if request.method == 'POST':
        for f in request.FILES.getlist('image'):
            with open("output.pdf", "wb") as file:
                file.write(img2pdf.convert([f]))
                print("img added")


    return HttpResponse(status=status.HTTP_200_OK)