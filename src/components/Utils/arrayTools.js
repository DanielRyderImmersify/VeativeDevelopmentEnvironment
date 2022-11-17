export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export function chunkArray(inputArray, chunkSize){
  let chunks = [];
  for (let i = 0; i < inputArray.length; i += chunkSize) {
      let chunk = inputArray.slice(i, i + chunkSize);
      chunks.push(chunk);
  }
  console.log(chunks);
  return chunks;
}