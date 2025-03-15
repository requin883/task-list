const fs = require('fs');

class File {
  constructor(fileName, data) {
  this.fileName = fileName;
  this.data = data;
  };
  create (){
    fs.writeFile(this.fileName, this.data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }
  read (){
    fs.readFile(this.fileName, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }
  update(newData){
    fs.writeFile(this.fileName, newData, (err) => {
      if (err) throw err;
      console.log('The file has been updated!');
    });
  }
  delete (){
    fs.unlink(this.fileName, (err) => {
      if (err) throw err;
      console.log('The file has been deleted!');
    });
  }
}


