(function(){
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
        atomA = new atom(25, 'blue', 'black', 'A');
        atomB = new atom(40, 'red', 'black', 'B');
    }
    
    function draw(){
        atomA.show(ctx, atomA);
        atomB.show(ctx, atomB);
        // Calculating Kinetic Energy
        let speedA = Math.sqrt((atomA.velocity.velX**2) + (atomA.velocity.velY**2));
        let speedB = Math.sqrt((atomB.velocity.velX**2) + (atomB.velocity.velY**2));
        let kinA = 0.5*atomA.mass*speedA*speedA;
        let kinB = 0.5*atomB.mass*speedB*speedB;
        console.log("Kinetic Energy: ", kinA + kinB);   // Kinetic energy is preserving.
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
        atomAPosX.textContent = Math.floor(atomA.position.x * 1000) / 1000;
        atomAPosY.textContent = Math.floor(atomA.position.y * 1000) / 1000;

        atomAVelX.textContent = Math.floor(atomA.velocity.velX * 1000) / 1000;
        atomAVelY.textContent = Math.floor(atomA.velocity.velY * 1000) / 1000;

        atomBPosX.textContent = Math.floor(atomB.position.x * 1000) / 1000;
        atomBPosY.textContent = Math.floor(atomB.position.y * 1000) / 1000;

        atomBVelX.textContent = Math.floor(atomB.velocity.velX * 1000) / 1000;
        atomBVelY.textContent = Math.floor(atomB.velocity.velY * 1000) / 1000;
    }

    setup();
    draw();
}
})();
