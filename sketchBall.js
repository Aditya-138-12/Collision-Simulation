let ballA;

window.addEventListener('load', function(){

    const canvas3 = document.getElementById('main_div_GravityBall');
    const ctx3 = canvas3.getContext('2d');

    const ballMass = document.getElementById('ballMass');
    const ballPosition = document.getElementById('ballPos');
    const ballVelocityY = document.getElementById('ballVelY');
    const ballVelocityX = document.getElementById('ballVelX');

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
        
        ballMass.textContent = Math.floor(ballA.mass*1000)/1000;
        ballPosition.textContent = Math.floor(ballA.position.y*1000)/1000;
        ballVelocityY.textContent = Math.floor(ballA.velocity.velY*1000)/1000;
        //ballVelocityX.textContent = Math.floor(ballA.velocity.velX*1000)/1000;

        ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
        draw3();
    }

    setup3();
    draw3();

});
