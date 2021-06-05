var myAnimation = new hoverEffect({
            parent: document.querySelector('.img'),
            intensity: 0.4,
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
}

document.addEventListener('mousemove', (e) => {
  cursor.x = -e.clientX * 0.03;
  cursor.y = -e.clientY * 0.03;

  img.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`;
})
        
