import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import { assertArrayEquals } from "./assertions.ts"

const arr1 = [1,2,3,4]
const arr2 = [6,7,8,9]
throw "lfkdj"
try{
	assertArrayEquals(arr1,arr2);
	throw "Should not have been here";
}catch(passed){}

const arr3 = [1,2,3,4]
const arr4 = [1,2,3,4]
try{
	assertArrayEquals(arr1,arr2);
}catch(failure){throw "rror"}
