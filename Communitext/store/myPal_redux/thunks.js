import axios from 'axios';
import { _getCategories } from './actions';


export const getCategories = () => {
    return async (dispatch) => {
        try{
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
            dispatch(_getCategories(data))
        }
        catch (err){
            console.log(err)
        }
    }
}
