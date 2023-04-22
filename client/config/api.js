const { IP_ADDRESS, NODE_ENV } = require('../env.js');
const API_ROOT = NODE_ENV === 'production' ? '/api' : `http://${IP_ADDRESS}:5000/api`;

const routes = {
    test: `${API_ROOT}/test`,
}

export default routes; 
