# Run the code base

This code base has two folders.
One for frontend (UI) which is written in reactjs
Second one has backend (server) written in nodeJs

## To run the frontend application
Go to frontend folder
### `cd frontend`

Then install npm packages
### `npm i`

After installing npm packages. Execute below command to run the application
### `npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

## Setup ENV file for frontend

In frontend folder there is a file .env file
### `REACT_APP_API_URL=<api url>`

## To run the API (backend)
Go to server folder
### `cd server`

Then install npm packages
### `npm i`

After installing npm packages. Execute below command to run the application
### `npm start`

Runs the api on default port 5001.
API will be accessible on http://localhost:5001

## Setup ENV file for API

In server folder there is a file .env file

Default port is 5001, but we can change it by mentioning it in env file
### `PORT=5001`
To avoid the cors issue we can mentione the list of URLS
### `PUBLIC_URL="http://localhost:3000"`

# Troubleshooting

- If UI is not able to get data from api.
Then please check API_URL in frontend env file.
And make sure url should have same port on which api is running
- If there is cors error then make sure PUBLIC_URL is
same on which frontend is running