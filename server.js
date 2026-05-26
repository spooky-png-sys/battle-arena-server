import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: process.env.PORT || 8080 });

wss.on("connection", ws => {
  ws.on("message", msg => {
    for (let client of wss.clients) {
      if (client.readyState === 1) {
        client.send(msg.toString());
      }
    }
  });
});

console.log("Battle Arena server live");
