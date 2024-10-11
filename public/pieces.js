

class Piece {
    constructor(name, color, current_position, image){
        this.name = name;
        this.color = color;
        this.position = current_position;
        this.image = image;
    }
    deconstructPosition(input_position){
        return [input_position.split()];
    }

    changePosition(newPos) {
        this.position = newPos
    }
}

