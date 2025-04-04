let atomA;
let atomB;

window.onload = function(){
    const canvas = document.getElementById('main_div_Particles');
    const ctx = canvas.getContext("2d");

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
    }

    setup();
    draw();
}
