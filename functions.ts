export class TestSuite  {
    name: string;
    tests: TestCase[];
    constructor(name:string,tests:TestCase[]=[]){
        this.name = name;
        this.tests = [ ...tests ];
    }

    didSuitePass():boolean{
        let passed = true;
        for (const test of this.tests){
            passed = test.result.passed && passed;
        }
        return passed
    }

}

export class TestCase  {
    name: string;
    result: TestResult;

    constructor(name:string,result:TestResult){
        this.name = name;
        this.result = result;
    }
}

export class TestResult {
    passed: boolean;
    msg: string;

    constructor(passed=true,msg=""){
        this.passed  = passed;
        this.msg =msg;
    }
}

export default class TestReport {
    suites: TestSuite[]
    testCases: TestCase[];
    constructor(){
        this.suites = [];
        this.testCases = [];
    }

    test(testName:string, runnable: ()=>void):void{
        try {
            runnable()
            this.testCases.push({ name: testName, result:new TestResult() });
        } catch(err){
            this.testCases.push({name:testName,result: new TestResult(false,err.message) });
        }
    }

    suite(suiteName:string,runnable:()=>void):void {
        runnable()
        let suite:TestSuite= new TestSuite(suiteName,this.testCases)
        this.testCases = [];
        this.suites.push(suite);
    }

    generate():JSON{
        throw new Error("Not supported yet");
    }
}
