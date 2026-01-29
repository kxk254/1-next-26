
FROM python:3.12-slim 

# Prevent Python from writing pyc files and enable unbuffered stdout
ENV PYTHONDONTWRITEBYTECODE=1 
ENV PYTHONUNBUFFERED=1 

# set working directory
WORKDIR /backend

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt 

COPY .  .
RUN python manage.py migrate --noinput
RUN python manage.py collectstatic --noinput 

# Production ----

EXPOSE 8000 
CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]
