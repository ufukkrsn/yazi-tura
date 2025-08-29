import { Frog, Button } from "frog";
import { handle } from "frog/next";
export const runtime = "edge";

const app = new Frog({ title: "Yazı-Tura" });

app.frame("/", (c) => {
  const flip = Math.random() < 0.5 ? "YAZI" : "TURA";
  return c.res({
    image: `🎲 ${flip}`,
    intents: [
      <Button action="/">Tekrar at</Button>,
      <Button.Link href="https://warpcast.com/~/compose">Paylaş</Button.Link>,
    ],
  });
});

export const GET = handle(app, { path: "/frames" });
export const POST = handle(app, { path: "/frames" });
