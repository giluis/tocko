import TestReport from "./functions.ts";

Deno.stdout.writeSync(new TextEncoder().encode(JSON.stringify(TestReport.fromJson({
    suites: [
        {
            name: "Suiet 1asdfkj",
            tests: [
                {
                    name: "Test 1asdlkj",
                    result: {
                        passed: true,
                        msg: "Passed tthis etsts",
                    }
                }
            ]
        }
    ]
}))));