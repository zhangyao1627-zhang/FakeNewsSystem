from django.urls import path
from ..views import user_views

urlpatterns = [
    path('list/', user_views.getUsers),
    path('login/', user_views.TokenView.as_view()),
    path('register/', user_views.register)
]
