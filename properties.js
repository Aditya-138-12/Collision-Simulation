const canvas = document.getElementById('main_div_Particles');
const ctx = canvas.getContext("2d");

class atom{
    constructor(raduis, bgColour, strokeColour){
        this.position = this.createPositionVector();
        this.radius = raduis;
        this.bgColour = bgColour;
        this.strokeColour = strokeColour;
        this.velocity = this.create2DVelocityVector();
        this.accleration = this.ccreate2DAcclerationVector();
        this.mass = Math.random()*(4 - 2)+2;
    }

    addVelocity(vector){
        this.position.x += vector.velX;
        this.position.y += vector.velY;
    }

    addAccleration(vector){
        this.velocity.velX += vector.accX;
        this.velocity.velY += vector.accY;
    }

    // Creates 2D Accleration Vector
    ccreate2DAcclerationVector(){
        let accX = Math.random()*(6 - 2)+2; // Accleration is between 2-6
        let accY = Math.random()*(6 - 2)+2;
        return {accX, accY}
    }

    // Creates 2D Velocity vector
    create2DVelocityVector(){
        let velX = Math.random()*(6 - 2)+2; // Velocity is between 2-6
        let velY = Math.random()*(6 - 2)+2;
        return {velX, velY}
    }

    // Creates 2D Position vector
    createPositionVector(){
        let x = (Math.random() * 500);
        let y = (Math.random() * 500);
        if(x <= 40 || x >= 460 || y <= 40 || y >= 460){
            x = (Math.random() * 500) + 40;
            y = (Math.random() * 500) + 40;
        }
        if(x <= 25 || x >= 475 || y <= 25 || y >= 475){
            x = (Math.random() * 475) + 25;
            y = (Math.random() * 475) + 25;
        }
        return {x, y};
    }

    // Updates the position of the atoms
    update(){
        this.addVelocity(this.velocity);
        // this.addAccleration(this.accleration);
    }

    // Method to simulate bouncy edges
    edges(){
        if(this.position.x > canvas.width - this.radius){
            this.position.x = canvas.width - this.radius;
            this.velocity.velX *= -1;
        }else if(this.position.x < this.radius){
            this.position.x = this.radius;
            this.velocity.velX *= -1;
        }

        if(this.position.y > canvas.height - this.radius){
            this.position.y = canvas.height - this.radius;
            this.velocity.velY *= -1;
        }else if(this.position.y < this.radius){
            this.position.y = this.radius;
            this.velocity.velY *= -1;
        }
    }

    // Calculates distance between 2 atoms, Euclidean Distance: Sqrt((x2-x1)**2 + (y2-y1)**2)
    distanceBetweenTwoAtoms(other){
        let val1 = (this.position.x - other.position.x)**2;
        let val2 = (this.position.y - other.position.y)**2;
        let distance = Math.sqrt(val1 + val2);
        return distance;
    }

    // This method will detect the collision
    collision(other){
        let distance = this.distanceBetweenTwoAtoms(other);
        if(distance < this.radius + other.radius){
            console.log("Collision Detected!");

            let m1 = this.mass;
        let m2 = other.mass;
        let sumMass = m1 + m2;
        let twiceM2 = m2*2;

        let posX1 = this.position.x;
        let posY1 = this.position.y;

        let posX2 = other.position.x;
        let posY2 = other.position.y;

        let vx1 = this.velocity.velX;
        let vy1 = this.velocity.velY;

        let vx2 = other.velocity.velX;
        let vy2 = other.velocity.velY;

        let newVX = vx1 - vx2;
        let newVY = vy1 - vy2;

        let newPosX = posX1 - posX2;
        let newPosY = posY1 - posY2;

        let dotProduct = (newVX * newPosX) + (newVY * newPosY);

        let mag = Math.sqrt((newPosX**2) + (newPosY**2));
        let magSquare = mag**2;

        let num = twiceM2*dotProduct;
        let denom = sumMass*magSquare;
        let ans = num/denom;
        newPosX *= ans;
        newPosY *= ans;

        this.velocity.velX -= newPosX;
        this.velocity.velY -= newPosY;

        // Dot product of 2 vectors.

        }
    }

    // Method to show/create the atoms.
    show(ctx, atom){
        ctx.beginPath();
        ctx.arc(atom.position.x, atom.position.y, atom.radius, 0, Math.PI*2);
        ctx.fillStyle = this.bgColour;
        ctx.fill();
        ctx.strokeStyle = this.strokeColour;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.imageSmoothingEnabled = true;
    }
}