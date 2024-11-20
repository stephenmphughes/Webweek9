let songDiv = document.getElementById("song");
let revealButton = document.getElementById("revealButton");

// Initialize num of bottles
let bottles = 99;

// Function 
function revealNextLine() {
    if (bottles > 0) {
        let next = bottles - 1;

        // Verse
        if (bottles === 1) {
            songDiv.innerHTML += "<p>1 bottle of beer on the wall, 1 bottle of beer.</p>";
            songDiv.innerHTML += "<p>Take it down and pass it around, no more bottles of beer on the wall.</p>";
        } else {
            songDiv.innerHTML += "<p>" + bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.</p>";
            if (next === 1) {
                songDiv.innerHTML += "<p>Take one down and pass it around, 1 bottle of beer on the wall.</p>";
            } else {
                songDiv.innerHTML += "<p>Take one down and pass it around, " + next + " bottles of beer on the wall.</p>";
            }
        }
        bottles--;
// Last verse no more beers
    } else if (bottles === 0) {
        songDiv.innerHTML += "<p>No more bottles of beer on the wall, no more bottles of beer.</p>";
        songDiv.innerHTML += "<p>Go to the store and buy some more, 99 bottles of beer on the wall.</p>";
    }
}

// Event listener to the button
revealButton.addEventListener("click", revealNextLine);
