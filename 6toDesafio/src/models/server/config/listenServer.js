const showInConsole = require("../../../utils/print");
const socketConfig = require("../../../lib/socket/socket.config");

const listenServer = (server, port) => {
  const httpServer = server.listen(port, () => {
    showInConsole('log', `Server listening on port ${port}.`);
  });

  return socketConfig(httpServer);
};

module.exports = listenServer;
