from distutils.command.upload import upload
from pyexpat import model
from statistics import mode
from django.db import models

class Register(models.Model):
    name = models.CharField(max_length=500)
    email = models.EmailField()
    password = models.CharField(max_length=20)
    logo_image = models.ImageField(upload_to = 'logos')


class Client(models.Model):
    client_name = models.CharField(max_length=500)
    client_company_name = models.CharField(max_length=500,blank=True)
    client_email = models.EmailField()
    company_email = models.EmailField(blank=True)
    client_phone = models.IntegerField()
    company_phone = models.IntegerField(blank=True)
    contry = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    address = models.TextField()
    logo = models.ImageField(upload_to = 'client logo',blank=True)
    
    def __str__(self):
        return self.client_name

pro_status = (("Estimate","Estimate"),("Conform","Conform"),("Cancel","Cancel"),("In progress","In progress"),("Done","Done"))
billstatus = (('Pending','Pending'),('Done','Done'))
class Project(models.Model):
    project_name = models.CharField(max_length=5000)
    client_name = models.ForeignKey(Client,on_delete=models.CASCADE)
    project_status = models.CharField(choices=pro_status,max_length=100,default="Estimate")
    project_billing_amount = models.BigIntegerField()
    bill_status = models.CharField(choices=billstatus,max_length=100,default='Pending')
    document = models.TextField()
    
    def __str__(self):
        return self.project_name
    
class Drawings(models.Model):
    project_name = models.ForeignKey(Project,on_delete=models.CASCADE)
    drawing  = models.FileField(upload_to='drawings')
    drawing1  = models.FileField(upload_to='drawings',null=True,blank=True)
    drawing2  = models.FileField(upload_to='drawings',null=True,blank=True)
    drawing3  = models.FileField(upload_to='drawings',null=True,blank=True)
    drawing4  = models.FileField(upload_to='drawings',null=True,blank=True)
    drawing5  = models.FileField(upload_to='drawings',null=True,blank=True)

mode = (("Cash","Cash"),("Cheque","Cheque"),("Online transfer","Online transfer"))
class Payment(models.Model):
    project_name = models.ForeignKey(Project,on_delete=models.CASCADE)
    amount = models.BigIntegerField()
    note = models.CharField(max_length=5000)
    pay_image = models.ImageField(upload_to = 'Pay receipt')
    payment_mode = models.CharField(choices=mode,max_length=200)

status = (('Pending','Pending'),('Done','Done'))
class Expense(models.Model):
    project_name = models.ForeignKey(Project,on_delete=models.CASCADE)
    to_whom = models.CharField(max_length=1000)
    amount = models.IntegerField()
    product = models.CharField(max_length=500)
    date = models.DateField()
    payment_status = models.CharField(choices=status,max_length=20,default='Pending')
    

