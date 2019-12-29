//SurveyNew shows surveyForm and SurveyFormReview

import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import  SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component{
    /*constructor (props){
        super(props);        this and line below  is same   
        this.state ={new:true};
    }*/    
    state ={showFormReview:false};
    renderContent(){
    if (this.state.showFormReview){
        return <SurveyFormReview
            onCancel ={()=>this.setState({showFormReview:false})}
        />;
        }
    return <SurveyForm onSurveySubmit={()=> this.setState({showFormReview: true})}/>;
    }

    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form:'surveyForm'
})( SurveyNew);
// to clear the data when we dont want, we are going one block above the paradagim

// By default wont store it 