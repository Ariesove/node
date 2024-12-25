import http from 'node:http';
import fs from 'node:fs'
const server = http.createServer(function (req, res) {
  // 使用 createReadStream 创建一个可读流
  const readStream = fs.createReadStream('src/data.txt', 'utf-8');
  // 监听 data 事件，每次接收到数据块时都会触发此事件
  readStream.on('data', chunk => {
    console.log('Received data chunk:', chunk);
  });

  // 当所有的数据都被处理完后触发 end 事件
  readStream.on('end', () => {
    console.log('Finished reading file.');
  });

  // 如果发生错误，则触发 error 事件
  readStream.on('error', err => {
    console.error('Error reading file:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  });
  // 将文件流的数据管道到响应对象
  readStream.pipe(res);

  // 监听错误事件，如果文件读取过程中出错，可以发送适当的错误响应给客户端
  readStream.on('error', (err) => {
    console.error('File read error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  });
});

server.listen(8000, () => {
  console.log('Server is running on port 8000');
});