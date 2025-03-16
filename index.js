import readline from 'readline';
import { userPrompts } from './data.js';
import File from './writefile.js';
import { readTasks } from './services.js';
import { taskListName } from './data.js';
import Task from './task.js';
import { getUserTaskName, getUserTaskStatus } from './services.js';

const newFile = new File(taskListName);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getUserInput = () => {
  rl.question(`${userPrompts.slice(0).join('\n')}\n`, (userInput) => {
    if (!userInput || isNaN(userInput)) {
      console.log('Invalid input. Please try again.');
      return getUserInput();
    }
    rl.clearLine();
    newFile.createOrUpdate();
    handleUserinput(userInput);
  });
}

const handleUserinput = (userInput) => {
  switch (userInput) {
    case '1':
      readTasks();
      break;
    case '2':
      filterTasksByStatus('done');
      break;
    case '3':
      filterTasksByStatus('in progress');
      break;
    case '4':
      const taskName = getUserTaskName();
      const taskStatus = getUserTaskStatus();
      const newTask = new Task(taskName, taskStatus);
      console.log('Task created successfully');
      newFile.createOrUpdate(newTask);
      break;
    case '5':
      console.log(userPrompts[5]);
      break;
    case '6':
      console.log(userPrompts[6]);
      break;
    case '7':
      return false;
    default:
      return false
  }
};

getUserInput();