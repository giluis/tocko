import {suite,test,assert} from "./index.ts";

suite("Suite 1",()=>{
    test("Test 1",()=>{
        assert(true);
    })
    test("Test 2",()=>{
        assert(false,"Test 2 should no be false");
        console.log("ii");
    })
})
