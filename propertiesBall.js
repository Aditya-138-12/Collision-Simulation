const canvas3 = document.getElementById('main_div_GravityBall');
const ctx3 = canvas3.getContext('2d');

class ball{
    constructor(){
        this.position = this.createPositionVector3();
        this.velocity = this.createVelocityVector3();
        this.mass = 5;    // between 10 and 0
        this.radius = 15;
        this.res = 0.5;
        this.friction = 0.99;
        this.gravity = 0.15;
    }

    createPositionVector3(){
        let x = 250;
        let y = 50;
        return {x, y};
    }

    createVelocityVector3(){
        let velX = 1;
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
        this.velocity.velY += this.gravity;
    }

    update3(){
        this.position.x += this.velocity.velX;
        this.position.y += this.velocity.velY;
    }

    stop(){
        this.velocity.velY = 0;
        this.position.y = canvas3.height - this.radius; // Ensure it stays at rest

    }

    edges3(){
        if(this.position.y + this.radius > canvas3.height){
            let ke = 0.5*this.mass*this.velocity.velY*this.velocity.velY;
            console.log("KE of Ball: ", ke);
            console.log("The Balls' speed: ", this.velocity.velY);
            if (this.velocity.velY < 2.5) {
                this.velocity.velY = 0;
                this.gravity = 0;
                this.position.y = canvas3.height - this.radius; // Lock to ground
                console.log("The ball's vel: ", this.velocity.velY);
            }
            this.position.y = canvas3.height - this.radius;
            let vA = -1*this.res*this.velocity.velY;
            this.velocity.velY = vA;
            this.velocity.velY *= this.friction;
            this.velocity.velX *= 0.2;
        }else if(this.position.x + this.radius > canvas3.width){
            this.velocity.velX *= -1;
            //this.velocity.velX *= this.friction;
        }else if(this.position.x - this.radius < 0){
            this.velocity.velX *= -1;
            //this.velocity.velX *= this.friction;
        }
    }
}
