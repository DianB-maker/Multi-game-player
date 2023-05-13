input.onButtonPressed(Button.A, function () {
    if (Start == 1) {
        Game_control.showImage(0)
        Game_ID = 1
    }
    if (sprite_move == 2) {
        sprite.change(LedSpriteProperty.Y, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    Start = 2
    if (Game_ID == 1) {
        sprite_move = 2
        sprite = game.createSprite(0, 2)
        game.setScore(0)
        for (let index = 0; index < 101; index++) {
            if (Stop == 1) {
                Random = randint(1, 5)
                if (Random == 1) {
                    Wall_1 = game.createSprite(4, 0)
                    Wall_2 = game.createSprite(4, 1)
                    Wall_3 = game.createSprite(4, 2)
                    Wall_4 = game.createSprite(4, 3)
                    for (let index = 0; index < 4; index++) {
                        basic.pause(1000)
                        Wall_1.change(LedSpriteProperty.X, -1)
                        Wall_2.change(LedSpriteProperty.X, -1)
                        Wall_3.change(LedSpriteProperty.X, -1)
                        Wall_4.change(LedSpriteProperty.X, -1)
                    }
                    Start = 2
                    Stop = 1
                }
                if (Random == 2) {
                    Wall_1 = game.createSprite(4, 0)
                    Wall_2 = game.createSprite(4, 1)
                    Wall_3 = game.createSprite(4, 2)
                    Wall_4 = game.createSprite(4, 4)
                    for (let index = 0; index < 4; index++) {
                        basic.pause(1000)
                        Wall_1.change(LedSpriteProperty.X, -1)
                        Wall_2.change(LedSpriteProperty.X, -1)
                        Wall_3.change(LedSpriteProperty.X, -1)
                        Wall_4.change(LedSpriteProperty.X, -1)
                    }
                    Start = 2
                    Stop = 1
                }
                if (Random == 3) {
                    Wall_1 = game.createSprite(4, 0)
                    Wall_2 = game.createSprite(4, 1)
                    Wall_3 = game.createSprite(4, 3)
                    Wall_4 = game.createSprite(4, 4)
                    for (let index = 0; index < 4; index++) {
                        basic.pause(1000)
                        Wall_1.change(LedSpriteProperty.X, -1)
                        Wall_2.change(LedSpriteProperty.X, -1)
                        Wall_3.change(LedSpriteProperty.X, -1)
                        Wall_4.change(LedSpriteProperty.X, -1)
                    }
                    Start = 2
                    Stop = 1
                }
                if (Random == 4) {
                    Wall_1 = game.createSprite(4, 0)
                    Wall_2 = game.createSprite(4, 2)
                    Wall_3 = game.createSprite(4, 3)
                    Wall_4 = game.createSprite(4, 4)
                    for (let index = 0; index < 4; index++) {
                        basic.pause(1000)
                        Wall_1.change(LedSpriteProperty.X, -1)
                        Wall_2.change(LedSpriteProperty.X, -1)
                        Wall_3.change(LedSpriteProperty.X, -1)
                        Wall_4.change(LedSpriteProperty.X, -1)
                    }
                    Start = 2
                    Stop = 1
                }
                if (Random == 5) {
                    Wall_1 = game.createSprite(4, 1)
                    Wall_2 = game.createSprite(4, 2)
                    Wall_3 = game.createSprite(4, 3)
                    Wall_4 = game.createSprite(4, 4)
                    for (let index = 0; index < 4; index++) {
                        basic.pause(1000)
                        Wall_1.change(LedSpriteProperty.X, -1)
                        Wall_2.change(LedSpriteProperty.X, -1)
                        Wall_3.change(LedSpriteProperty.X, -1)
                        Wall_4.change(LedSpriteProperty.X, -1)
                    }
                    Start = 2
                    Stop = 1
                }
            }
            if (Start == 2) {
                if (sprite.get(LedSpriteProperty.X) == Wall_1.get(LedSpriteProperty.X) && sprite.get(LedSpriteProperty.Y) == Wall_1.get(LedSpriteProperty.Y)) {
                    Stop = 2
                    game.gameOver()
                    control.reset()
                }
                if (sprite.get(LedSpriteProperty.X) == Wall_2.get(LedSpriteProperty.X) && sprite.get(LedSpriteProperty.Y) == Wall_2.get(LedSpriteProperty.Y)) {
                    Stop = 2
                    game.gameOver()
                    control.reset()
                }
                if (sprite.get(LedSpriteProperty.X) == Wall_3.get(LedSpriteProperty.X) && sprite.get(LedSpriteProperty.Y) == Wall_3.get(LedSpriteProperty.Y)) {
                    Stop = 2
                    game.gameOver()
                    control.reset()
                }
                if (sprite.get(LedSpriteProperty.X) == Wall_4.get(LedSpriteProperty.X) && sprite.get(LedSpriteProperty.Y) == Wall_4.get(LedSpriteProperty.Y)) {
                    Stop = 2
                    game.gameOver()
                    control.reset()
                }
                Stop = 3
            }
            if (Stop == 3) {
                Wall_1.delete()
                Wall_2.delete()
                Wall_3.delete()
                Wall_4.delete()
                game.addScore(1)
                Stop = 1
            }
        }
    }
    if (Game_ID == 2) {
        basic.showIcon(IconNames.Sad)
        basic.showString("Sorry. This game is not available yet! We will bring it to you when we get the chance.")
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Start == 1) {
        Game_control.showImage(5)
        Game_ID = 2
    }
    if (sprite_move == 2) {
        sprite.change(LedSpriteProperty.Y, 1)
    }
})
let Wall_4: game.LedSprite = null
let Wall_3: game.LedSprite = null
let Wall_2: game.LedSprite = null
let Wall_1: game.LedSprite = null
let Random = 0
let sprite: game.LedSprite = null
let Game_control: Image = null
let Start = 0
let Game_ID = 0
let Stop = 0
let sprite_move = 0
sprite_move = 1
Stop = 1
Game_ID = 1
Start = 1
Game_control = images.createBigImage(`
    . . . . # # . . . #
    . . . . # . . . . .
    # . . . . . . # . .
    . . . . # . . . . .
    . . . . # # . . . #
    `)
Game_control.showImage(0)
