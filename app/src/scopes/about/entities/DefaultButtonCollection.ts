import Button from './Button';
import ButtonCollection from './ButtonCollection';
import { injectable } from 'inversify.config';

@injectable()
export default class DefaultButtonCollection implements ButtonCollection {
    [id: string]: Button;

    constructor() {
        this["now"] = new Button("now", "Now");
        this["exception"] = new Button("exception", "Exception");
    }

}