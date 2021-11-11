import {suite,test,assert} from "./index.ts";


suite("Suite 1",()=>{
    test("Test 1",()=>{
        assert(true);
    })
    test("Test 2",()=>{
        assert(true);
    })
})

suite("Suite 2",()=>{
    test("Test 3",()=>{
        assert(true);
    })
    test("Test 4",()=>{
        assert(false,"This should not be false because blablabla");
    })
})
