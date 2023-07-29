'use strict';



let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);

        // no input
        if (!guess) {
            document.querySelector('.message').textContent =
                ' No number inputed :'
            // winning

        } else if (guess === secretnumber) {
            document.querySelector('.message').textContent =
                ' correct Number :) ';

            document.querySelector('.number').textContent = secretnumber;

            document.querySelector('body').style.
                backgroundColor = '#60b347';

            document.querySelector('.number').style.width =
                '30rem';

            if (score > highscore) {
                highscore = score;

                document.querySelector('.highscore').textContent =
                    highscore;
            }

            // guess is high

        } else if (guess > secretnumber) {
            if (score > 1) {
                document.querySelector('.message').textContent =
                    'TOO HIGH !';
                score--;
                document.querySelector('.score').textContent =
                    score;
            } else {
                document.querySelector('.message').textContent =
                    'you lost the game :'
                document.querySelector('.score').textContent =
                    0;
            }

            // guess is low
        } else if (guess < secretnumber) {

            if (score > 1) {
                document.querySelector('.message').textContent =
                    'TOO HIGH !';
                score--;
                document.querySelector('.score').textContent =
                    score;
            } else {
                document.querySelector('.message').textContent =
                    'you lost the game :'
                document.querySelector('.score').textContent =
                    0;
            }
            document.querySelector('.message').textContent =
                'TOO LOW !';
            score--;
            document.querySelector('.score').textContent =
                score;
        }
    });

document.querySelector('.again').addEventListener
    ('click', function () {
        score = 20;
        secretnumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector('.message').textContent =
            ' strat guessing :'
        document.querySelector('.score').textContent =
            score;
        document.querySelector('.number').textContent =
            '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor =
            '#222';
        document.querySelector('.number').style.width =
            '15rem';
    });
