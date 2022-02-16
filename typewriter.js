let sentence = "hello there from lighthouse labs";
// fixes the bug, wanting to start a new line after sentence writes out
sentence += "\n";
// setting timer to a variable so we can +/- 
let delay = 1000;
//looping the given sentence
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50);
};
  