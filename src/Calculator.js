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
                    <div className='row w-100'>
                        <div className='col key' id="clear">C</div>
                        <div className='col-3 key operator' id="divide">/</div>
                    </div>
                    <div className='row w-100'>
                        <div className='col key' id="seven">7</div>
                        <div className='col key' id="eight">8</div>
                        <div className='col key' id="nine">9</div>
                        <div className='col-3 key operator' id="multiply">x</div>
                    </div>
                    <div className='row w-100'>
                        <div className='col key' id="four">4</div>
                        <div className='col key' id="five">5</div>
                        <div className='col key' id="six">6</div>
                        <div className='col key operator' id="subtract">-</div>
                    </div>
                    <div className='row w-100'>
                        <div className='col key' id="one">1</div>
                        <div className='col key' id="two">2</div>
                        <div className='col key' id="three">3</div>
                        <div className='col key operator' id="add">+</div>
                    </div>
                    <div className='row w-100'>
                        <div className='col key' id="negate">+/-</div>
                        <div className='col key' id="zero">0</div>
                        <div className='col key' id="decimal">.</div>
                        <div className='col key operator' id="equals">=</div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Calculator;