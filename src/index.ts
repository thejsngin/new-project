
import rootGameObject from './rootGameObject.jsnobj';
import {game} from '@thejsngin/jsngin';

const gameInstance = await game(rootGameObject, {
    domElement: document.body
});