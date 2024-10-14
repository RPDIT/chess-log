var board = document.getElementById("chessboard");
const white_a_pawn = new Piece("p", "white", "a2", "&#x2659;");
const white_rook = new Piece('r', "white", "a1", "&#x265C;");

const default_board = [{}]


function tester(cords) {
    console.log(`You clicked: ${cords}`);
};

function add_piece(cords, piece) {
    const position = document.querySelector(`#${cords}`);
    console.log(position.innerHTML);
    if (position.innerHTML == ""){ 
        position.innerHTML = piece.image;
    } else {
        position.innerHTML = "";
    }
};
console.log(board);