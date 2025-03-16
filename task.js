import { taskListName } from "./data";

export class Task {
  constructor(taskName, taskStatus) {
    this.taskName = taskName;
    this.taskStatus = taskStatus || 'in progress';
  }
  update({ taskName, taskStatus }) {
    this.taskName = taskName || this.taskName;
    if (taskStatus !== 'done' || taskStatus !== 'in progress') {
      throw new Error('taskStatus must be either done or in progress');
    } else {
      this.taskStatus = taskStatus || this.taskStatus;
    }
  }
  delete() {
    this.taskName = '';
    this.taskStatus = '';
  }
  filterTasksByStatus = (status) => {
    fs.readFile(taskListName, function (err, data) {
      if (err) {
        return console.error(err);
      }
      const tasks = data.toString().split('\n');
      const filteredTasks = tasks.filter(task => task.includes(status));
      console.log(filteredTasks.join('\n'));
    });
  }
}
