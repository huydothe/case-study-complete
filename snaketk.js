let unit=40;//unit la 1 dv di chuyen or toa do
let snake_color='white'


class Background{
    constructor(x,y,width,height,color) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.color=color;
        this.canvas=document.getElementById('mycanvas');
        this.ctx=this.canvas.getContext('2d');
    }
    draw_background(){
        this.ctx.beginPath();
        this.ctx.fillRect(this.x,this.y,this.width,this.height);
        this.ctx.fillStyle=this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}

class Vector{
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
}

class Snake {
    constructor(x, y,body) {
        this.x = x;
        this.y = y;
        this.body = [
            new Vector(unit * 9, unit * 3),
            new Vector(unit * 8, unit * 3),
            new Vector(unit * 7, unit * 3),
            new Vector(unit * 6, unit * 3),
            new Vector(unit * 5, unit * 3),
            new Vector(unit * 4, unit * 3),
        ];

        this.canvas = document.getElementById('mycanvas');
        this.ctx = this.canvas.getContext('2d');
        this.speed = new Vector(1, 0);
    }

    draw_snake() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.body[0].x, this.body[0].y, unit, unit);
        this.ctx.fillStyle = snake_color;
        for (let i = 1; i < this.body.length; i++) {
            this.ctx.fillRect(this.body[i].x, this.body[i].y, unit, unit);
        }
    }

    move() {

        snake.clear_snake();
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;

        }
        this.body[0].x += (this.speed.x * unit);
        this.body[0].y += (this.speed.y * unit);

        if(this.body[0].x<0){
            this.body[0].x=background.width-unit
        }
        if(this.body[0].x+unit>background.width){
            this.body[0].x=0;
        }
        if(this.body[0].y<0){
            this.body[0].y=background.height-unit
        }
        if(this.body[0].y+unit>background.height){
            this.body[0].y=0
        }
        snake.draw_snake()
    }

    clear_snake() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.body[0].x, this.body[0].y, unit, unit);
        this.ctx.fillStyle = 'black';
        for (let i = 1; i < this.body.length; i++) {
            this.ctx.fillRect(this.body[i].x, this.body[i].y, unit, unit);
        }
    }

    check_eat(food){
        return food.x === this.body[0].x && food.y === this.body[0].y;

    }
    check_lose(){
        for(let i=1; i<this.body.length; i++){
            if(this.body[0].x === this.body[i].x && this.body[0].y === this.body[i].y){
                alert('Thua' + ' and Your Score is ' + count + ' diem');
            }
        }
    }

    grow(){
        let part=new Vector(
            this.body[this.body.length-1].x + unit,
            this.body[this.body.length-1].y + unit,
        )
        this.body.push(part);
    };

}
class Food {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.canvas = document.getElementById('mycanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw_food() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.x, this.y, unit, unit);
        this.ctx.closePath()
    }

    getramdom() {
        let random = Math.floor(Math.random() * 800)
        random = random - (random % unit);
        return random;
    }

    spawn_food() {
        this.x = this.getramdom();
        this.y = this.getramdom();
    }

    clear_food() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, unit, unit)
    }
}





