import DOMPurify from "dompurify";
import {blackFridayIsInactive} from './countdown';

const modalWrapper = document.querySelector('.modal-wrapper');
const btnComprar = document.querySelector('.btn-comprar');
const btnSubmit = document.querySelector('.btn-submit');
const [form] = document.forms;
const classesCloseModal = ['modal-wrapper', 'popup-close'];
const sanitize = (value) => DOMPurify.sanitize(value);

// countdown.js -- blackFridayIsInactive()
const desativarCompra = () => {
  const divPix = document.querySelector('.comprar-pix-container');
  divPix.style.display = 'none';
  btnComprar.disabled = true;
  btnComprar.childNodes[0].textContent = 'Esgotado';
}

if(blackFridayIsInactive()) desativarCompra();
else{
  const openModal = () => modalWrapper.style.display = 'flex';
  btnComprar.addEventListener('click',openModal)
}

const closeModal = ({classList}) => {
  const closePopup = classesCloseModal.some((r)=> r === classList[0])  
  if(closePopup) modalWrapper.style.display = 'none';
}
modalWrapper.addEventListener('click', e => closeModal(e.target))

const nome = document.getElementById('nome');
const email = document.getElementById('email');

const campoValido = (target, empty = false) => {
  const valido = target.checkValidity();
  const message = target.validationMessage;

  if(!valido || empty){
    target.classList.add('error');
    target.nextElementSibling.innerText = empty ? '*Preencha corretamente' :`*${message}`;
  }
}

nome.addEventListener('focusout', e => campoValido(e.target))
email.addEventListener('focusout', e => campoValido(e.target))

const cancelError = (target) => {
  target.classList.remove('error');
  target.nextElementSibling.innerText = '';
}

nome.addEventListener('focusin', e => cancelError(e.target))
email.addEventListener('focusin', e => cancelError(e.target))

const btnLoading = (error = false) => {
  if(error){
    btnSubmit.disabled = false;
    btnSubmit.textContent = 'Enviar';
    return
  }
  btnSubmit.disabled = true;
  btnSubmit.textContent = 'carregando...'
}
form.addEventListener('submit',(e)=>{
  btnLoading();
  nome.value = sanitize(nome.value.trim().toLowerCase());
  email.value = sanitize(email.value.trim().toLowerCase());

  if(!nome.value){
    campoValido(nome, true)
    e.preventDefault();
    btnLoading(true);
    return
  }
})
