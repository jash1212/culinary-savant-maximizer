from django.urls import path
from api.views import detect_ripeness, get_inventory, add_inventory  # Ensure import is correct

urlpatterns = [
    path('detect/', detect_ripeness, name='detect_ripeness'),
    path('inventory/', get_inventory, name='get_inventory'),
    path('inventory/add/', add_inventory, name='add_inventory'),
]
