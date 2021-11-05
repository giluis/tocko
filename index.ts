
const buf = new Uint8Array(1024);

export function suite(suiteName: string, runnable: () => void){
    console.log(`------- ${suiteName} -------`)
    runnable();
    console.log(`---`)
}

export function test(testName: string, runnable: () => void) {
    try {
        runnable();
        printTest(testName,false)
    } catch({message}){
        printTest(testName,true,message);
    }
}

export function printTest(testName:string,isFailure:boolean,msg:string="Test Passed Successfully"):void{
    console.log(`\t${ testName } => ${isFailure?"FAILED":"PASSED"}: ${msg}\n`);
}

export * from "./assertions.ts";
