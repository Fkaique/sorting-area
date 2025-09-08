
export function getDigit(number: number, digit: number, base=10){
  return Math.floor(number/Math.pow(base,digit)%base)
}

export function getSizeNumber(number: number, base=10){
  return Math.floor(Math.log(number)/Math.log(base))+1
}

export function radix(numbers: number[], base=10): number[]{
  let buckets: number[][] = Array.from({
    length: base
  }, ()=>[]);
  let size=numbers.reduce((max,x)=>Math.max(max,getSizeNumber(x,base)),0)
  console.log("size",size);
  for (let j=0;j<size;j++){
    for (let n of numbers){
      const digit = getDigit(n,j,base);
      buckets[digit].push(n)
    }
    numbers = []
    for (let i=0;i<buckets.length;i++){
      numbers = numbers.concat(buckets[i]);
      buckets[i]=[]
    }
    console.log(buckets)
  }
  return numbers
}

export function random(ini: number,fim: number): number{
  return Math.floor(Math.random()*(fim-ini+1)+ini)
}
export function embaralhar(vector: number[]): void{
  for(let i=0;i<vector.length;i++){
    let rand = random(0,vector.length-1);
    [vector[i],vector[rand]]=[vector[rand],vector[i]]
  }
}