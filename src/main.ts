import { embaralhar, radix } from './radix-sort';
import { mudarTema } from './util/mudarTema';
import './style.css';


const p1 = document.getElementById('p1') as HTMLParagraphElement;
const p2 = document.getElementById('p2') as HTMLParagraphElement;
const btn = document.getElementById('btn') as HTMLButtonElement;
const input = document.getElementById('input') as HTMLInputElement;
const tema = document.getElementById('tema') as HTMLInputElement;

tema.addEventListener('click', mudarTema)

btn.addEventListener('click',()=>{
  let numbers;
  if (input.value===""){
    numbers = [1,2,3,4,5,6,7,8,9,10]
    embaralhar(numbers);
  }else{
    numbers = input.value.split(',').map(n => Number(n.trim()));
  }
  p1.textContent = `Pre: ${numbers.join(', ')}`
  p2.textContent = `Ord: ${radix(numbers,10).join(', ')}`


})
