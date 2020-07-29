import React, { useState } from 'react'
import { TextInput } from 'react-materialize'
import '../App.css'
import signUp from '../api/signUp'

function SignUp(props) {
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })
    const onSubmit = async () => {
        const result = await signUp(data)
        if (result === true) {
            console.log('sign in success');
        } else if (result === false) {
            console.log('sign in failed');
        }
    }
    const onChangeText = (key, value) => {
        const newData = { ...data };
        newData[key] = value;
        setData(newData)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >

            <div className='outerBox'>
                <h4>Sign Up</h4>
                <TextInput
                    label="FirstName"
                    onChange={(e) => onChangeText('firstname', e.target.value)}
                />
                <TextInput
                    label="LastName"
                    onChange={(e) => onChangeText('lastname', e.target.value)}
                />
                <TextInput
                    label="Email"
                    onChange={(e) => onChangeText('email', e.target.value)}
                />
                <TextInput
                    label="Password"
                    onChange={(e) => onChangeText('password', e.target.value)}
                />
                <button onClick={onSubmit}>Create</button>
                <p>Already have an account ? <span onClick={() => props.togglesu("si")} >Sign in</span></p>
            </div>
        </div>
    )
}

export default SignUp
