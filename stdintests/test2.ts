import TestReport from "../functions.ts";
const buf = new Uint8Array(1024);
const n =<number> await Deno.stdin.read(buf);
const message = new TextDecoder().decode(buf.subarray(0,n)).trim()
console.log(TestReport.fromJson(JSON.parse(message)));
