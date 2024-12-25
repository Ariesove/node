import { Writable } from 'node:stream';

class WritableDong extends Writable {

  constructor(iterator) {
    super();
    this.iterator = iterator;
  }

  _write(data, enc, next) {
    console.log(data.toString());
    setTimeout(() => {
      next();
    }, 1000);
  }
}

function createWriteStream() {
  return new WritableDong();
}

const writeStream = createWriteStream();

writeStream.on('finish', () => console.log('done'));

writeStream.write('阿门阿前一棵葡萄树，');
writeStream.write('阿东阿东绿的刚发芽，');
writeStream.write('阿东背着那重重的的壳呀，');
writeStream.write('一步一步地往上爬。');
writeStream.end();
