import './Calculator.css'
import React from 'react'

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.onClick=this.onClick.bind(this);
    }

    onClick(e){
        e.preventDefault();
        let current = document.getElementById("display");
        let calculation = document.getElementById("display-calculation");
        if(e.target.innerText==='C')
        {
            current.innerText = 0;
            calculation.innerText = '0';
        }
        else if(e.target.innerText==='=')
        {
            this.calculate(current , calculation);
        }
        else if(e.target.className.includes('operator')){
            current.innerText = e.target.innerText;
            calculation.innerText += e.target.innerText;
        }
        else{
            if(current.innerText === '0'){
                calculation.innerText = current.innerText = "";
            }
            const regex = /[/+*-]/g;
            if(current.innerText.match(regex)){
                current.innerText = "";
            }
            if(e.target.innerText === '.'){
                if(current.innerText.includes('.'))return;
            }
            current.innerText += e.target.innerText;
            calculation.innerText += e.target.innerText;
        }
    }

    calculate(current, calculation){
        const regex = /(?<=[-+*/()])|(?=[-+*/()])/g;
        const valuesArr = calculation.innerText.split(regex);
        let last = ""; let sum = 0; let operator ="";let negate = false;
        valuesArr.forEach(element => {

            switch(element){
                case '/':
                    negate = false;
                    operator = '/';
                    break;
                case '*':
                    negate = false;
                    operator = '*';
                    break;
                case '+':
                    negate = false;
                    operator = '+';
                    break;
                case '-':
                    if(operator !== ''){
                        last = "";
                        negate = true;
                        break;
                    }
                    operator = '-';
                    break;
                default:
                    if(sum === 0 )sum = element.includes('.') ?
                     Number.parseFloat(element) : Number.parseInt(element);
                     else if(last === ""){
                        last = negate ?  `-${element}` : element;
                        negate = false;
                    }
                     
                break;
            }

            if(operator !== "" && last !== ""){
                sum = this.doMath(sum, operator, last);
                last = "";operator="";
            }
            
            
        });
        current.innerText = sum;
        
    }

    doMath(sum, operator , last){
        const lastNum = last.includes('.') ? Number.parseFloat(last) : Number.parseInt(last);
        switch(operator){
            case '/':
                sum /= lastNum;
                break;
            case '*':
                sum *= lastNum;
                break;
            case '+':
                sum += lastNum;
                break;
            case '-':
                sum -= lastNum;
                break;
         }
         return sum;
    }

    render(){
        return (
            <div className='calculator-div'>
                <div id="main-display">
                    <div className='display-calculation' id="display-calculation">0</div>
                    <div className='display-current' id='display'>0</div>
                </div>
                <div className='keypad'>
                    <div className='row w-100'>
                        <div className='col key' onClick={this.onClick} id="clear">C</div>
                        <div className='col-3 key operator' onClick={this.onClick} id="divide">/</div>
                    </div>
                    <div className='row w-100'>
                        <div className='col key' onClick={this.onClick} id="seven">7</div>
                        <div className='col key' onClick={this.onClick} id="eight">8</div>
                        <div className='col key' onClick={this.onClick} id="nine">9</div>
                        <div className='col-3 key operator' onClick={this.onClick} id="multiply">*</div>
                    </div>
                    <div className='row w-100'>
                        <div className='col key' onClick={this.onClick} id="four">4</div>
                        <div className='col key' onClick={this.onClick} id="five">5</div>
                        <div className='col key' onClick={this.onClick} id="six">6</div>
                        <div className='col key operator' onClick={this.onClick} id="subtract">-</div>
                    </div>
                    <div className='row w-100'>
                        <div className='col key' onClick={this.onClick} id="one">1</div>
                        <div className='col key' onClick={this.onClick} id="two">2</div>
                        <div className='col key' onClick={this.onClick} id="three">3</div>
                        <div className='col key operator' onClick={this.onClick} id="add">+</div>
                    </div>
                    <div className='row w-100'>
                        <div className='col key' id=""></div>
                        <div className='col key' onClick={this.onClick} id="zero">0</div>
                        <div className='col key' onClick={this.onClick} id="decimal">.</div>
                        <div className='col key operator' onClick={this.onClick} id="equals">=</div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Calculator;