const ASSERT_TRUE_DEFAULT_ERROR_MESSAGE = "SHoULd Be TRuE";

export function fail(message:string):void {
    throw message;
}

export function assert(bool:boolean,msg:string="") {
    if (!bool)
        throw `assertTrue failed: ${msg||ASSERT_TRUE_DEFAULT_ERROR_MESSAGE}`;
}



export function assertArrayEquals(expected:any[],result:any[]):void{
    if(expected.length !== result.length)
        throw `assertArrayEquals failed: arrays were different lengths \n expected.length -> ${expected.length} | result.length-> ${result.length}`;
    for(let i = 0; i < expected.length;i++){
        if(expected[i] !== result[i]){
            if(expected[i] instanceof Array && result[i] instanceof Array)
                assertArrayEquals(expected[i],result[i]);
            else 
                throw `Arrays differed: expected[${i}]->${expected[i]} | result[${i}] -> ${result[i]}`   
        }
    }
}

