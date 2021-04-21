export interface ITaskItem {
  id: number
  name: string
  desc: string
  time: string
}

export class Task implements ITaskItem {
  id: number
  name: string
  desc: string
  time: string
  important: boolean
  dateCreate: Date

  constructor(id: number, name: string, desc: string, time: string) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.time = time;
    this.important = false;
    this.dateCreate = new Date();
  }

}
