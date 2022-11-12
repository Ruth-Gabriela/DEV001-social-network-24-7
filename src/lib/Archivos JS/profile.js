import { signOut } from 'firebase/auth';
import { auth } from './firebase.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main';

const rootDiv = document.getElementById('root');

export const profile = () => {
  rootDiv.innerHTML = ' ';

  const homeDiv = document.createElement('div');
  const container = document.createElement('section');
  const containerRegister = document.createElement('div');
  const containerImg = document.createElement('section');
  const imgwelcome = document.createElement('img');
  const imgTop = document.createElement('img');
  const imgBottom = document.createElement('img');
  const fondoImagen = document.createElement('div');
  const title = document.createElement('h2');
  const titleImg = document.createElement('img');
  const avatar = document.createElement('img');
  const homeDiv2 = document.createElement('div');
  const p = document.createElement('p');
  const homeDiv3 = document.createElement('div');
  const p2 = document.createElement('p');
  const homeDiv4 = document.createElement('div');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');
  const p6 = document.createElement('p');
  const homeDiv5 = document.createElement('div');
  const btnHome = document.createElement('button');
  const btnEdit = document.createElement('button');
  const btnCerrar = document.createElement('button');
  homeDiv.className = 'container';
  container.className = 'container-im-and-register';
  containerImg.className = 'container-img';
  titleImg.src = './lib/img/flowers1.png';
  titleImg.className = 'img-title';
  title.textContent = 'Mi Perfil';
  title.className = 'title-register';
  imgwelcome.src = './lib/img/img-women.png';
  imgwelcome.className = 'img-welcome';
  imgTop.src = './lib/img/collage-3.png';
  imgTop.className = 'img-top-2';
  imgBottom.src = './lib/img/collage-5.png';
  imgBottom.className = 'img-bottom-2';
  containerRegister.className = 'container-register';
  p.textContent = 'Usuario';
  p.className = 'text-subtitle2';
  avatar.src = './lib/img/Ellipse9.png';
  avatar.className = 'avatar-class';
  fondoImagen.className = 'avatar-class';
  p2.textContent = 'Descripción';
  p2.className = 'text-subtitle2';
  p3.textContent = 'Email';
  p3.className = 'text-subtitle2';
  p4.textContent = 'Silvia Falcón';
  p4.className = 'text-subtitle3';
  p5.textContent = 'Estudiante de Desarrollo Web.';
  p5.className = 'text-subtitle4';
  p6.textContent = 'silvi0924@hotmail.com';
  p6.className = 'text-subtitle3';
  btnHome.textContent = 'Ir al Home';
  btnHome.className = 'buttonRegister';
  btnEdit.textContent = 'Editar Perfil';
  btnEdit.className = 'buttonEditProfile';
  btnCerrar.textContent = 'Cerrar Sesión';
  homeDiv2.className = 'container-div';
  homeDiv3.className = 'container-div';
  homeDiv4.className = 'container-div';
  homeDiv5.className = 'container-div';

  homeDiv.appendChild(container);
  container.appendChild(containerImg);
  container.appendChild(containerRegister);
  homeDiv.appendChild(imgTop);
  homeDiv.appendChild(imgBottom);
  containerImg.appendChild(imgwelcome);
  containerRegister.appendChild(titleImg);
  containerRegister.appendChild(title);
  fondoImagen.appendChild(avatar);
  containerRegister.appendChild(fondoImagen);
  homeDiv2.appendChild(p);
  homeDiv2.appendChild(p4);
  containerRegister.appendChild(homeDiv2);
  homeDiv3.appendChild(p2);
  homeDiv3.appendChild(p5);
  containerRegister.appendChild(homeDiv3);
  homeDiv4.appendChild(p3);
  homeDiv4.appendChild(p6);
  containerRegister.appendChild(homeDiv4);
  homeDiv5.appendChild(btnHome);
  homeDiv5.appendChild(btnEdit);
  homeDiv5.appendChild(btnCerrar);
  containerRegister.appendChild(homeDiv5);

  btnCerrar.addEventListener('click', async () => {
    await signOut(auth);
    console.log('user signed out');
    onNavigate('/');
  });

  btnHome.addEventListener('click', () => onNavigate('/landingPage'));

  return homeDiv;
};
