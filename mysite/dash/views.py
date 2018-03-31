from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
from django.contrib.auth import views as auth_views
from django.contrib.auth.forms import (
    AuthenticationForm, PasswordChangeForm, PasswordResetForm, SetPasswordForm,
)
from django.contrib.auth.views import login, logout
from django.http import HttpResponse, HttpResponseNotFound, Http404,  HttpResponseRedirect, HttpResponseNotModified
from .forms import PostForm, SignUpForm 
from django.utils import timezone
from django.http import JsonResponse
from .models import Time_post
from django.contrib.auth.models import User





##


# Create your views here.


def main(request):
	a = request.path
	if request.method == "POST":
		if a == "/login/":
			#
			#print(request)
			return login(request)

			#
		else:
			if a == "/signup/":
				form = SignUpForm(request.POST)
				if form.is_valid():
					form.save()
					username = form.cleaned_data.get('username')
					raw_password = form.cleaned_data.get('password1')
					user = authenticate(username=username, password=raw_password)
					login(request, user)
					return HttpResponseRedirect("/" + username)
				else:
					return HttpResponseRedirect("/")	

							
						
				
	else:
		if a == "/":
			if request.user.is_authenticated:
				# redirect to other page
				posts = Time_post.objects.filter(author__lte = request.user).order_by('published_date')
				return HttpResponseRedirect("/" + request.user.username + "/dash/" + posts[0].title)
			else:
				form = AuthenticationForm(request)
				form1 = UserCreationForm()
				return render(request, "dash/front.html",{'form':form,'form1':form1})	
	#return render(request, "dash/home.html",{}) 			
				
def life(request, pk):
	if request.user.is_authenticated:
			if request.method == "POST":
				form = PostForm(request.POST)
				if form.is_valid():
					post = form.save(commit=False)
					post.author = request.user
					post.published_date = timezone.now()
					post.save()
					return HttpResponseNotModified()
			    
			else:
				form = PostForm()
				posts = Time_post.objects.filter(author = request.user).order_by('published_date')
				#post = Time_post.objects.filter(author__lte = request.user).filter(title__startswith = pk1 ).order_by('published_date')
				#print(post[1].day)
				val = []
				temp = []
				for j in posts:
					count = 1
					for k in temp:
						if j.title == k:
							count = 0
							break
					if count == 1:		
						val.append(j.title)
						temp.append(j.title)
				return render(request, "dash/life1.html",{'user' : request.user.username,'form':form,'val':val})

def action(request,pk,pk1):				
	if request.user.is_authenticated:	
		posts = Time_post.objects.filter(author = request.user).order_by('published_date')
		post = Time_post.objects.filter(author__lte = request.user).filter(title__startswith = pk1 ).order_by('published_date')
		#print(post[1].day)
		val = []
		temp = []
		for j in posts:
			count = 1
			for k in temp:
				if j.title == k:
					count = 0
					break
			if count == 1:		
				val.append(j.title)
				temp.append(j.title)
		return render(request, "dash/home1.html",{'user' : request.user.username,'val' : val,'post' : post})

def logot(request):
	return logout(request)