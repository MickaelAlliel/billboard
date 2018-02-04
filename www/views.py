from django.shortcuts import render
from datetime import datetime

from .models import Bill

def index(request):
    context = {}
    context['current_date'] = datetime.now().strftime('%d/%m/%Y')
    
    if request.method == 'POST':
        form_info = request.POST
        bill = Bill(
            title=form_info['title'],
            message=form_info['message'],
            author=form_info['author']
        )

        bill.save()

    context['bills'] = Bill.objects.all()
    return render(request, 'www/index.html', context or {})