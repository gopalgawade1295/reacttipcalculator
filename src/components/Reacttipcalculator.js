import React, { useState } from 'react'
import { Typography, TextField, Button, Select, MenuItem } from '@material-ui/core'

function Reacttipcalculator() {
    const [bill, setBill] = useState('')
    const [service, setService] = useState('')
    const [peoples, setPeoples] = useState('')
    const [list, setList] = useState([])
    const [totalCustomer, setTotalCustomer] = useState('')
    const [totalTip, setTotalTip] = useState('')

    const AddCustomer = () => {
        const tipAmount = bill * service
        setList([...list, { id: Math.random(), Bill: bill, Service: service, Peoples: peoples, TipAmount: tipAmount }])
    }

    const CalculateCustomerTip = () => {
        var total = 0
        list.map((num) => (
            total = total + num.TipAmount,
            setTotalCustomer(list.length),
            setTotalTip(total)
        ))
    }

    return (
        <div className="App">
            <Typography variant="subtitle1">Enter your bill amount:</Typography>
            <TextField type="number" value={bill} onChange={e => setBill(e.target.value)} />
            <br />
            <br />
            <Typography variant="subtitle1">How was the service?</Typography>
            <Select onChange={e => setService(e.target.value)}>
                <MenuItem value="0.2">Excellent (20%)</MenuItem>
                <MenuItem value="0.1">Moderate (10%)</MenuItem>
                <MenuItem value="0.05">Bad (5%)</MenuItem>
            </Select>
            <br />
            <br />
            <Typography variant="subtitle1">Total number of customers:</Typography>
            <TextField type="number" value={peoples} onChange={e => setPeoples(e.target.value)} />
            <br />
            <br />
            <Button variant="contained" color="secondary" onClick={AddCustomer}>Add customers</Button>
            <br />
            <br />
            {list.map((newList) => (
                <div>
                    <Typography variant="subtitle1" key={newList.id}>{newList.Peoples} offering a tip of ₹ {newList.TipAmount}.</Typography>
                </div>
            ))}
            <br />
            <Button variant="contained" color="secondary" onClick={CalculateCustomerTip}>Calculate tip & number of customers</Button>
            <br />
            <br />
            <Typography variant="subtitle1">Number of customers: {totalCustomer}</Typography>
            <Typography variant="subtitle1">Tip: ₹ {totalTip}</Typography>
        </div>
    )
}

export default Reacttipcalculator
