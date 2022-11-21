import ClipboardJS from "clipboard";

const buttons = document.querySelectorAll('[data-roll]');
const btnComprar = document.querySelector('.btn-comprar');
const btnCopiar = document.querySelector('.btn-copy');

const comprarTarget = btnComprar.getBoundingClientRect().top;

new ClipboardJS('[data-clipboard-target]');

btnCopiar.addEventListener('click',({target})=>{
  target.textContent = 'copiado';
  console.log(target.textContent);
})

Array.from(buttons, (btn) => {
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: comprarTarget,
      behavior: 'smooth',
    })
  })
})
