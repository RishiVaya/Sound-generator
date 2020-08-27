// add event listener waits for a certain action by the user to follow a comand...in the next case the
// command in 'Click' which waits for the user to click a pad
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    // loads all the sounds in the sound folder to the music site
    const pads = document.querySelectorAll(".pads div");
    // loads all the pads 
    const visual = document.querySelector(".visual");
    const colors = [
        "rgb(255, 81, 0)",
        "rgb(238, 255, 0)",
        "rgb(60, 226, 19)",
        "rgb(61, 133, 240)",
        "rgb(224, 68, 203)",
        "rgb(90, 203, 231)"
    ];

    // lets get going with the sound here
    // for each > repeats the code for all the pads in order
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0; /* resets the time for any sound to 0 which enables multiple clicks without completion of the specific sound */
            sounds[index].play();

            createBubbles(index);
        });
    });

    // Create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble); /* bubble element is created in the visual div */
        bubble.style.backgroundColor = colors[index]; /* index from the pad function to get the specific color */
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        });
    };
});

