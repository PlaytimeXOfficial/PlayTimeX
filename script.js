// Function to load the game into the iframe
function loadGame(game) {
    // Get the game display section
    const gameDisplay = document.getElementById('game-display');
    
    // Clear any existing iframe
    gameDisplay.innerHTML = "";
  
    // Create the iframe element
    const iframe = document.createElement("iframe");
  
    // Set the iframe source based on the selected game
    if (game === 'littleAlchemy2') {
      iframe.src = "https://littlealchemy2.com";
    } else if (game === 'tetris') {
      iframe.src = "https://tetris.com/play-tetris";
    } else if (game === 'googleDino') {
      iframe.src = "https://chrome-dino.com";
    } else if (game === 'pacman') {
      iframe.src = "https://www.google.com/search?q=pacman";
    } else if (game === 'pong') {
      iframe.src = "https://ponggame.org";
    } else if (game === '2048') {
      iframe.src = "https://play2048.co";
    }
    
    // Set the iframe attributes
    iframe.width = "800";
    iframe.height = "600";
    iframe.frameBorder = "0";
  
    // Append the iframe to the game display section
    gameDisplay.appendChild(iframe);
    
    // Display the iframe
    iframe.style.display = "block";
  }
  
