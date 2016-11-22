import {
    watchPlaceCellAsync,
} from './Game';

export default function* () {
    yield [
        watchPlaceCellAsync(),
    ];
}
