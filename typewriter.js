const sentence = "hello there from lighthouse labs ";
delayTime = 0;
for (const char of sentence) {
  delayTime ++
  setTimeout(() => { 
    process.stdout.write(char);}, delayTime*50) 
  }
  setTimeout(() => {
  process.stdout.write('\n');
  },50*(sentence.length)); 