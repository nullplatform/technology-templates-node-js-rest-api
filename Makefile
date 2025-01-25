#
# Makefile for processing assets
#

ASSET_NAME=$(ASSET_TYPE)-asset
ASSET_FILE=$(ASSET_NAME).zip
ASSET_OUTPUT_DIRECTORY=build
ASSET_WORKING_DIRECTORY=.

.PHONY: build push

ifeq ($(ASSET_TYPE),lambda)
build: build-lambda
push: push-lambda
endif

ifeq ($(ASSET_TYPE),docker-image)
build: build-docker-image
push: push-docker-image
endif

#
# Lambda zip file
#

build-lambda: setup-lambda compile-lambda package-lambda
clean-lambda:
	rm -r $(ASSET_OUTPUT_DIRECTORY)
setup-lambda:
	mkdir -p $(ASSET_OUTPUT_DIRECTORY)
	cp -r $(ASSET_WORKING_DIRECTORY)/config $(ASSET_OUTPUT_DIRECTORY)
	cp $(ASSET_WORKING_DIRECTORY)/package*.json $(ASSET_OUTPUT_DIRECTORY)
	cp $(ASSET_WORKING_DIRECTORY)/.npmrc $(ASSET_OUTPUT_DIRECTORY)
test-lambda:
	npm --prefix $(ASSET_WORKING_DIRECTORY) install
	npm --prefix $(ASSET_WORKING_DIRECTORY) run test:coverage
compile-lambda:
	npm --prefix $(ASSET_OUTPUT_DIRECTORY) install --omit=dev
	mkdir $(ASSET_OUTPUT_DIRECTORY)/src
	mkdir $(ASSET_OUTPUT_DIRECTORY)/migrations
	cp $(ASSET_WORKING_DIRECTORY)/.sequelizerc $(ASSET_OUTPUT_DIRECTORY)
	cp -r $(ASSET_WORKING_DIRECTORY)/src/* $(ASSET_OUTPUT_DIRECTORY)/src
	cp -r $(ASSET_WORKING_DIRECTORY)/migrations/* $(ASSET_OUTPUT_DIRECTORY)/migrations
	rm $(ASSET_OUTPUT_DIRECTORY)/.npmrc
package-lambda:
	cd $(ASSET_OUTPUT_DIRECTORY) && zip -r $(ASSET_FILE) .
push-lambda:
	np asset push --type lambda --name $(ASSET_NAME) --source $(ASSET_OUTPUT_DIRECTORY)/$(ASSET_FILE)

#
# Docker image
#

build-docker-image:
	docker build --build-arg GITHUB_TOKEN=$(GITHUB_TOKEN) -t $(ASSET_NAME) .
push-docker-image:
	np asset push --type docker-image --name $(ASSET_NAME) --source $(ASSET_NAME)
