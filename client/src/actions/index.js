import axios from 'axios';
import { FETCH_USER, FETCH_SURVEY} from './types';


export const fetchUser = ()=>  async dispatch=>{
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload:res.data});
    };

    
export const handleToken = (token) =>async dispatch => {       // new action creater 
    const res = await axios.post('/api/stripe', token);

    dispatch ({type:FETCH_USER, payload:res.data });
};



export const submitSurvey =(values, history) =>async dispatch =>{   // new action creater
    //return {type:'submit_survey'};
    const res = await axios.post('/api/surveys', values);
    history.push('/surveys');

    dispatch ({type:FETCH_USER,payload :res.data});
};

export const fetchSurvey = () =>async dispatch =>{
    const res = await axios.get('/api/surveys')

    dispatch ({type:FETCH_SURVEYS, payload: res.data})

    //payload wil be an array  that contains all the surveys that our current user has made 
    //after making action we create reducer
};

