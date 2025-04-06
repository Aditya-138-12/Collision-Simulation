let ballA;

window.addEventListener('load', function(){

    const canvas3 = document.getElementById('main_div_GravityBall');
    const ctx3 = canvas3.getContext('2d');

    function setup3(){
        ballA = new ball();
    }

    function draw3(){
        ballA.show3(ctx3, ballA);
        requestAnimationFrame(update3);
    }

    function update3(){
        ballA.gravity3();
        ballA.update3();
        ballA.edges3();

        ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
        draw3();
    }

    setup3();
    draw3();

});
