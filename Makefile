start-project:
	expo start

start-api-server:
	json-server ./src/services/server.json --host 192.168.0.18 --port 3333 --delay 700