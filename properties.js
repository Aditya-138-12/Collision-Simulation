class atom{
    constructor(raduis, bgColour, strokeColour){
        this.position = this.createPositionVector();
        this.radius = raduis;
        this.bgColour = bgColour;
        this.strokeColour = strokeColour;
    }

    // Creates Position vector
    createPositionVector(){
        this.x = (Math.random() * 500);
        this.y = (Math.random() * 500);
        if(this.x <= 40 || this.x >= 460 || this.y <= 40 || this.y >= 460){
            this.x = (Math.random() * 500) + 40;
            this.y = (Math.random() * 500) + 40;
        }
        if(this.x <= 25 || this.x >= 475 || this.y <= 25 || this.y >= 475){
            this.x = (Math.random() * 475) + 25;
            this.y = (Math.random() * 475) + 25;
        }
    }

    show(ctx, atom){
        ctx.beginPath();
        ctx.arc(atom.x, atom.y, atom.radius, 0, Math.PI*2);
        ctx.fillStyle = this.bgColour;
        ctx.fill();
        ctx.strokeStyle = this.strokeColour;
        ctx.strokeWidth = 2;
        ctx.stroke();
        ctx.imageSmoothingEnabled = true;
    }
}