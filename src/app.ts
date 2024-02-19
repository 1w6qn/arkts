import {App} from '@deepkit/app';
import {Logger} from '@deepkit/logger';

const app = new App({});

app.command('test', (logger: Logger) => {
    logger.log('Hello World!');
});


app.run();