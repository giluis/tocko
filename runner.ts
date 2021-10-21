import TestReport from "./functions.ts";



const files = [];
for await (const dirEntry of Deno.readDir('data')) {
    if (dirEntry.isFile && dirEntry.name.includes(".test.ts"))
        files.push(dirEntry.name)
}

function run(file:string){
    return `deno run --allow-all ${file}`;
}
for (const f of files){
    const p = Deno.run({
        cmd: run(f).split(" "),
        stdin: "piped",
        stdout: "piped",
    })

    const {code} = await p.status();

    const rawOutput = await p.output();

    if (code === 0){
        await Deno.stdout.write(rawOutput);
    } else {
        console.log("Error code was not 0");
    }

    
}
