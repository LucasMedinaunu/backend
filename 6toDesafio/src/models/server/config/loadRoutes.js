const path = require("path");
const fs = require("fs");

const loadRoutes = (app) => {
  // Get the path of the routes folder.
  const routesPath = path.join(__dirname, "../../../routes");
  // const routeFiles = fs.readdirSync(routesPath).map((file) => path.parse(file).name);
  const routeFiles = fs.readdirSync(routesPath).map(file => path.parse(file).name);

  // Loop through the files and require them.
  routeFiles.forEach((routeFile) => {
    const { name: slug } = path.parse(routeFile);
    const route = require(path.join(routesPath, routeFile))    

    const routePath = `/api/${slug}`;
    app.use(routePath, route);
  });
};

module.exports = loadRoutes