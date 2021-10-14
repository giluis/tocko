import { formatReport } from "./formatter.ts";
import {report,suite,test,assert} from "./index.ts";


suite("Suite 1",()=>{
    test("Test 1",()=>{
        assert(true);
    })
    test("Test 2",()=>{
        assert(false,"Should be false");
    })
})

        

console.log( formatReport(report) );

