import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//captura las peticiones y las puede ejecutar sin necesidad de utilizar fetch
global.fetch = require('jest-fetch-mock');