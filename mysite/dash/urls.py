from django.conf.urls import url
from . import views 


#*************************************

urlpatterns = [
	url(r'^$' , views.main , name="main"),
	url(r'^login/$' ,views.main , name='main'),
	url(r'^logot/$' ,views.logot , name='logot'),
	url(r'^signup/$',views.main , name='main'),
	url(r'^(?P<pk>[\w\s]+)/addnew/$',views.life , name='life'),
	#url(r'^(?P<pk>\w+)/(?P<pk1>\w+)/$',views.action , name='action'),
	url(r'^(?P<pk>[\w\s]+)/dash/(?P<pk1>[\w\s]+)/$',views.action , name='action'),
]