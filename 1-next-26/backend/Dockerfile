# Base -------

FROM python:3.12-slim AS base 

# set working directory
WORKDIR /backend 

# Prevent python from writing pyc files and enable unbuffered stdout
ENV PYTHONDONTWRITEBYTECODE=1 
ENV PYTHONUNBUFFERED=1 

# Dependencies -------
FROM base AS deps 

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt 

# Builder -------
FROM base AS builder 

COPY --from=deps /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY .  .
RUN python manage.py migrate --nopinput
RUN python manage.py collectstatic --noinput 

# Production ----
FROM python:3.12-slim AS runner 

WORKDIR / backend 

COPY --from=builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages

COPY --from=builder /backend /backend 

EXPOSE 8000 
CMD ["gunicorn", "myproject.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]
