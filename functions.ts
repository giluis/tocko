export interface TestSuite  {
    name: string,
    tests: TestCase[]
}

export interface TestCase  {
    name: string,
    result: TestResult,
}

export class TestResult {
    passed: boolean;
    msg: string;

    constructor(passed=true,msg="Test Passed Successfully"){
        this.passed  = passed;
        this.msg =msg;
    }
        
}

interface ITestReport {
    suites: TestSuite[];
}

export default class TestReport {
    suites: TestSuite[]
    testCases: TestCase[];
    constructor(){
        this.suites = [];
        this.testCases = [];
    }

    static empty():TestReport{
        return new TestReport();
    }

    static fromJson(json:ITestReport):TestReport {
        let report= new TestReport();
        report.suites = json.suites.map(s=>( {
            name: s[ "name" ],
            tests: s["tests"].map(t=>({
                name: t["name"],
                result: {
                    passed: t.result.passed,
                    msg: t.result.msg,
                }
            }))
        } ))
        return report;

    }

    test(testName:string, runnable: ()=>void):void{
        try {
            runnable()
            this.testCases.push({ name: testName, result:new TestResult() });
        } catch(err){
            this.testCases.push({name:testName,result: new TestResult(false,err.msg) });
        }
    }

    suite(suiteName:string,runnable:()=>void):void {
        runnable()
        let suite:TestSuite= {
            name: suiteName,
            tests: [...this.testCases],
        }
        this.testCases = [];
        this.suites.push(suite);
    }

    generate():JSON{
        throw new Error("Not supported yet");
    }
}
