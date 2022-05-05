from django.contrib import admin
from .models import *

@admin.register(Register)
class RegisterAdmin(admin.ModelAdmin):
    list_display = ("logo_image","password", "email", "name")[::-1]

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ("logo", "address", "state", "contry", "company_phone", "client_phone", "company_email", "client_email", "client_company_name", "client_name")[::-1]

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("document", "bill_status", "project_billing_amount", "project_status", "client_name", "project_name")[::-1]

@admin.register(Drawings)
class DrawingsAdmin(admin.ModelAdmin):
    list_display = ( "drawing5", "drawing4", "drawing3", "drawing2", "drawing1", "drawing", "project_name")[::-1]

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ("payment_mode", "pay_image", "note", "amount","project_name")[::-1]
