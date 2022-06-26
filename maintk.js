let background = new Background(0, 0, 800, 800, 'black')
background.draw_background();

let snake = new Snake();
snake.draw_snake();

let food = new Food();
food.draw_food()

let count=0;
let flag=true;

function spawn(food) {
    food.clear_food()
    food.spawn_food()
    food.draw_food();
}
spawn(food)

function play() {
    snake.move();
    if (snake.check_eat(food)) {
        snake.grow()
        count++;
        spawn(food);
    }
    document.getElementById('score').innerHTML=count;
    snake.check_lose();

}
setInterval(play,100)


window.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 37:
            if (snake.speed.x === 1) break
            snake.speed = new Vector(-1, 0)
            break;
        case 38:
            if (snake.speed.y === 1) break
            snake.speed = new Vector(0, -1)
            break;
        case 39:
            if (snake.speed.x === -1) break
            snake.speed = new Vector(1, 0)
            break;
        case 40:
            if (snake.speed.y === -1) break
            snake.speed = new Vector(0, 1)
            break;
    }
})


