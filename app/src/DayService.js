import axios from 'axios';

const URL = 'http://localhost:5000/api/drinks/';

class DayService {
    // GET Drinks
    static getDays() {
        return axios.get(URL);
    }

    // CREATE Drinks
    static addDay(day) {
        return axios.post(URL, day);
    }
    // DELETE Drinks
    static deleteDay(id) {
        return axios.delete(`${URL}${id}`)
    }
}
export default DayService;