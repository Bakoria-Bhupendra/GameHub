import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6062ffeb8cd24c5ba56393b9e93d626a'

    }
})