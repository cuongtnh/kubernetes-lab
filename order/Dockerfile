# Order Service Dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY order_service.py /app/
RUN pip install flask flask_cors
CMD ["python", "order_service.py"]