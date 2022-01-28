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
            # pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR"
            text = pytesseract.image_to_string(img)
            json_object["success"] = True
            json_object["text"] = text
        else:
            json_object["message"] = "No image found"
    return JsonResponse(json_object)


