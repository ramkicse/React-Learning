import React from 'react'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'
import 'react-dates/initialize';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            desc: props.expense?props.expense.desc:'',
            note: props.expense?props.expense.note:'',
            amount:props.expense?(props.expense.amount/100):'',
            createAt: props.expense?props.expense.desc:moment(),
            calendarFocused: false,
            error: ''
        }
    }



    onDescriptionhange = (e) => {
        const desc = e.target.value;
        this.setState(() => ({ desc }))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        this.setState(() => ({ amount }))

    }

    onDateChange = (createAt) => {
        if (createAt) {
            this.setState(() => ({ createAt }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {

        e.preventDefault()
        console.log(this.state)

        if (!this.state.desc || this.state.amount) {
            this.setState(() => ({
                error: "desc and amount is mandatory"
            }))
        } else {
            this.setState(() => ({ error: '' }))
        }
        this.props.onSubmit({
            desc: this.state.desc,
            amount: parseFloat(this.state.amount),
            createAt: this.state.createAt.valueOf()
        })

    }
    render() {
        return (
            < div className="pd-10" >
                <form onSubmit={this.onSubmit}>
                    Expence Description :
                <input type="text" placeholder="expence Description" autoFocus
                        value={this.state.desc}
                        onChange={this.onDescriptionhange} />
                    <br />

                Expence Note
                <textarea placeholder="expence Note" autoFocus
                        value={this.state.note}
                        onChange={this.onNoteChange} />
                    <br />

                Expence amount
                <input type="number" placeholder="expence Amount" autoFocus
                        value={this.state.amount}
                        onChange={this.onAmountChange} />
                    <br />

                Expence Create Date:
                <SingleDatePicker date={this.state.createAt}
                        onDateChange={this.onDateChange}
                        focused={this.calendarFocued}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />


                    <button type="submit" >Add Expence</button>
                </form>
            </div >
        )
    }
}

