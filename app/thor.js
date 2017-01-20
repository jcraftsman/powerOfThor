const NORTH = 'N';
const SOUTH = 'S';
const EAST = 'E';
const WEST = 'W';
const SOUTH_WEST = 'SW';
const SOUTH_EAST = 'SE';
const NORTH_EAST = 'NE';


function nextDirection(position_thor,
                       position_light) {
    var is_light_to_west = position_thor.x > position_light.x;
    var is_light_to_south = position_thor.y < position_light.y;
    var is_light_to_east = position_thor.x < position_light.x;
    var is_light_to_north = position_thor.y > position_light.y;

    var direction = SOUTH;

    if (is_light_to_south && is_light_to_west) {
        direction = SOUTH_WEST;
    } else if (is_light_to_south && is_light_to_east) {
        direction = SOUTH_EAST;
    } else if (is_light_to_north && is_light_to_east) {
        direction = NORTH_EAST;
    } else if (is_light_to_east) {
        direction = EAST;
    } else if (is_light_to_west) {
        direction = WEST;
    } else if (is_light_to_north) {
        direction = NORTH;
    }

    return direction;
}

function nextPosition(position_thor, direction) {
    var move = {
        'N': {x: 0, y: -1},
        'S': {x: 0, y: 1},
        'W': {x: -1, y: 0},
        'E': {x: 1, y: 0},
        'SE': {x: 1, y: 1},
        'SW': {x: -1, y: 1},
        'NE': {x: 1, y: -1}
    };

    var next_position_thor = {
        x: position_thor.x + move[direction].x,
        y: position_thor.y + move[direction].y
    };

    return next_position_thor;
}

exports.nextDirection = nextDirection;
exports.nextPosition = nextPosition;