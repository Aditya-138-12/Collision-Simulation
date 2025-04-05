let rectA;
let rectB;

window.addEventListener('load', function(){
    const canvas2 = document.getElementById('main_div_Rectangle');
    const ctx2 = canvas2.getContext("2d");

    const blockAMass = document.getElementById('blockAMass');
    const blockBMass = document.getElementById('blockBMass');

    const blockAPos = document.getElementById('blockAPos');
    const blockAVel = document.getElementById('blockAVel');

    const blockBPos = document.getElementById('blockBPos');
    const blockBVel = document.getElementById('blockBVel');

    function setup2(){
        rectA = new block(100, 99, 'blue', 50);
        rectB = new block(300, 99, 'red', 35);
    }

    function draw2(){
        rectA.show2(ctx2, rectA);
        rectB.show2(ctx2, rectB);
        requestAnimationFrame(update2);
    }

    function update2(){
        rectA.update2();
        rectB.update2();
        rectA.edges2();
        rectB.edges2();

        blockAMass.textContent = Math.floor(rectA.mass*1000)/1000;
        blockBMass.textContent = Math.floor(rectB.mass*1000)/1000;

        blockAPos.textContent = Math.floor(rectA.cordX * 1000) / 1000;
        blockAVel.textContent = Math.floor(rectA.vel * 1000) / 1000;

        blockBPos.textContent = Math.floor(rectB.cordX * 1000) / 1000;
        blockBVel.textContent = Math.floor(rectB.vel * 1000) / 1000;

        rectA.collision2(rectB);
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        draw2();
    }

    setup2();
    draw2();
});
