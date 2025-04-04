let atomA;
let atomB;

window.onload = function(){
    const canvas = document.getElementById('main_div_Particles');
    const ctx = canvas.getContext("2d");

    function setup(){
        atomA = new atom();
        atomB = new atom();
    }
    
    function draw(){
        atomA.show(ctx, atomA, 25, 'grey', 'black');
        atomB.show(ctx, atomB, 40, 'grey', 'black');
    }

    setup();
    draw();
}
