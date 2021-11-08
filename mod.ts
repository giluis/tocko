import {printTest} from "./format.ts";

export function suite(suiteName: string, runnable: () => void){
	try{
		console.log(`------- ${suiteName} -------`)
		runnable();
		console.log(`---`)
	}catch(err){
	}
}

export function test(testName: string, runnable: () => void) {
    try {
        runnable();
        printTest(testName,false)
    } catch({message}){
        printTest(testName,true,message);
		throw new Error("There was an exception below");
    }
}



export * from "./assertions.ts";
