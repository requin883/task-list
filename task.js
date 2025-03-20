
export class Task {
  constructor(taskName, taskStatus) {
    this.taskName = taskName;
    this.taskStatus = taskStatus || null;
  }
  update({ taskName, taskStatus }) {
    this.taskName = taskName || this.taskName;
    if (taskStatus !== 'done' || taskStatus !== 'in progress' || taskStatus !== null) {
      throw new Error('taskStatus must be either done or in progress');
    } else {
      this.taskStatus = taskStatus || this.taskStatus;
    }
  }
  delete() {
    this.taskName = '';
    this.taskStatus = '';
  }
}

export class TaskList {
  constructor() {
    this.tasks = [];
  }
  add(task) {
    this.tasks.push(task);
  }
  delete(task) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
  getTask(taskName) {
    return this.tasks.find((t) => t.taskName === taskName);
  }
  getAllTasks() {
    return this.tasks;
  }
  getTasksbyStatus(taskStatus) {
    return this.tasks.filter((t) => t.taskStatus === taskStatus);
  }
  deleteAll() {
    this.tasks = [];
  }
}