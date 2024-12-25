import { Readable } from 'node:stream';

const readableStream = new Readable();

readableStream._read = function () {
  this.push('阿门阿前一棵葡萄树，');
  this.push('阿东阿东绿的刚发芽，');
  this.push('阿东背着那重重的的壳呀，');
  this.push('一步一步地往上爬。')
  this.push(null);
}

readableStream.on('data', (data) => {
  console.log(data.toString())
});

readableStream.on('end', () => {
  console.log('done');
});
