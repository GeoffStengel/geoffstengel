from django.shortcuts import render

# Create your views here.
def blog(request):
    return render(request, 'blog/blog.html') 



def sprouting(request):
    return render(request, 'blog/sprouting.html') 



def disclaimer(request):
    return render(request, 'blog/disclaimer.html') 


def welcome(request):
    return render(request, 'blog/welcome.html')


def websites(request):
    return render(request, 'blog/website_info.html')