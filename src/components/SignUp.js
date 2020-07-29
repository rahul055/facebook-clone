import React from 'react'
import { TextInput } from 'react-materialize'
import '../App.css'

function SignUp() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >
            <div className='outerBox'>

                <TextInput
                    label="FirstName"
                />
                <TextInput
                    label="LastName"
                />
                <TextInput
                    label="Email"
                />
                <TextInput
                    label="Password"
                />
            </div>
        </div>
    )
}

export default SignUp
