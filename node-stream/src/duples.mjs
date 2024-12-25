import { Duplex } from 'node:stream';

class DuplexStream extends Duplex {

  _read() {
    this.push('阿门阿前一棵葡萄树，');
    this.push('阿东阿东绿的刚发芽，');
    this.push('阿东背着那重重的的壳呀，');
    this.push('一步一步地往上爬。')
    this.push(null);
  }

  _write(data, enc, next) {
    console.log(data.toString());
    setTimeout(() => {
      next();
    }, 1000);
  }
}

const duplexStream = new DuplexStream();

duplexStream.on('data', data => {
  console.log(data.toString())
});
duplexStream.on('end', data => {
  console.log('read done')
});

duplexStream.write('阿门阿前一棵葡萄树，');
duplexStream.write('阿东阿东绿的刚发芽，');
duplexStream.write('阿东背着那重重的的壳呀，');
duplexStream.write('一步一步地往上爬。');
duplexStream.end();

duplexStream.on('finish', data => {
  console.log('write done')
});
