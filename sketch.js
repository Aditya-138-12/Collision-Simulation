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
    }

    setup();
    draw();
}
