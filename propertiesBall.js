const canvas3 = document.getElementById('main_div_GravityBall');
const ctx3 = canvas3.getContext('2d');

class ball{
    constructor(){
        this.position = this.createPositionVector3();
        this.velocity = this.createVelocityVector3();
        this.mass = Math.floor()*(10 - 0)+0;    // between 10 and 0
        this.radius = 15;
    }

    createPositionVector3(){
        let x = 250;
        let y = 50;
        return {x, y};
    }

    createVelocityVector3(){
        let velX = 0;
        let velY = 0;
        return {velX, velY};
    }

    show3(ctx, ball){
        ctx.beginPath();
        ctx.arc(ball.position.x, ball.position.y, ball.radius, 0, Math.PI*2);
        ctx.fillStyle = 'grey';
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }

    // Method to simulate gravity
    gravity3(){
        this.velocity.velY += 10;
    }

    update3(){
        this.position.y += this.velocity.velY;
    }

    edges3(){
        if(this.position.y >= this.radius + canvas3.width){
            this.position.y = canvas3.width - this.radius;
            //this.velocity.velY = -1*((this.mass - 1000)/(1000 + this.mass))*this.velocity.velY;
        }
    }
}
