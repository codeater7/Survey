//SurveyFormReview shows  users their form inputs for review

import _ from 'lodash';
import React from 'react';
import {connect } from 'react-redux';
import formFields from './formField';
import {withRouter} from 'react-router-dom'; // some components are inaccessible so we use this lib
import * as actions from '../../actions';

// onCancel is the prop we bring from another component
const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) =>{
    const reviewFields =_.map(formFields,field =>{
    // ES6 ma hamlai name ra label chaieeako 6 label bata so 
    // ({name, label }) garna milxa label so satta   ani field.name ko satta name matra lekhna sakinxa
        return ( 
            <div key ={field.name}>
                <label>{field.label}</label>
                <div> {formValues[field.name]}</div>
            </div>
        );

    });
    return( 
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className = 'yellow darken-3  white-txt btn-flat' onClick ={onCancel}> Back </button>

            
            <button onClick= {()=>submitSurvey(formValues, history)} className ='green btn-flat right white-txt'>Send Survey <i className ='material-icons right'>email</i></button>
            
            
        </div>
    );
    
//mathi Send Survey  button ma onclick we call action creater i.e submitSurvey, 
// with prop named as formValues (we can name ourself  in function mapStateToProps) but has to be sent as props to above component
//SubmitSurvey is action creater but instantly send na-huna ko lagi chai we use arrow function
// ani last ma submitSurvey chai prop ko form ma pass vako 6 so, we have to put it as prop in our existing component i.eSurveyFormReview

};
// it is called mapStateToProps, it is taking our redux state and then transferring into props and send them down into components
function mapStateToProps(state){
    
   
    return ({formValues:state.form.surveyForm.values})

    }


export default connect(mapStateToProps, actions) (withRouter(SurveyFormReview));  

// connect helper jun ma garna parnee ho tsma garnee  ani action creater 2nd parameter garera  pass garnee

/*           <div>
<div>
<label>Survey Title</label>
<div>{formValues.title}</div>
</div>

<div>
<label>Subject Line</label>
<div>{formValues.subject}</div>
</div>

<div>
<label>Email </label>
<div>{formValues.body}</div>
</div>

<div>
<label>Recipient List</label>
<div>{formValues.emails}</div>
</div>
</div> */

// formValues