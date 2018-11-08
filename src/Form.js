import React, {Component} from 'react';
import {Input, Button, Card, DatePicker} from '@myob/myob-widgets';
import { Redirect, Link } from 'react-router-dom';
import ButtonRow from '@myob/myob-widgets/lib/components/ButtonRow/ButtonRow';
import Label from '@myob/myob-widgets/lib/components/Label/Label';
import Checkbox from '@myob/myob-widgets/lib/components/Checkbox/Checkbox';

class Form extends Component {
    state = {
        userInput: {
            firstName: "",
            lastName: "",
            annualSalary: 0,
            superRate: 0,
            paymentStart: "",
            paymentEnd: ""
        },
        exampleErrorFlag: false,
    };

    handleOnChange = (event) => {
        this.setState({ [this.state.userInput[event.target.name]] : event.target.value, exampleErrorFlag: this.checkValue(event)});
    };

    checkValue = (event) => {
        return event.target.type != typeof event.target.value ? true : false ;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/payslip');
    };

    render() {
        return (
            <div>
                <Card
                    header={<h3 className="text-left">Welcome to the payslip generator!</h3>}
                    body={
                        <div>
                            <Input name="firstName" placeholder="Jane" type="text" label="Please input your name:" onChange={(event) => this.handleOnChange(event)} errorMessage={this.state.exampleErrorFlag ? "Invalid Input" : null}/>
                            <Input name="lastName" placeholder="Doe" type="text" label="Please input your surname:" onChange={(event) => this.handleOnChange(event)} errorMessage={this.state.exampleErrorFlag ? "Invalid Input" : null}/>
                            <Input name="annualSalary" placeholder="$" type="number" label="Please input your annual salary:" onChange={(event) => this.handleOnChange(event)}/>
                            <Input name="superRate"  placeholder="%" type="number" label="Please input your super rate:" onChange={(event) => this.handleOnChange(event)}/>
                            <div>
                            <Label color="light-grey" size="small">Please input your payment start date:</Label>
                            <DatePicker name="paymentStart" onChange={(event) => this.handleOnChange(event)}/>
                            </div>
                            <div>
                            <Label color="light-grey" size="small">Please input your payment end date:</Label>
                            <DatePicker name="paymentEnd" onChange={(event) => this.handleOnChange(event)}/>
                            </div>
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