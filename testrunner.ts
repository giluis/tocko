import TestReport from "./functions.ts";

const buf = new Uint8Array(1024);

const n = Deno.stdin.readSync(buf)
if(n)
    console.log(TestReport.fromJson( JSON.parse(new TextDecoder().decode(buf.subarray(0,n))) ))
const runTest = (file:string) => `deno run ${file}`.split(" ");
const p = Deno.run({
    cmd: runTest("1.test.ts"),
    stout: "piped",
    stdin: "piped",
})

await  p.status();
const rawOutput = await p.output();
console.log(rawOutput);
