import { importType } from "@angular/compiler/src/output/output_ast"


export interface ITaskItem{
    id: number
    name: string
    desc: string
    time: string
    //constructor(id:number,name:string,desc:string,time:string)
}

export class Task implements ITaskItem{
    id: number
    name: string
    desc: string
    time: string

    constructor(id:number,name:string,desc:string,time:string){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.time=time;

    }
}