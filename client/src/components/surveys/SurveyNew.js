//SurveyNew shows surveyForm and SurveyFormReview

import React,{Component} from 'react';
import SurveyForm from './SurveyForm';
import  SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component{
    /*constructor (props){
        super(props);        this and line is same  in both of the cases
        this.state ={new:true};
    }*/    
    state ={SurveyFormReview:false};
    render(){
        return (
            <div>
                <SurveyForm/>
            </div>
        );
    }
}

export default SurveyNew;