import React, { useState } from 'react'
import '../index.css'

class Line extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {
            text,
            placeholder,
            DisplayedText,
            handleChanges,
        } = this.props.data

        return (
            <div style={{ marginLeft: '30px' }}>
                <label> {DisplayedText}: </label>
                <input
                    type='text'
                    id={text}
                    name={text}
                    placeholder={placeholder}
                    onChange={handleChanges}
                />
            </div>
        )
    }
}

class TextArea extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {
            text,
            placeholder,
            handleChanges,
            DisplayedText
        } = this.props.data

        return (
            <div style={{ marginLeft: '30px' }}>
                <label > {DisplayedText} </label>
                <br></br>
                <textarea
                    type='text'
                    id={text}
                    name={text}
                    placeholder={placeholder}
                    onChange={handleChanges}
                />
            </div>
        )
    }
}


const ContactUs = () => {
    const [data, setData] = useState(
        {
            firstName: '',
            lastName: '',
            PhoneNumber: '',
            text: '',
            email: '',

        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const
            {
                firstName,
                lastName,
                PhoneNumber,
                text,
                email
            } = data

        if (!firstName || !lastName || !PhoneNumber || !text || !email) {
            alert("Please fill out all required fields");
        }

        else {
            const message = "You have submitted" + "\nName: " + firstName + "\nLast name: " + lastName + "\nPhone: " + PhoneNumber + "\nEmail: " + email + "\nDescription: " + text
            alert(message)
            setData({
                firstName: "",
                lastName: "",
                PhoneNumber: "",
                text: "",
                email: "",
              });
              e.target.reset();
        }
    }

    const MainDiv =
    {
        display: 'block',
        textAlign: 'center',
        justifyContent: 'Center'
    }

    const FormDiv =
    {
        display: 'flex',
        padding: '10px',
        marginTop: '20px',
        boxShadow: '0 0 50px 1px #e6e1e1',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '850px',
        borderRadius: '15px'
    }

    return (
        <div>
            <div style={MainDiv}>

                <h1 style={{ marginTop: '50px', fontSize: '3em' }}>
                    Something to say?
                </h1>
                <h2 style={{ marginTop: '20px', marginBottom: '50px', fontSize: '2em' }}>
                    We're all ears!
                </h2>
            </div>
            <div style={FormDiv}>
                <form onSubmit={handleSubmit}>
                    <Line data={{ text: 'firstName', DisplayedText: 'First Name', placeholder: 'Anthony', handleChanges: handleChange }}></Line>
                    <Line data={{ text: 'lastName', DisplayedText: 'Last name', placeholder: 'Saad', handleChanges: handleChange }}></Line>
                    <Line data={{ text: 'PhoneNumber', DisplayedText: 'Phone Number', placeholder: '+961 XXXXXXXX', handleChanges: handleChange }}></Line>
                    <Line data={{ text: 'email', DisplayedText: 'Email', placeholder: 'anthony.j.saad@net.usek.edu.lb', handleChanges: handleChange }}></Line>
                    <TextArea data={{ text: 'text', DisplayedText: "Describe the issue you're facing", placeholder: "I am facing an issue with booking...", handleChanges: handleChange }}></TextArea>

                    <div style={{ display: 'block', textAlign: 'center', marginBottom: '20px' }}>
                        <button >Submit</button>
                    </div>

                </form>
                <br></br>

            </div>

        </div>
    )
}



export default ContactUs