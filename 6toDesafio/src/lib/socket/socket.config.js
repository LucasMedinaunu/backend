const { Server } = require("socket.io");
const ChatManager = require("../../dao/chat.manager");

const socketConfig = (httpServer) => {
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log(`User with id ${socket.id} has connected!`);

    socket.on("messages", async () => {
      const messages = await ChatManager.getAll();
      io.emit("messages", messages);
    });

    socket.on("chatMessage", async (msg) => {
      const chat = { user: msg.user, message: msg.message, date: msg.date };
      await ChatManager.create(chat);
      io.emit("message", msg);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

module.exports = socketConfig;
 