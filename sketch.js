let atomA;
let atomB;

window.onload = function(){
    const canvas = document.getElementById('main_div_Particles');
    const ctx = canvas.getContext("2d");

    const atomAPosX = document.getElementById('atomAPosX');
    const atomAPosY = document.getElementById('atomAPosY');

    const atomAVelX = document.getElementById('atomAVelX');
    const atomAVelY = document.getElementById('atomAVelY');

    const atomBPosX = document.getElementById('atomBPosX');
    const atomBPosY = document.getElementById('atomBPosY');

    const atomBVelX = document.getElementById('atomBVelX');
    const atomBVelY = document.getElementById('atomBVelY');

    function setup(){
        atomA = new atom(25, 'grey', 'black');
        atomB = new atom(40, 'grey', 'black');
    }
    
    function draw(){
        atomA.show(ctx, atomA);
        atomB.show(ctx, atomB);
        requestAnimationFrame(update);
    }

    function update(){
        // console.log("atomA vel: ", atomA.velocity.velX);
        // console.log("atomA vel: ", atomA.velocity.velY);
        // console.log("atomB vel: ", atomB.velocity.velX);
        // console.log("atomB vel: ", atomB.velocity.velY);
        // console.log("atomA Position: ", atomA.position.x);
        // console.log("atomA position: ", atomA.position.y);
        atomA.update();
        atomB.update();
        atomA.edges();
        atomB.edges();
        atomA.collision(atomB);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw();
        atomAPosX.textContent = Math.floor(atomA.position.x);
        atomAPosY.textContent = Math.floor(atomA.position.y);

        atomAVelX.textContent = Math.floor(atomA.velocity.velX);
        atomAVelY.textContent = Math.floor(atomA.velocity.velY);

        atomBPosX.textContent = Math.floor(atomB.position.x);
        atomBPosY.textContent = Math.floor(atomB.position.y);

        atomBVelX.textContent = Math.floor(atomB.velocity.velX);
        atomBVelY.textContent = Math.floor(atomB.velocity.velY);
    }

    setup();
    draw();
}
