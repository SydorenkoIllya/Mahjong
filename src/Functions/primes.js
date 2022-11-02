function primes(n) {
    let primes = [2];
    let isPrime = true;
    for (let i = 3; i <= n; i++) {
      isPrime = true;
      for (let p = 0; p < primes.length; p++) {
        if (primes[p] * primes[p] <= i) {
          if (i % primes[p] === 0) {
            isPrime = false;
            break;
          }
        } else {
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    return primes;
  }


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex !== 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

let result = shuffle(primes(60)).slice(0, 16);
let finalArr = shuffle(Object.assign(result).concat(result))

export default finalArr;


