import axios from 'axios'
import fakeResponse from '../utils/fakeResponse'

export default {

    //todo would need an authentication way on my back end to not actually send the creadentials in plain text?
    getUsers (params) {
        //return axios.get('/users/', params);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (params) {
                    resolve(fakeResponse.users)
                } else {
                    reject(new Error('Invalid parameters'))
                }
            }, 1000)
        })
    }
}
