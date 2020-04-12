const btn_alert = document.getElementById('alert');
const btn_console = document.getElementById('console');
const btn_console2 = document.querySelector('#console');

btn_alert.addEventListener('click', () => {
  alert('Hi');
});

btn_console.addEventListener('click', () => {
  console.log('Hi?');
})

const btn_backtick = document.getElementById('backtick');

btn_backtick.addEventListener('click', () => {
  const name = "예림";
  alert(`HI ${name}`);
})

const num1_1 = document.getElementById('num1-1');
const num1_2 = document.getElementById('num1-2');
const result1 = document.getElementById('result1');

const num2_1 = document.getElementById('num2-1');
const num2_2 = document.getElementById('num2-2');
const result2 = document.getElementById('result2');

const num3_1 = document.getElementById('num3-1');
const num3_2 = document.getElementById('num3-2');
const result3 = document.getElementById('result3');

const btn_add = document.getElementById('add');

btn_add.addEventListener('click', () => {
  result1.value = parseInt(num1_1.value) + parseInt(num1_2.value);
})

num2_2.addEventListener('keyup', (e) => {
  if(e.key == 'Enter'){
    result2.value = parseInt(num2_1.value) + parseInt(num2_2.value);
  }
})

num3_1.addEventListener('keyup', () => {
  result3.value = parseInt(num3_1.value) + parseInt(num3_2.value);
})

num3_2.addEventListener('keyup', () => {
  result3.value = parseInt(num3_1.value) + parseInt(num3_2.value);
})

const scroll = document.getElementById('scroll');
const percent = document.getElementById('percent');
const percentText = document.getElementById('percent-text');

const color = document.getElementById('color');

init();

function init() {
  scroll.style.backgroundColor = 'rgb(150,0,0)'
  color.innerText = "RGB(150,0,0)"
  percent.innerText = '0';
}

document.addEventListener('scroll', (e) => {
  const scrolltop = parseInt(document.documentElement.scrollTop);
  const height = parseInt(document.documentElement.scrollHeight);
  const client = parseInt(document.documentElement.clientHeight);
  const width = parseInt(document.documentElement.clientWidth);
  
  const p = scrolltop / (height - client);
  percent.innerText = p.toFixed(5);
  percent.style.left = `${(width-100) * p}px`
  color.innerText = `RGB(${(150-(150*p)).toFixed(0)},0,${(0+(150*p)).toFixed(0)})`
  percent.style.backgroundColor = `rgb(${50+(205*p)},${50+(205*p)},${50+(205*p)})`
  percent.style.color = `rgb(${255-(205*p)},${255-(205*p)},${255-(205*p)})`
  scroll.style.backgroundColor = `rgb(${150-(150*p)},0,${0+(150*p)})`
})