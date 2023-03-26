## Folder structure

#### Explanation of the project structure.

The project is divided into two main folders, the public folder and the src folder.

`public` contains the static files that will be served to the client.

`src` contains the server files. The server files are divided into the following subfolders:

`dao` contains the data access objects, which are the files that will be in charge of accessing the database and performing the CRUD operations. Besides, this folder contains the manager files, which are the files that will be in charge of managing the data access objects.

`lib` contains the libraries that will be used in the project.

`models` contains the models of the project, which are the files that will be in charge of defining the structure of the data that will be stored in the database.

`routes` contains the files that will be in charge of defining the routes of the project.

`uploads` contains the files that will be uploaded to the server.

`utils` contains the files that will be in charge of defining the utility functions that will be used in the project.

`views` contains the files that will be in charge of defining the views of the project that will be rendered in the browser. These files are written in the [Handlebars](https://handlebarsjs.com/) template engine.

## Installation

#### Clone the repository

```bash
git clone
```

#### Install the dependencies

```bash
pnpm install
```

#### Create the .env file

```bash
.env.example
```

#### Set the environment variables

```bash
PORT=3000
MONGODB_CNN=mongodb://localhost:27017/ecommerce
```

#### Run the project

```bash
pnpm start
```