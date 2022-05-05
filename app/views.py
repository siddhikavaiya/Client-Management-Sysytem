from django.shortcuts import render, redirect, reverse
from .form import *
from app.form import ProjectForm
from .models import *
from django.contrib import messages


def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        try:
            user_info = Register.objects.get(email=email)
            if password == user_info.password:
                request.session['user'] = email
                messages.success(request,"Successfully Login ")
                return redirect('index')
            else:
                messages.error(request,"Enter correct Password")
                return render(request,'sign_in.html')

        except:
            messages.error(request,'Enter Register Email ID')
            return render(request,'sign_in.html')

    return render(request,'sign_in.html')

def index(request):
    if 'user' in request.session:
        user = request.session['user']
        user_info = Register.objects.get(email=user)
        return render(request,'index.html',{'user_info':user_info})
    else:
        messages.error(request,"Need to login first")
        return redirect('login')

def logout(request):
    if 'user' in request.session:
        del request.session['user']
        return redirect('login')

def addclient(request):
    if request.method == 'POST':
        client_name = request.POST['name']
        client_company_name = request.POST['cname']
        client_email = request.POST['email']
        company_email = request.POST['cemail']
        client_phone = request.POST['phone']
        company_phone = request.POST['cphone']
        contry = request.POST['contry']
        state = request.POST['state']
        address = request.POST['address']
        logo = request.FILES['logo']
        Client(client_name=client_name,client_company_name=client_company_name,client_email=client_email,company_email=company_email,client_phone=client_phone,company_phone=company_phone,contry=contry,state=state,address=address,logo=logo).save()
        messages.success(request,"Client Successfully Register ")
    return render(request,'add_client.html')

def allclient(request):
    data  = Client.objects.all()
    return render(request,'all_clients.html',{'data':data})

def editclient(request,id):
    data = Client.objects.get(id=id)
    if request.method == 'POST':
        name = request.POST['name']
        cname = request.POST['cname']
        email = request.POST['email']
        cmail = request.POST['cemail']
        phone = request.POST['phone']
        cphone = request.POST['cphone']
        contry = request.POST['contry']
        state = request.POST['state']
        address = request.POST['address']
    
        data.client_name=name
        data.client_company_name=cname
        data.client_email=email
        data.company_email=cmail
        data.client_phone=phone
        data.company_phone=cphone
        data.contry=contry
        data.state=state
        data.address=address
        data.save()
        messages.success(request,"Successfully updated client information")
        return redirect('allclient')
    else:
        messages.error(request,"Someting went wrong")
    return render(request,'edit_client.html',{'data':data})

def addproject(request):
    if request.method == 'POST':
        pro = Project.objects.all()
        fm = ProjectForm(request.POST)
        if fm.is_valid():
            pname = fm.cleaned_data['project_name']
            cname = fm.cleaned_data['client_name']
            print(pname, cname)
            l1 = []
            l2 = []
            for i in pro:
                l1.append(i.project_name)
                l2.append(i.client_name)
            if pname in l1 and cname in l2:
                messages.error(request,'Project and client exist')
            else:
                fm.save()
                messages.success(request,"Project Information Successfully added")
            return render(request,'add_project.html',{'fm':fm})
        else:
            messages.error(request,'Someting went wrong')
            return render(request,'add_project.html',{'fm':fm})
    else:
        fm = ProjectForm()
        return render(request,'add_project.html',{'fm':fm})

def payment(request):
    if request.method == 'POST':
        fm  = PaymentForm(request.POST, request.FILES)
        if fm.is_valid():
            pname = fm.cleaned_data['project_name']
            fm.save()
            messages.success(request,'Successfully Updated')
            return redirect('payment')
        else:
            fm  = PaymentForm()
            messages.error(request,'Enter Correct data')
            return redirect('payment')
    else:
        fm  = PaymentForm()
    return render(request,'payment.html',{'fm':fm})

def design(request):
    if request.method == 'POST':
        fm  = DesignForm(request.POST, request.FILES)
        if fm.is_valid():
            fm.save()
            messages.success(request,'Successfully Updated')
            return redirect('design')
        else:
            print(fm.errors)
        # else:
        #     # fm  = DesignForm()
        #     messages.error(request,'Enter Correct data')
        #     return redirect('design')
    else:
        fm  = DesignForm()
    return render(request,'design.html',{'fm':fm})

def allproject(request):
    data = Project.objects.all()
    return render(request,'all_projects.html',{'data':data})

def allpayment(request):
    data = Payment.objects.all()
    return render(request,'allpayment.html',{'data':data})