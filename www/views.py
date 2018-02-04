from django.shortcuts import render, redirect
from datetime import datetime

from django.contrib.auth import authenticate, logout as auth_logout, login as auth_login
from django.contrib.auth.models import User
from .models import Bill

def index(request):
    context = {}
    context['current_date'] = datetime.now().strftime('%d/%m/%Y')

    if request.method == 'POST':
        form_info = request.POST
        bill = Bill(
            title=form_info['title'],
            message=form_info['message'],
            author=request.user.username or request.user
        )

        bill.save()

    bills = Bill.objects.all()
    for bill in bills:
        bill.creation_date = bill.creation_date.strftime('%d/%m/%Y')
    context['bills'] = bills
    return render(request, 'www/index.html', context or {})

def login(request):
    if request.user.is_authenticated:
        return redirect('/')

    if request.method == 'GET':
        return render(request, 'www/login.html')
    elif request.method == 'POST':
        user = authenticate(username=request.POST['username'], password=request.POST['password'])
        if not user:
            return redirect('/login')
        auth_login(request, user)
        return redirect('/')

def logout(request):
    auth_logout(request)
    return redirect('/')

def register(request):
    if request.user.is_authenticated:
        return redirect('/')

    if request.method == 'GET':
        return render(request, 'www/register.html')
    elif request.method == 'POST':
        if request.POST['password'] != request.POST['repeatPassword']:
            return redirect('/register')

        user = User.objects.create_user(username=request.POST['username'], password=request.POST['password'])
        try:
            user.save()
            auth_login(request, user)
        except:
            return redirect('/register')
        return redirect('/')