import Logger from '@nullplatform/log';
import Config from 'config';

const config = Config.get('server.log');
const logger = new Logger(config);

export default logger;
