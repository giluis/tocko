import TestReport from "./functions.ts"
import { assert as assertlib } from "./assertions.ts";

export const report = new TestReport();

export const suite =  (suiteName:string,runnable:()=>void)=>report.suite(suiteName,runnable);
export const test =  (testName:string,runnable:()=>void)=>report.test(testName,runnable);

export * from "./assertions.ts";