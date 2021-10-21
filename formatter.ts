import  TestReport, { TestCase, TestSuite } from "./functions.ts";

export default function formatReport(report: TestReport):string{
    const title = "================\n  Test Results  \n================\n\n" 
    const suites:string[] = report.suites.map(s=>formatSuite(s));
    return title + suites.reduce((acc,cur)=>acc + cur,"")
}

function formatSuite(s:TestSuite):string{
   const header = `  ___ ${s.name} ___\n`;
   const formattedTests:string[] = s.tests.map(t=>formatTest(t));
   return formattedTests.reduce((acc,cur)=>acc + cur,header)
}

function formatTest(t:TestCase):string{
    const wasPassed = t.result.passed ? `${t.result.msg}` : `fail:${t.result.msg}`;
    return  `    ${t.name} --- ${wasPassed}:\n`;
}
