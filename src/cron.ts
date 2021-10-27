import { getBTCVoteTransactions } from "sip-12";
import { getVoteData } from "sip-12";

function parse(object: any): string {
  return JSON.stringify(object, (_, v) =>
    typeof v === "bigint" ? parseInt(v.toString()) : v
  );
}

export async function handleCron(): Promise<Response> {
  console.log("grabbing vote data");
  const voteData = parse(await getVoteData());
  console.log(`got vote data: ${voteData}`);
  // @ts-ignore
  await KV.put("voteData", voteData);

  console.log("grabbing btcApproveVoteData");
  const btcApproveVoteData = parse(await getBTCVoteTransactions(true));
  console.log(`got vote data: ${btcApproveVoteData}`);
  // @ts-ignore
  await KV.put("btcApproveVoteData", btcApproveVoteData);

  console.log("grabbing btcNoApproveVoteData");
  const btcNoApproveVoteData = parse(await getBTCVoteTransactions(false));
  console.log(`got vote data: ${btcNoApproveVoteData}`);
  // @ts-ignore
  await KV.put("btcNoApproveVoteData", btcNoApproveVoteData);

  return new Response();
}
