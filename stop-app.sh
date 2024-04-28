#!/bin/bash

# Stop the application
kubectl delete -f frontend-deployment.yaml
kubectl delete -f frontend-service.yaml
kubectl delete -f backend-deployment.yaml
kubectl delete -f backend-service.yaml

echo "Application stopped successfully."
