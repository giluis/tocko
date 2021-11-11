const ASSERT_TRUE_DEFAULT_ERROR_MESSAGE = "SHoULd Be TRuE";

export function fail(message:string):void {
    throw message;
}

export function assert(bool:boolean,msg:string= ASSERT_TRUE_DEFAULT_ERROR_MESSAGE ) {
    if (!bool)
        throw new Error (  msg );
}

export function assertEquals(a:any,b:any):void{
	if (a instanceof Array && b instanceof Array){
		assertArrayEquals(a as any[],b as any[])
	}else if (typeof a.equals === "function"){
		if(!a.equals(b))
			throw new Error("Failed equals")
	}else {
		if(a !== b)
			throw new Error("expected did not equal result")
	}
}


export function assertArrayEquals(expected:any[],result:any[]):void{
    if(expected.length !== result.length)
        throw new Error ( `assertArrayEquals failed: arrays were different lengths \n expected.length -> ${expected.length} | result.length-> ${result.length}` );
    for(let i = 0; i < expected.length;i++){
        if(expected[i] !== result[i]){
            if(expected[i] instanceof Array && result[i] instanceof Array)
                assertArrayEquals(expected[i],result[i]);
            else
                throw new Error ( `Arrays differed: expected[${i}]->${expected[i]} | result[${i}] -> ${result[i]}` )
        }
    }
}

