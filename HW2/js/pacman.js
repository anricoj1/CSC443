$(document).ready(function() {
    const initBoard = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
        [1, 8, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 8, 1], 
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 6, 1, 1, 6, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 6, 1, 1, 6, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [2, 6, 6, 6, 6, 6, 0, 6, 6, 6, 1, 0, 1, 0, 1, 1, 1, 1, 6, 6, 6, 0, 6, 6, 6, 6, 6, 2], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
        [1, 8, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 8, 1], 
        [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 'P', 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1], 
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1], 
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1], 
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] 
    ];
    
    let board = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
        [1, 8, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 8, 1], 
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 6, 1, 1, 6, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 6, 1, 1, 6, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [2, 6, 6, 6, 6, 6, 0, 6, 6, 6, 1, 0, 1, 1, 1, 0, 1, 1, 6, 6, 6, 0, 6, 6, 6, 6, 6, 2], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 0, 1, 1, 1, 1, 1, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1], 
        [1, 8, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 8, 1], 
        [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 'P', 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1], 
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1], 
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1], 
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1], 
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1], 
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  
    ];
    
    
    const spaces = document.querySelectorAll('.container div');
    const gridW = 27;
    const gridH = 30;
    const scr = document.querySelector('.scr');
    const liveCount = document.querySelector('.lives')
    const styleThis = document.head.appendChild(document.createElement('style'));
    const gameOn = document.querySelector('.gameOn');
    const gameOver = document.querySelector('.gameover')

    let score = 0;
    let reset = true;
    let game = true;
    let lives = 3;
    let lvl = 1;
    let lvlUp = false;
    let pacman;

    const rowCol = () => {
        let row = 0;
        let col = 0;
        for (s of spaces) {
            if (col < gridW) {
                s.dataset.row = row;
                s.dataset.col = col;
                col++;
            } else {
                s.dataset.row = row;
                s.dataset.col = col;
                row++;
                col = 0;
            }
        }
    }

    const newBoard = board => {
        for (var i = 0; i < board.length; i++) {
            for(var j = 0; j < board[i].length; j++) {
                let thisTile = document.querySelector(`div[data-row='${i}'][data-col='${j}']`);
                switch (board[i][j]) {
                    case 0: // dot
                        thisTile.className = 'dot';
                        break;
                    case 1: // wall
                        thisTile.className = 'wall';
                        break;
                    case 2: // side ports
                        thisTile.className = 'portal';
                        break;
                    case 6: // blank space
                        thisTile.className = 'space';
                        break;
                    case 8: // large dor
                        thisTile.className = 'lg-dot';
                        break;
                    case 'P': // pacman
                        thisTile.className = 'release pacman';
                        break;
                }
            }
        }
    }

    const resetPos = () => {
        reset = true;

        cancelAnimationFrame(pacman.animation);
        pacman.tile.className = 'space';
        pacman.tile.style.transform = 'none';
        pacman.numberEaten = 1;
        pacman.i = 0;
        pacman.direction = 'right';
        pacman.nextDirection = undefined;
        pacman.stopped = true;
        pacman.test = true;
        pacman.turnTest = false;
        pacman.x = 23;
        pacman.y = 14;
        pacman.tile = document.querySelector(`div[data-row='${pacman.x}'][data-col='${pacman.y}']`);

        if (lvlUp) {
            lvl++;
            lives++;
        } else {
            lives--;
        }
        liveCount.innerHTML = lives;
        if (lives === 0) {
            game = false;
            for (var i = 0; i < board.length; i++) {
                board[i] = initBoard[i].slice();
            }
            gameOn.style.diplay = 'none';
            gameover.style.diplay = 'flex';
        }
        if (game) {
            if (lvlUp) {
                lvlUp = false;
                for (var i = 0; i < board.length; i++) {
                    board[i] = initBoard[i].slice();
                }
            }
            newBoard(board);
        }
    }

    rowCol();
    newBoard(initBoard);
    liveCount.innerHTML = lives;


    class Movement {
        constructor(name, tile, x, y, speed) {
            this.name = name;
            this.tile = tile;
            this.x = x;
            this.y = y;
            this.i = 0;
            this.speed = speed
        }
        
        testTile() {
            switch (this.direction) {
                case 'right':
                    if (this.y + 1 <= gridW && board[this.x][this.y + 1] !== 1) {
                        this.y += 1;
                        this.test = true;
                    } else {
                        if (this.tile.classList.contains('portal')) {
                            if (this.tile.dataset.col === "27") {
                                this.y = 0;
                            } else {
                                this.y = 27;
                            }
                            this.test = true;
                            return;
                        }
                        this.test = false;
                    }
                    break;
                case 'left':
                    if (this.y - 1 >= 0 && board[this.x][this.y - 1] !== 1) {
                        this.y -= 1;
                        this.test = true;
                    } else {
                        if (this.tile.classList.contains('portal')) {
                            if (this.tile.dataset.col === "27") {
                                this.y = 0;
                            } else {
                                this.y = 27;
                            }
                            this.test = true;
                            return;
                        }
                        this.test = false;
                    }
                    break;
                case 'down':
                    if (this.x + 1 <= gridH && board[this.x + 1][this.y] !== 1) {
                        this.x += 1;
                        this.test = true;
                    } else {
                        this.test = false;
                    }
                    break;
                case 'up':
                    if (this.x - 1 >= 0 && board[this.x - 1][this.y] !== 1) {
                        this.x -= 1;
                        this.test = true;
                    } else {
                        this.test = false;
                    }
                    break;
            }
        }

        animations() {
            if (this.i < 100) {
                if (this.i === 0) {
                    if (this.name === 'pacman') {
                        if (this.nextDirection !== this.direction) {
                            this.testTile();
                            if (this.turnTest) {
                                this.turn();
                                this.direction = this.nextDirection;
                            }
                        }
                        this.testTile();
                        if (!this.test) {
                            this.tile.style.transform = 'none';
                            this.stopped = true;
                            return;
                        }
                    }
                }
                switch (this.direction) {
                    case 'right':
                        this.tile.style.transform = `translateX(${this.i}%)`;
                        break;
                    case 'left':
                        this.tile.style.transform = `translateX(-${this.i}%)`;
                        break;
                    case 'down':
                        this.tile.style.transform = `translateY(${this.i}%)`;
                        break;
                    case 'up':
                        this.tile.style.transform = `translateY(-${this.i}%)`;
                        break;
                }
                this.i += this.speed;
                cancelAnimationFrame(this.animation);
                this.animation = requestAnimationFrame(() => this
                .animations());
            } else {
                this.i = 0;
                if (this.test) {
                    cancelAnimationFrame(this.animation);
                    this.move();
                }
            }
        }
    }

    class Pacman extends Movement {
        constructor(name, tile, x, y, speed) {
            super(name, tile, x, y, speed);
            this.i = 0;
            this.direction ='right';
            this.nextDirection = undefined;
            this.stopped = false;
            this.test = true;
            this.turnTest = false;
            this.animation;
            this.numberEaten = 1;
            this.turnAround;
        }

        turn() {
            this.stopped = false;
            this.tile.classList.remove(`pacman-${this.direction}`);
            this.tile.classList.add(`pacman-${this.nextDirection}`);
            this.direction = this.nextDirection;
        }

        move() {
            this.stopped = false;
            this.tile.style.transform = 'none';
            this.tile.classList.remove(this.name);
            this.tile.classList.remove(`pacman-${this.direction}`);
            this.tile = document.querySelector(`div[data-row='${this.x}'][data-col='${this.y}']`);
            this.tile.classList.add(this.name);
            this.tile.classList.add(`pacman-${this.direction}`)

            if (this.tile.classList.contains('dot')) {
                this.tile.classList.remove('dot');
                board[this.x][this.y] = 6;
            }
            let tmpScore = 200 * this.numberEaten;
            styleThis.innerHTML = `.pacman::after {content:'${tmpScore}';}`;
            setTimeout(() => {
                styleThis.innerHTML = ` `
            }, 10000);
            score += tmpScore;
            this.numEaten ++;

            if (this.tile.classList.contains('lg-dot')) {
                this.tile.classList.remove('lg-dot');
                this.tile.classList.remove('dot');

                score += 50;
                if (score >= lvl * 2610) {
                    if (!document.querySelector('.dot')) {
                        lvlUp = true;
                        resetPos();
                        return;
                    }
                }
                board[this.x][this.y] = 0;
                scr.innerHTML = score;
            }
            this.animation = requestAnimationFrame(() => this.animations());
        }

        testDirection() {
            switch (this.nextDirection) {
                case 'right':
                    if (this.y + 1 <= gridW && board[this.x][this.y + 1] !== 1) {
                        this.turnTest = true;
                    } else {
                        this.turnTest = false;
                    }
                    break;
                case 'left':
                    if (this.y - 1 >= 0 && board[this.x][this.y - 1] !== 1) {
                        this.turnTest = true;
                    } else {
                        this.turnTest = false;
                    }
                    break;
                case 'down':
                    if (this.x + 1 <= gridH && board[this.x + 1][this.y] !== 1) {
                        this.turnTest = true;
                    } else {
                        this.turnTest = false;
                    }
                    break;
                case 'up':
                    if (this.x = 1 >= 0 && board[this.x = 1][this.y] !== 1) {
                        this.turnTest = true;
                    } else {
                        this.turnTest = false;
                    }
                    break;
            }
        }
    }

    function initPacman() {
        pacman = new Pacman('pacman', document.querySelector('.pacman'),23,14,10);
    }

    function thisMove() {
        reset = false;
        pacman.move();
    }

    function keyHandler(e) {
        e.preventDefault();
        if (game) {
            if (reset) {
                thisMove();
            } else {
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                    let input = e.key.substring(5).toLowerCase();
                    if (!pacman.stopped) {
                        pacman.nextDirection = input;
                    } else if (input !== pacman.direction && pacman.stopped) {
                        pacman.nextDirection = input;
                        pacman.turn();
                        pacman.animations();
                    }
                }
            }
        } else {
            if (e.keyCode === 32) {
                newBoard(board);
                lvl = 1;
                score = 0;
                lives = 3;
                game = true;
                scr.innerHTML = score;
                liveCount.innerHTML = lives;
                gameOn.style.diplay = 'flex';
                gameover.style.display = 'none';
            }
        }
    }

    document.addEventListener('keydown', keyHandler);
    initPacman();
});
