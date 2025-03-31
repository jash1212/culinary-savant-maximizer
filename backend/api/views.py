from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from django.core.files.storage import default_storage
import os
from ultralytics import YOLO

# Load YOLO model
model = YOLO("yolov8n.pt")

@api_view(['POST'])
def detect_ripeness(request):
    """Endpoint to upload an image and detect ripeness."""
    parser_classes = (MultiPartParser, FormParser)
    
    if 'image' not in request.FILES:
        return Response({"error": "No image uploaded."}, status=400)
    
    image = request.FILES['image']
    image_path = default_storage.save(image.name, image)
    
    # Perform detection
    results = model.predict(source=image_path, save=False)
    
    # Placeholder: Extract ripeness info from results
    ripeness_status = "ripe"  # Modify based on model output
    
    # Cleanup
    os.remove(image_path)
    
    return Response({"ripeness": ripeness_status})

@api_view(['GET'])
def get_inventory(request):
    """Endpoint to fetch current inventory status."""
    inventory = [
        {"item": "Tomato", "status": "ripe", "quantity": 10},
        {"item": "Banana", "status": "unripe", "quantity": 5}
    ]
    return Response(inventory)

@api_view(['POST'])
def add_inventory(request):
    """Endpoint to add new items to inventory."""
    data = request.data
    return Response({"message": "Item added successfully", "data": data})
