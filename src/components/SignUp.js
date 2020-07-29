import React from 'react'
import { TextInput } from 'react-materialize'

function SignUp() {
    return (
        <div>
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
    )
}

export default SignUp
