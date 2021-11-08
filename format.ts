
export function printTest(testName:string,isFailure:boolean,msg:string="Test Passed Successfully"):void{
    console.log(`\t${ testName } => ${isFailure?"FAILED":"PASSED"}: ${msg}\n`);
}
