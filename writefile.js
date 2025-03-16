import fs from 'fs';

class File {
  constructor(fileName) {
    this.fileName = fileName;
  };
  createOrUpdate(newData) {
    const data = newData || '';
    fs.appendFile(this.fileName, data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }
  read() {
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


