from django.urls import path
from .views import RoomView, CreateRoomView, GetRoom, JoinRoom, UserInRoom

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create', CreateRoomView.as_view()),
    path('get', GetRoom.as_view()),
    path('join', JoinRoom.as_view()),
    path('user-in-room', UserInRoom.as_view())
]
