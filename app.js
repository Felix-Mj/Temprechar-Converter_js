const temprechar = document.querySelector('#temprechar')
const converter = document.querySelector('#converter')
const converter_btn = document.querySelector('#converter_btn')
// const fToCel = (fTemp - 32) * 5 / 9;
// const cToFahr = cTemp * 9 / 5 + 32;

converter_btn.addEventListener('click',()=>{
    converter.value = temprechar.value * 9 / 5 + 32
})