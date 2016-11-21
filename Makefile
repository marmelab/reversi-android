.PHONY: install run start-server test

install:
	npm install

run:
	node_modules/.bin/react-native run-android

start-server:
		node_modules/.bin/react-native start

test:
	node_modules/.bin/jest
