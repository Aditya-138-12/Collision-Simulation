let rectA;
let rectB;

window.addEventListener('load', function(){
    const canvas2 = document.getElementById('main_div_Rectangle');
    const ctx2 = canvas2.getContext("2d");

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
        rectA.collision2(rectB);
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        draw2();
    }

    setup2();
    draw2();
});
