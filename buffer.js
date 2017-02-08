var zlib=require('zlib');
const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
console.log(buffer.toString());

zlib.unzip(buffer, (err, buffer) => {
  if (!err) {
  //  console.log(buffer.toString());
  } else {
    // handle error
  }
});
const buf2 = Buffer.alloc(10, 1);
console.log(buf2.toString());
