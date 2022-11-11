import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1505620",
  key: "f78211dbb211bc9619a3",
  secret: "cbada636d03860548431",
  cluster: "us2",
  useTLS: true,
});

export const clientPusher = new ClientPusher("f78211dbb211bc9619a3", {
  cluster: "us2",
});
