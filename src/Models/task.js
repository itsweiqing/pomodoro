export default class Task {
    constructor(description = '') {
      this.description = description;
      this.discard = false;
      this.completed = false;
    }
  }