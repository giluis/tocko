import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import { assertArrayEquals } from "./assertions.ts"

	const arr1 = [1,2,3,4]
	const arr2 = [6,7,8,9]
	try{

		assertArrayEquals(arr1,arr2);
		console.log("Failed")
	}catch(passed){}
	const arr3 = [1,2,3,4]
	const arr4 = [1,2,3,4]
	try{
		assertArrayEquals(arr3,arr4);
		console.log("Passed")
	}catch(failure){console.log(failure)}
