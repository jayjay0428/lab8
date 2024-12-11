$(document).ready(function () {
    // Event listener for the dice roll button
    $('#roll-dice').on('click', function () {
        const dice = $('.dice');

        // Start rolling animation
        dice.css('animation', 'shake 0.6s');

        // Wait for animation to complete, then display a random number
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            dice.text(randomNumber);
            dice.css('animation', 'none'); // Remove animation for future rolls
        }, 600);
    });
});

// CSS animation keyframes (added dynamically)
$('<style>')
    .prop('type', 'text/css')
    .html(`
        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
    `)
    .appendTo('head');
