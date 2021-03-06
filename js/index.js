let textWrapper = document.querySelector('.title-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
let textWrapper2 = document.querySelector('.title-2');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
let textWrapper3 = document.querySelector('.title-3');
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let tl = gsap.timeline();

window.addEventListener('load', () => {
  tl.to('.title-1 .letter', { opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', stagger: '0.03' });
  tl.to('.title-2 .letter', { opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', stagger: '0.03' }, "-=0.7");
  tl.to('.title-3 .letter', { opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', stagger: '0.03' }, "-=0.7");
  tl.from('p', { opacity: 0, y: '-50px' }, "-=0.1");
  tl.to('.img', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%', ease: Back.easeOut.config(1.5), duration: 2}, "-=0.7")
});

var myAnimation = new hoverEffect({
            parent: document.querySelector('.img'),
            intensity: 0.3,
            image1: './assets/dye1.jpg',
            image2: './assets/dye2.jpg',
            displacementImage: './assets/dis.png'
});

let title = document.querySelector('.container');
let img = document.querySelector('.img');
let cursorCircle = document.querySelector('.cursor');

let cursor = {
  x: 0,
  y: 0
};

document.addEventListener('mousemove', (e) => {
  cursor.x = -e.clientX * 0.04;
  cursor.y = -e.clientY * 0.07;

  img.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`;
});
        
