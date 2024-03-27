export class TodoItem {
    what: string;
    done: boolean;
  
    constructor (what: string, done: boolean = false){
      this.done = done;
      this.what = what;
    }
  }
  