import fs from 'fs';

class File {
  constructor(fileName) {
    this.fileName = fileName;
  };
  createOrUpdate(newData) {
    const data = JSON.stringify(newData) || '';
    fs.appendFile(this.fileName, data, (err) => {
      if (err) throw err;
    });
  }
  read(data) {
    fs.readFile(this.fileName, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }
  delete() {
    fs.unlink(this.fileName, (err) => {
      if (err) throw err;
      console.log('The file has been deleted!');
    });
  }
}

export default File;


