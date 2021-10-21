import TestReport from "./functions.ts";

const buf = new Uint8Array(1024);
let n = await Deno.stdin.read(buf);

export let report: TestReport;
if (n) {
  let r: string;
  if (n > 4) {
    r = new TextDecoder().decode(buf.subarray(0, n));
    let json;
    try {
      json = JSON.parse(r)
      report = TestReport.fromJson(json);
    }catch(e){
    }
  } else {
    report = TestReport.empty();
  }
} else {
  report = TestReport.empty();
}

export function suite(suiteName: string, runnable: () => void) {
  report.suite(suiteName, runnable);
}

export function test(testName: string, runnable: () => void) {
  report.test(testName, runnable);
}

export * from "./formatter.ts";
export * from "./assertions.ts";

window.addEventListener("unload", (e) => {
  e.preventDefault();
  Deno.stdout.writeSync(new TextEncoder().encode(JSON.stringify(report)));
});
