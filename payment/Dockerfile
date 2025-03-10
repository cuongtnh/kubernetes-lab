# Payment Service Dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY payment_service.py /app/
RUN pip install flask flask_cors
CMD ["python", "payment_service.py"]