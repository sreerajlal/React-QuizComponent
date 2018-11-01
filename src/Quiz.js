import React, { Component } from 'react';
let QuizeData = require('./quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props)
        this.state = { quiz_position:1}
    }
    render(){
        return(
            <div>
                <div className="QuizQuestion">
                    {QuizeData.quiz_questions[0].instruction_text}
                </div>
            </div>
        )
    }
}
export default Quiz;
