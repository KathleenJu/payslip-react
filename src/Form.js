import React, {Component} from 'react';
import {Input, Button, Card} from '@myob/myob-widgets';
import { Redirect, Link } from 'react-router-dom';
import ButtonRow from '@myob/myob-widgets/lib/components/ButtonRow/ButtonRow';

class Form extends Component {
    state = {
        userInput: {
            firstName: "",
            lastName: "",
            annualSalary: 0,
            superRate: 0,
            paymentStart: "",
            paymentEnd: ""
        }
    };

    handleOnChange = (event) => {
        this.setState({ [this.state.userInput[event.target.name]] : event.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
    this.setState(() => { return <Redirect to="/payslip" push={true}/>});
        
        // const result = calculate(this.state.userInput);
        // this.setState({ calcResult: result });
    };

    render() {
        return (
            <div>
                <Card onSubmit={(e) => {this.handleSubmit(e)}}
                    header={<h3 className="text-left">Welcome to the payslip generator!</h3>}
                    body={
                        <div>
                            <Input name="firstName" label="Please input your name:" onChange={(event) => this.handleOnChange(event)}/>
                            <Input name="lastName" label="Please input your surname:" onChange={(event) => this.handleOnChange(event)}/>
                            <Input name="annualSalary" label="Please input your annual salary:" onChange={(event) => this.handleOnChange(event)}/>
                            <Input name="superRate" label="Please input your super rate:" onChange={(event) => this.handleOnChange(event)}/>
                            <Input name="paymentStart" label="Please input your payment start date:" onChange={(event) => this.handleOnChange(event)}/>
                            <Input name="paymentEnd" label="Please input your payment end date:" onChange={(event) => this.handleOnChange(event)}/>
                        </div>
                    }
                    footer={
                        <ButtonRow>
                            <Button type="secondary">Cancel</Button>
                            
                            <Button id="get-payslip-button" type="primary" onClick={(e) => this.handleSubmit(e)}>Get Payslip</Button>
                        </ButtonRow>
                    }
                />
            </div>
        );
    }
}

export default Form;