from django.shortcuts import render

# Create your views here.
def home_views(request):
    
    return render(request, 'homepage/index.html')


def donate(request):
    return render(request, 'homepage/donate.html')