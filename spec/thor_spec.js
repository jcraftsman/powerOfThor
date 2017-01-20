var thor = require('../app/thor');

const NORTH = 'N';
const SOUTH = 'S';
const EAST = 'E';
const WEST = 'W';
const SOUTH_WEST = 'SW';
const SOUTH_EAST = 'SE';
const NORTH_EAST = 'NE';
const NORTH_WEST = 'NW';


describe('thor', function () {

    describe('nextDirection', function () {

        it('thor go south when the light is to the south', function () {
            var position_thor = {x: 0, y: 0};
            var position_light = {x: 0, y: 1};

            var direction_south = thor.nextDirection(
                position_thor,
                position_light);

            expect(direction_south).toBe(SOUTH);
        });

        it('thor go north when the light is to the north', function () {
            var position_thor = {x: 0, y: 1};
            var position_light = {x: 0, y: 0};

            var direction_north = thor.nextDirection(
                position_thor,
                position_light);

            expect(direction_north).toBe(NORTH);
        });
        it('thor go east when the light is to the east', function () {
            var position_thor = {x: 0, y: 0};
            var position_light = {x: 1, y: 0};

            var direction_north = thor.nextDirection(
                position_thor,
                position_light);
            expect(direction_north).toBe(EAST);
        });

        it('thor go west when the light is to the west', function () {
            var position_thor = {x: 1, y: 0};
            var position_light = {x: 0, y: 0};

            var direction_west = thor.nextDirection(
                position_thor,
                position_light);

            expect(direction_west).toBe(WEST);
        });

        it('thor go south_west when the light is to the south_west', function () {
            var position_thor = {x: 1, y: 1};
            var position_light = {x: 0, y: 2};

            var direction_south_west = thor.nextDirection(
                position_thor,
                position_light);

            expect(direction_south_west).toBe(SOUTH_WEST);
        });

        it('thor go south_east when the light is to the south_east', function () {
            var position_thor = {x: 1, y: 1};
            var position_light = {x: 2, y: 2};

            var direction_south_east = thor.nextDirection(
                position_thor,
                position_light);

            expect(direction_south_east).toBe(SOUTH_EAST);
        });

        it('thor go north_east when the light is to the north_east', function () {
            var position_thor = {x: 1, y: 1};
            var position_light = {x: 2, y: 0};

            var direction_north_east = thor.nextDirection(
                position_thor,
                position_light);

            expect(direction_north_east).toBe(NORTH_EAST);
        });
        it('thor go north_west when the light is to the north_west', function () {
            var position_thor = {x: 1, y: 1};
            var position_light = {x: 0, y: 0};

            var direction_north_east = thor.nextDirection(
                position_thor,
                position_light);

            expect(direction_north_east).toBe(NORTH_WEST);
        });

    });

    describe('nextPosition', function () {
        describe('moving south', function () {
            it('should move thor y from 0 to 1', function () {
                var position_thor = {x: 0, y: 0};
                var position_thor_moved_south = {x: 0, y: 1};

                var next_position_thor = thor.nextPosition(
                    position_thor,
                    SOUTH);

                expect(next_position_thor).toEqual(position_thor_moved_south);
            });

            it('should move thor y from 1 to 2', function () {
                var position_thor = {x: 0, y: 1};
                var position_thor_moved_south = {x: 0, y: 2};

                var next_position_thor = thor.nextPosition(
                    position_thor,
                    SOUTH);

                expect(next_position_thor).toEqual(position_thor_moved_south);
            });

        });
        describe('moving north', function () {
            it('should move thor y from 1 to 0', function () {
                var position_thor = {x: 0, y: 1};
                var position_thor_moved_north = {x: 0, y: 0};

                var next_position_thor = thor.nextPosition(
                    position_thor,
                    NORTH);

                expect(next_position_thor).toEqual(position_thor_moved_north);
            });

            it('should move thor y from 2 to 1', function () {
                var position_thor = {x: 0, y: 2};
                var position_thor_moved_north = {x: 0, y: 1};

                var next_position_thor = thor.nextPosition(
                    position_thor,
                    NORTH);

                expect(next_position_thor).toEqual(position_thor_moved_north);
            });
        });
        describe('moving west', function () {
            it('should move thor x from 1 to 0', function () {
                var position_thor = {x: 1, y: 0};
                var position_thor_moved_west = {x: 0, y: 0};

                var next_position_thor = thor.nextPosition(
                    position_thor,
                    WEST);

                expect(next_position_thor).toEqual(position_thor_moved_west);
            });
        });
        describe('moving east', function () {
            it('should move thor x from 0 to 1', function () {
                var position_thor = {x: 0, y: 0};
                var position_thor_moved_east = {x: 1, y: 0};

                var next_position_thor = thor.nextPosition(
                    position_thor,
                    EAST);

                expect(next_position_thor).toEqual(position_thor_moved_east);
            });
        });
        describe('moving south east', function () {
            it('should move thor x and y from 0 to 1', function () {
                var position_thor = {x: 0, y: 0};
                var position_thor_moved_south_east = {x: 1, y: 1};

                var next_position_thor = thor.nextPosition(
                    position_thor,
                    SOUTH_EAST);

                expect(next_position_thor).toEqual(position_thor_moved_south_east);
            });
        });
        describe('moving south west', function () {
            it('should move thor x from 1 to 0 and y form 0 to 1', function () {
                var position_thor = {x: 1, y: 0};
                var position_thor_moved_south_west = {x: 0, y: 1};

                var next_position_thor = thor.nextPosition(
                    position_thor,
                    SOUTH_WEST);

                expect(next_position_thor).toEqual(position_thor_moved_south_west);
            });
        });
        describe('moving north east', function () {
            it('should move thor x from 1 to 2 and y from 1 to 0', function () {
                var position_thor = {x: 1, y: 1};
                var position_thor_moved_north_east = {x: 2, y: 0};

                var next_position_thor = thor.nextPosition(
                    position_thor,
                    NORTH_EAST);

                expect(next_position_thor).toEqual(position_thor_moved_north_east);
            });
        });
        describe('moving north west', function () {
            it('should move thor x from 1 to 0 and y from 1 to 0', function () {
                var position_thor = {x: 1, y: 1};
                var position_thor_moved_north_west = {x: 0, y: 0};

                var next_position_thor = thor.nextPosition(
                    position_thor,
                    NORTH_WEST);

                expect(next_position_thor).toEqual(position_thor_moved_north_west);
            });
        });
    });
});