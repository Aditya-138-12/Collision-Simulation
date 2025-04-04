class atom{
    constructor(){
        this.position = this.createPositionVector();
    }

    // Creates Position vector
    createPositionVector(){
        this.x = (Math.random() * 460) + 40;
        this.y = Math.random() * 460;
    }

    show(ctx, position, radius, bgColour, strokeColour){
        ctx.beginPath();
        ctx.arc(position.x, position.y, radius, 0, Math.PI*2);
        ctx.fillStyle = bgColour;
        ctx.fill();
        ctx.strokeStyle = strokeColour;
        ctx.strokeWidth = 2;
        ctx.stroke();
        ctx.imageSmoothingEnabled = true;
    }
}