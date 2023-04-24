const NODE_ENV = process.env.NODE_ENV;
const IP_ADDRESS = process.env.IP_ADDRESS;
const API_ROOT = NODE_ENV === 'production' ? '/api' : `http://${IP_ADDRESS}:5000/api`;

const routes = {
    test: `${API_ROOT}/test`,
    image: `${API_ROOT}/image`,
}

export default routes; 
