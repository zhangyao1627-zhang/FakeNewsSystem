from abc import ABC

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# Serializer
from ..serializer import UserSerializerWithToken, UserSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework import status
from rest_framework.response import Response

from django.contrib.auth.models import User


# 1.Login-in-part
class TokenSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data

        for index, value in serializer.items():
            data[index] = value

        return data


class TokenView(TokenObtainPairView):
    serializer_class = TokenSerializer


# 2.user/list
@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


# 3.user/register
@api_view(['POST'])
def register(request):
    data = request.data
    try:
        user = User.objects.create(
            username=data['username'],
            password=data['password']
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'Detail': 'User exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
