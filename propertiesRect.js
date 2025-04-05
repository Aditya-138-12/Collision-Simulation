const canvas2 = document.getElementById('main_div_Rectangle');
const ctx2 = canvas2.getContext('2d');

class block{
    constructor(cordX, cordY,bgColour, size){
        this.cordX = cordX;
        this.cordY = cordY;
        this.size = size;
        this.vel = Math.random()*(10 - 0)+0;
        this.mass = Math.random()*(10 - 0)+0;
        this.bgCour = bgColour;
    }

    show2(ctx, rect){
        ctx.fillStyle = rect.bgCour;
        ctx.fillRect(rect.cordX, rect.cordY, rect.size, rect.size);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(rect.cordX, rect.cordY, rect.size, rect.size);
    }

    update2(){
        this.cordX += this.vel;
    }

    edges2(){
        if(this.cordX + this.size >= canvas2.width){
            this.vel *= -1;
        }else if(this.cordX <= 0){
            this.vel *= -1;
        }
    }

    collision2(other){
        if(this.cordX + this.size > other.cordX && this.cordX < other.cordX + other.size){
            console.log("Collision Detected");

            let overlap;    // This is a special case when overlap happens, while initializing
                            // For now this is hard coded.
            let m1 = this.mass;
            let m2 = other.mass;
            let twiceM1 = m1*2;
            let twiceM2 = m2*2;

            let v1 = this.vel;
            let v2 = other.vel;

            this.vel = (((m1 - m2)/(m1 + m2))*v1) + (((twiceM2)/(m1 + m2))*v2);
            other.vel = (((twiceM1)/(m1 + m2))*v1) + (((m2 - m1)/(m1 + m2))*v2);


        }
    }
}
