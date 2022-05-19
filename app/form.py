from tkinter import Widget
from django import forms
from .models import *

class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = "__all__"

        widgets = {
            'project_name' : forms.TextInput(attrs={'class':'form-control','placeholder':'Project Name'}),
            'client_name' : forms.Select(attrs={'class':'form-control','placeholder':'Client Name'}),
            'project_status' : forms.Select(attrs={'class':'form-control','placeholder':'Project Status'}),
            'project_billing_amount' : forms.NumberInput(attrs={'class':'form-control','placeholder':'Bill Amount'}),
            'bill_status' : forms.Select(attrs={'class':'form-control','placeholder':'Payment Status'}),
            'document' : forms.TextInput(attrs={'class':'form-control','placeholder':'Project Description'}),
        }

class PaymentForm(forms.ModelForm):
    class Meta:
        model = Payment
        fields = "__all__"

        widgets = {
            'project_name' : forms.Select(attrs={'class':'form-control','placeholder':'Project Name'}),
            'amount' : forms.NumberInput(attrs={'class':'form-control','placeholder':'Client Paymented amount'}),
            'note' : forms.TextInput(attrs={'class':'form-control','placeholder':'Note/message'}),
            'pay_image' : forms.FileInput(attrs={'class':'form-control','placeholder':'Payment Proof image','label':'Payment Proof'}),
            'payment_mode' : forms.Select(attrs={'class':'form-control','placeholder':'Payment Mode'}),
        }

class DesignForm(forms.ModelForm):
    class Meta:
        model = Drawings
        fields = "__all__"

        widgets = {
            'project_name' : forms.Select(attrs={'class':'form-control','placeholder':'Project Name'}),
            'drawing' : forms.FileInput(attrs={'class':'form-control','placeholder':'Client Paymented amount'}),
            'drawing1' : forms.FileInput(attrs={'class':'form-control','placeholder':'Note/message'}),
            'drawing2' : forms.FileInput(attrs={'class':'form-control','placeholder':'Payment Proof image','label':'Payment Proof'}),
            'drawing3' : forms.FileInput(attrs={'class':'form-control','placeholder':'Payment Mode'}),
            'drawing4' : forms.FileInput(attrs={'class':'form-control','placeholder':'Payment Mode'}),
            'drawing5' : forms.FileInput(attrs={'class':'form-control','placeholder':'Payment Mode'}),
        }

class ExpenseForm(forms.ModelForm):
    class Meta:
        model = Expense
        fields = "__all__"

        # Widgets = {
        #     'project_name' : forms.Select(attrs={'class':'form-control'}),
        #     'to_whom' : forms.TextInput(attrs={'class':'form-control'}),
        #     'amount' : forms.NumberInput(attrs={'class':'form-control'}),
        #     'product' : forms.TextInput(attrs={'class':'form-control'}),
        #     'date' : forms.DateInput(attrs={'class':'form-control'}),
        #     'payment_status' : forms.Select(attrs={'class':'form-control'}),
        # }