import axios from "axios";
import { reset } from 'redux-form'
import uuidv4 from "uuid/v4";

import key from '../utils/api'

const API = `http://api.apixu.com/v1/current.json?key=${key}`

export const addCity = newCity => async (dispatch) => {
    const { data: { current, location } } = await axios.get(API, {
        params: {
            q: newCity
        }
    })
    dispatch(reset('cities'));
    return dispatch({
        type: "ADD_CITY",
        payload: {
            temp: current.temp_c,
            name: location.name,
            id: uuidv4()
        },
    });
};

export const deleteCity = id => async (dispatch) => {

    return dispatch({
        type: "DELETE_CITY",
        id,
    });
};

export default {
    addCity,
    deleteCity
}