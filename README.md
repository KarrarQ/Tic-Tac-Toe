# Rivalry Tic-Tac-Toe

[Turing's Tic-Tac-Toe Specs](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html)

Tic-Tac-Toe is the final project for Turing's Mod 1 Front-End Engineering students. With this last project we combine all of the lessons from the first five weeks to create a tangible and interactive web page to showcase the knowledge we've learned, as well as indulging the more creative sides of our minds.

If you're new to the world of Tic-Tac-Toe, do not fear. The rules for Tic-Tac-Toe are simple and ageless: you and another player (in this case, another friend or rival!) will choose a side, Ronaldo or Messi. Your ultimate goal is to win the game by achieving a 3-token line either horizontally, vertically, or diagonally. Your page will display the winner or a draw, and then after a short period of time the board will reset so that you may face off once more. The side bar that corresponds with your chosen token will keep track of your wins, and all you need to play is an open broswer tab! (I recommend Chrome Web Broswer.)

## Creator Karrar Qasim
[GitHub](https://github.com/KarrarQ)

[LinkedIn](https://www.linkedin.com/in/karrar-qasim-b6307024b/)

#### Deploy Link
[Try the website here!](https://karrarq.github.io/Tic-Tac-Toe/)

## Set-up for your Local Machine

If you have access to this repository (which is currently private at this time), here are the steps to access the web page from your local machine:

1. Clone the repository to your local machine
2. In the local directory, input `open index.html` into your command line

## Technologies Used

1. HTML
2. CSS
3. JavaScript

## Code Architecture 

_player.js_ contains the player class and it's methods where the player instance information is kept: name, token, and winsCount and an `increaseWins` method to increment the player wins. This file also includes methods to locally store and retrieve player wins across page loads.

_game.js_ contains the game class and it's methods that control the data model of the project - turn count/player turn, tracking board data (token placement), checking for win and draw conditions, and reseting the board for a new game. This file updates the data model __only__.

_main.js_ contains all of the DOM-related functions that dictate the behavior that the user sees on the page - like the win counts being updated in the player side bars (and those win counts persisting across page loads), the turn counter indicating who is next, the board itself and the tokens placed in their spots, and the winner and draw displays when a game is over. I also added a Clear Wins button that clears the localStorage and updates the DOM player counters. __No__ data model changes happen in this file. 

## Future Features

1. Add Dropdown for Different Player Tokens

2. Reset Button

## Challenges & Celebrations

#### Challenges 
My biggest challenge (out of the many) was connecting my data model in `game.js` to the DOM represented in `main.js`. Having to think of both of them separately and then finding the conecting dots was a difficult nut to crack, there were many iterations of the `handleBoardClick` and `renderBoard` functions especially, and even more time spent on the `displayAnnouncement`function when I realized that some of my data model logic was off. A constant back and forth between both files in order to achieve a beautiful and also functioning game.

#### Celebrations
Unsurprising to anyone who knows me, I enjoy getting to flex the creative side of my brain and I had a lot of fun playing with the CSS to design a thematic board.
