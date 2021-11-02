
import TestReport from "../functions.ts";
const report = TestReport.fromJson({
    suites: [
        {
            name: "Suite 1",
            tests: [
                {
                    name: "Test1",
                    result: {
                        passed: true,
                        msg: "Passed this tests"
                    }
                },
                {
                    name: "Test2",
                    result: {
                        passed: true,
                        msg: "Passed this tests"
                    }
                }
            ],
        },
        {
            name: "Suite 2",
            tests: [
                {
                    name: "Test3",
                    result: {
                        passed: true,
                        msg: "Passed this tests"
                    }
                },
                {
                    name: "Test4",
                    result: {
                        passed: true,
                        msg: "Passed this tests"
                    }
                }
            ],
        }
    ]
})
const message = JSON.stringify(report);
await Deno.stdout.write(new TextEncoder().encode(message + ""));
