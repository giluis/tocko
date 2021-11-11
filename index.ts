import TestReport,{TestSuite,TestCase,TestResult} from "./functions.ts"
import * as Colors from "https://deno.land/std/fmt/colors.ts";

const bulletpoint = '\u2022'
const FAIL_COLOR = 0xfa0101
const PASS_COLOR = 0x06840f


export function suite(suiteName:string, runnable:()=>void){
    report.suite(suiteName,runnable);
}

export function test(testName:string, runnable:()=>void){
    report.test(testName,runnable);
}

const report = new TestReport();
function printReport(report: TestReport):void{
	report.suites.forEach(printSuite);
}

function printSuite(s: TestSuite,i:number,allSuites:TestSuite[]=[]){
    const passedResult = s.didSuitePass()? Colors.rgb24( "PASSED", PASS_COLOR ) : Colors.rgb24("FAILED",FAIL_COLOR);
    console.log(`\n=== #${i} ${ s.name } :::: ${passedResult} `);
    s.tests.forEach(printTest);
    console.log("\n");
}

function printTest(t: TestCase,i:number,allTests:TestCase[]=[]){
    const evaluation = t.result.passed? 'Passed ✔' : `Failed ❌`;
    console.log(`\n\t ${t.result.passed?Colors.rgb24(bulletpoint,PASS_COLOR):Colors.rgb24(bulletpoint,FAIL_COLOR)} ${ t.name } :::: ${evaluation}`)
    if(!t.result.passed && t.result.msg !== "") console.log(`\t    > ${t.result.msg}`);
}

window.addEventListener("unload",()=>{
    printReport( report )
})

export * from "./assertions.ts";
