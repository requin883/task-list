import fs from 'fs';
import { taskListName } from './data.js';


export const readTasks = () => {
  fs.readFile(taskListName, function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log(data.toString());
  });
}

export const getUserTaskName = () => {
  rl.question('Input Task Name', (taskName) => {
    if (!taskName || taskName.length < 3 || taskName.length > 50) {
      console.log('Invalid input. Please try again.');
      return getUserTaskName();
    }
    rl.clearLine();
    return taskName;
  });
}

export const getUserTaskStatus = () => {
  rl.question('Input Task Status', (taskStatus) => {
    if (!taskStatus || taskStatus !== 'done' || taskStatus !== 'in progress') {
      console.log('Invalid input. Please try again.');
      return getUserTaskStatus();
    }
    rl.clearLine();
    return taskStatus;
  });
}

