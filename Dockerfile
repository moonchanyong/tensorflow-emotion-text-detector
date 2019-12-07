FROM python:3.6.8-alpine

LABEL maintainer="jama3137@gmail.com"

RUN mkdir /docker-flask
WORKDIR /docker-flask
COPY . .

EXPOSE 80
ENV FLASK_APP run.py
ENV FLASK_ENV development
ENV GIPHY_API_KEY dc6zaTOxFJmzC
ENV TF_MODEL_URL https://endpoint.ainize.ai/moonchanyong/model-server

RUN pip install -r requirements.txt

CMD flask run --host 0.0.0.0