import miya from '../assets/depoimentos/miya.webp';
import farofa from '../assets/depoimentos/farofa.webp';
import bela from '../assets/depoimentos/bela.webp';
import fred from '../assets/depoimentos/fred.webp';
import frederico from '../assets/depoimentos/frederico.webp';
import paris from '../assets/depoimentos/paris.webp';
import brisa from '../assets/depoimentos/brisa.webp';
import dina_lulu from '../assets/depoimentos/dina_lulu.webp';
import toddy from '../assets/depoimentos/toddy.webp';

const fotos = {
  miya,
  farofa,
  bela,
  fred,
  frederico,
  paris,
  brisa,
  dina_lulu,
  toddy,
}

const depoimentos = document.querySelectorAll('.depoimento-container');

Array.from(depoimentos,(r)=>{
  const aluno = r.dataset.aluno;
  const imgTag = r.querySelector('img');
  imgTag.alt = aluno;
  imgTag.src = fotos[aluno];
})