import {
    create,
} from '../../../src/reversi/matrix/Matrix';

describe('Matrix', () => {
    it('create should return valid matrix', () => {
        expect(create(3, 2)).toEqual([
            [0, 0, 0],
            [0, 0, 0],
        ]);
    });
});
