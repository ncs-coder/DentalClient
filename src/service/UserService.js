import axios from "axios";
import { API_BASE_URL, POLL_LIST_SIZE, ACCESS_TOKEN } from '../constants';

class UserService {
    static login(data) {
        const url = API_BASE_URL + "/auth/signin";
        const config = {
            method: "Post",
             data: data
        };
        return axios(url,config);
       // axios.default.withCredentials = true;
        // axios(url, config)
        //     .then(response => {
        //         //console.log(response);
        //         onSuccess(response)
        //     })
        //     .catch(err => onError(err));
    }

}

export default UserService;