from django.shortcuts import render

def home_de(request):
    return render(request, 'home_de.html')

def home_en(request):
    return render(request, 'home_en.html')