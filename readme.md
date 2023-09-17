# Da Vinci Renaissance Website Backend

This repository contains the backend code for the Da Vinci Renaissance website.

## Getting started

**One-time steps to set up environment:**

1. Download and install [Node JS](https://nodejs.org/). After installation, you can confirm it's installed correctly by running the commands `node --version` and `npm --version` in a terminal.

1. Clone the repository with the following command:

    ```
    git clone https://github.com/Da-Vinci-Renaissance/Website_Backend.git
    ```

1. Install dependencies by executing the following command in the project directory:

    ```
    npm install
    ```

**Starting the app every time:**

1. If you're on Windows, open Docker Desktop.

1. CD to the project directory.

1. Run the following to start the database:

    ```
    npm run docker:db:up
    ```

1. Run the following to start the development server:
    ```
    npm run dev
    ```

1. Open a browser and go to `localhost:8000` to see the app!


**Stopping the app:**

1. Type `Ctrl+C` in the terminal with the server to stop the server.

1. In Docker Desktop, you can press the Stop button to stop a container and persist its data. Pressing the Delete button will stop a container and delete its data. You can also delete Dabble's db container with the following command:

    ```
    npm run docker:db:down
    ```


**Helpful tools:**

1. You can use [Postman](https://www.postman.com/downloads/) to send requests to the server.

1. [MongoDB Compass](https://www.mongodb.com/products/tools/compass) is great for viewing MongoDB data.