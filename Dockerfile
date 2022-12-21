FROM python:3.10-alpine

WORKDIR /usr/src/app

RUN apk add libmagic

# python requirements
RUN pip install --upgrade pip
COPY ./backend/requirements.txt ./requirements.txt
RUN pip install -r requirements.txt

# copy project
COPY . .

ENTRYPOINT [ "uvicorn", "backend.entrypoint:app", "--host", "0.0.0.0" ]