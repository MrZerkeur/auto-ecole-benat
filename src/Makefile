IMAGE_NAME := benat


build:
	docker build -t $(IMAGE_NAME) .


run:
	docker run -p 3000:3000 $(IMAGE_NAME)

build-run: build
	docker run -p 3000:3000 $(IMAGE_NAME)

clean:
	docker rm $(shell docker ps -aq --filter status=exited)