const grid2 = document.querySelector('.grid2')
const scoreDisplay = document.querySelector('#score')
const blockWidth = 50
const blockHeight = 20
const ballDiameter = 15
const boardWidth = 280
const boardHeight = 300
let timerId 
let xDirection = 2
let yDirection = 2
let score = 0

let mySound = new Audio('assets/music/score-sound2.wav')
let mySound2 = new Audio('assets/music/game-winner.wav')
let mySound3 = new Audio('assets/music/game-loser.wav')

const playerStart = [115, 5]
let currentPosition = playerStart

const ballStart = [135, 30]
let ballCurrentPosition = ballStart

//creates block individual
class Block2 {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

// All blocks
const blocks = [
    new Block2(20,270),
    new Block2(130,270),
    //new Block(230,270),
    //new Block(340,270),
    //new Block(450,270),
    new Block2(20,240),
    new Block2(130,240),
    //new Block(230,240),
    //new Block(340,240),
    //new Block(450,240),
    new Block2(20,210),
    new Block2(130,210),
    //new Block(230,210),
    //new Block(340,210),
    //new Block(450,210),
]

//creates blocks
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block2 = document.createElement('div')
        block2.classList.add('block2')
        block2.style.left = blocks[i].bottomLeft[0] + 'px'
        block2.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid2.appendChild(block2)
    }
}

addBlocks()

// add player
const player2 = document.createElement('div')
player2.classList.add('player2')
drawPlayer()
grid2.appendChild(player2)

//draw the player
function drawPlayer() {
    player2.style.left = currentPosition[0] + 'px'
    player2.style.bottom = currentPosition[1] + 'px'
}

//draw the ball
function drawBall () {
    ball2.style.left = ballCurrentPosition[0] + 'px'
    ball2.style.bottom = ballCurrentPosition[1] + 'px'
}


//move player
function movePlayer(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10
                drawPlayer()
            }
            break;
        case 'ArrowRight':
            if (currentPosition[0] < boardWidth - blockWidth) {
                currentPosition[0] +=10
                drawPlayer()
            }
            break;
    }
}

document.addEventListener('keydown', movePlayer)

// add ball
const ball2 = document.createElement('div')
ball2.classList.add('ball2')
drawBall()
grid2.appendChild(ball2)

// move the ball
function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
} 

timerId = setInterval(moveBall, 20) 

// check for collisions
function checkForCollisions() {
    // check for block collisions
    for (let i = 0; i < blocks.length; i++) {
        if (
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
            ((ballCurrentPosition[1] + ballDiameter ) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
        ) {
            const allBlocks = Array.from(document.querySelectorAll('.block2'))
            mySound.play()
            allBlocks[i].classList.remove('block2')
            blocks.splice(i, 1)
            changeDirection()
            score++
            scoreDisplay.innerHTML = score

            //check for win
            if (blocks.length === 0) {
                scoreDisplay.innerHTML = 'Winner!'
                mySound2.play()
                clearInterval(timerId)
                document.removeEventListener('keydown', movePlayer)
                setTimeout(reloadGame, 3000)
            }

        }
    }

    // check for player collisions
    if (
        (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
        (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight)
    ) {
        changeDirection()
    }

    // check for wall collisions
    if (
        ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
        ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
        ballCurrentPosition[0] <= 0 
        ) {
        changeDirection()
    }



    // check for game over
    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId)
        scoreDisplay.innerHTML = 'Loser!'
        mySound3.play()
        document.removeEventListener('keydown', movePlayer)
    }

}

// change direction on collision
function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2
        return 
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
    }
}

 // Reloads game on button click
 document.getElementById("block-start").addEventListener("click", function() {
    document.location.reload()
 });

  // moves left on mobile
  document.getElementById("left-button").addEventListener("click", function() {
    if (currentPosition[0] > 0) {
        currentPosition[0] -= 25
        drawPlayer() }
    })

  // moves right on mobile
  document.getElementById("right-button").addEventListener("click", function() {
    if (currentPosition[0] < boardWidth - blockWidth) {
        currentPosition[0] +=25
        drawPlayer()
    }
    })
