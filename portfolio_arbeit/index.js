const Texts = [
    '</div>', 'new Date()', 'helloWord', ':hover', 'gsap.to()', 'target.value',
    '<section>', 'setTimeout()', 'hef="#', 'Math.floor()', 'await fetsch',
    'DOM', '<span>', 'else if', 'opacity',  'forEach()', 
    '=>', 'def()', '', 'flex-flow', 'while loop', 'Swal.fire', 'z-index'
];

var tagCloud = TagCloud('.Sphere', Texts, {
    radius: 300,
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 135,
    keep: true
});

var color = '#EE66A6';
document.querySelector('.Sphere').style.color = color;




