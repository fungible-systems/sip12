import { getVoteData } from "sip-12";
import { handleCron } from "./cron";
import { Router } from "itty-router";

const router = Router();

router
  .get(
    "/",
    async () =>
      new Response("hello there", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
  )

  .get(
    "/votedata",
    async () =>
      new Response(
        // @ts-ignore
        await KV.get("voteData"),
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
  )

  .get(
    "/btcApprove",
    async () =>
      new Response(
        // @ts-ignore
        await KV.get("btcApproveVoteData"),
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
  )

  .get(
    "/btcNoApprove",
    async () =>
      new Response(
        // @ts-ignore
        await KV.get("btcNoApproveVoteData"),
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
  )

  // 404 for everything else
  .all(
    "*",
    () =>
      new Response("uh, nope. couldn't find that.", {
        headers: { "Access-Control-Allow-Origin": "*" },
        status: 404,
      })
  );

addEventListener("fetch", (event) =>
  event.respondWith(router.handle(event.request))
);

addEventListener("scheduled", (event) => {
  event.waitUntil(handleCron());
});
