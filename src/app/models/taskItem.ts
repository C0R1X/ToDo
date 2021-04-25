export interface ITaskItem {
  Id
  Name
  Desc
  Time
  Important
}

export class Task implements ITaskItem {
  private id: number
  private name: string
  private desc: string
  private time: string
  private important:boolean
  private dateCreate: Date

  constructor(id: number, name: string, desc: string, time: string) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.time = time;
    this.Important = false;
    this.dateCreate = new Date();
  }

  get Id():number{
    return this.id;
  }
  set Id(id:number){
    this.id =id;

  }get Name():string{
    return this.name;
  }
  set Name(name:string){
    this.name =name;
  }

  get Desc():string{
    return this.desc;
  }
  set Desc(desc:string){
    this.desc =desc;
  }

  get Time():string{
    return this.time;
  }
  set Time(t:string){
    this.time = t;
  }

  get Important():boolean{
    return this.important;
  }
  set Important(bool:boolean){
    this.important =bool;
  }



}
