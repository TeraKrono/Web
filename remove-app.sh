#!/bin/bash

# Remove all Kubernetes objects
kubectl delete -f frontend-deployment.yaml
kubectl delete -f frontend-service.yaml
kubectl delete -f backend-deployment.yaml
kubectl delete -f backend-service.yaml

echo "All Kubernetes objects removed successfully."
