from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

import os, shutil
import smtpserver

from PIL import Image
import cv2
import pytesseract
import numpy as np
import img2pdf
from googletrans import Translator, constants
from PyPDF2 import PdfFileMerger, PdfFileReader

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
        translator = Translator(service_urls=['translate.googleapis.com'])
        translated = translator.detect(text)
        print(translated)
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
            translator = Translator(service_urls=['translate.googleapis.com'])
            translated = translator.translate(text, dest=destlang)
            json_object['success'] = True
            json_object['Translated'] = translated.text
            print(json_object)
    return JsonResponse(json_object)


@api_view(['POST'])
def imagetopdf(request):
    if request.method == 'POST':
        print("ok")
        clear_files("outputs")
        for f in request.FILES.getlist('image'):
            with open("outputs/"+f"output_{f.name}.pdf", "wb") as file:
                file.write(img2pdf.convert([f]))
                print("img added")

    x = [a for a in os.listdir("outputs") if a.endswith(".pdf")]
    print(x)
    merger = PdfFileMerger()
    for pdf in x:
        with open("outputs/"+pdf, 'rb') as source:
            tmp = PdfFileReader(source)
            merger.append(tmp)
            print("merging")
    
    with open("outputs/"+"combined.pdf", "wb") as file:
        merger.write(file)
    file.close()
    print("pdf added")
    
    email = request.POST.get("email")
    smtpserver.sendmail(email)

    return HttpResponse(status=status.HTTP_200_OK)


def clear_files(dir):
    folder = dir
    try:
        for filename in os.listdir(folder):
            file_path = os.path.join(folder, filename)
            try:
                if os.path.isfile(file_path) or os.path.islink(file_path):
                    os.unlink(file_path)
                elif os.path.isdir(file_path):
                    shutil.rmtree(file_path)
            except Exception as e:
                print('Failed to delete %s. Reason: %s' % (file_path, e))
    except Exception as error:
        os.mkdir(dir)