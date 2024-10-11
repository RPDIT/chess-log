var board = document.getElementById("chessboard");


function tester(cords) {
    console.log(`You clicked: ${cords}`);
};

function add_piece(cords) {
    const white_a_pawn = new Piece("p","white","a2","&#x2659;");
    const position = document.querySelector(`#${cords}`);
    console.log(position.innerHTML);
    if (position.innerHTML == ""){ 
        position.innerHTML = white_a_pawn.image;
    } else {
        position.innerHTML = "";
    }
};
console.log(board);