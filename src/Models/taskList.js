
export default class TaskList {
    constructor() {
      this.head = null;
      this.numTasks = 0;
      this.numCompleted = 0;
    }
  
    insertTask(task) {
      if (this.numTasks < 10) {
        let node = new Node(task);
        if (!this.head) {
          this.head = node;
        } else {
          let current = this.head;
          while (current.next) {
            current = current.next;
          }
          current.next = node;
        }
        this.numTasks++;
      }
    }
  
    removeTask() {
      let current = this.head;
      let prev = null;
  
      while (current) {
        if (current.task.discard) {
          if (current === this.head) {
            this.head = this.head.next;
          } else {
            prev.next = current.next;
          }
          this.numTasks--;
          if (current.task.completed) {
            this.numCompleted--;
          }
        }
        prev = current;
        current = current.next;
      }
    }
  
    updateNumCompleted() {
      let current = this.head;
      this.numCompleted = 0;
  
      while (current) {
        if (current.task.completed) {
          this.numCompleted++;
        }
        current = current.next;
      }
    }
  
    toArray() {
      let taskArray = [];
      let current = this.head;
  
      while (current) {
        taskArray.push(current.task);
        current = current.next;
      }
  
      return taskArray;
    }
  }