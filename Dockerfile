FROM python:3.10-alpine

WORKDIR /usr/src/app

# python requirements
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# copy project
COPY . .

ENTRYPOINT [ "uvicorn", "backend.entrypoint:app" ]