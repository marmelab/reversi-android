import {
    create,
} from '../../../src/reversi/player/Player';

import {
    TYPE_BLACK,
} from '../../../src/reversi/cell/Cell';

describe('Player', () => {
    it('create should return valid player', () => {
        expect(create('john', TYPE_BLACK)).toEqual({
            name: 'john',
            cellType: TYPE_BLACK,
        });
    });
});
