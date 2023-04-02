import './Calculator.css'
import React from 'react'

class Calculator extends React.Component{
    render(){
        return (
            <div className='calculator-div'>
                <div id="display">
                    <div className='display-calculation'>1/2+3</div>
                    <div className='display-current'>0</div>
                </div>
                <div className='keypad'>
                    <div className='operators'>
                        <div id="clear">C</div>
                        <div id="divide">/</div>
                        <div id="multiply">*</div>
                        <div id="subtract">-</div>
                        <div id="add">+</div>
                        <div id="equals">=</div>
                    </div>
                    <div className='numbers'>
                        <div id="nine">9</div>
                        <div id="eight">8</div>
                        <div id="seven">7</div>
                        <div id="six">6</div>
                        <div id="five">5</div>
                        <div id="four">4</div>
                        <div id="three">3</div>
                        <div id="two">2</div>
                        <div id="one">1</div>
                        <div id="zero">0</div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Calculator;