import React from 'react';
import { TextInput } from 'react-materialize'

function SignIn(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >
            <div className='outerBox'>
                <h4>Sign In</h4>
                <TextInput
                    label="Email"
                />
                <TextInput
                    label="Password"
                />
                <p>Already have an account ? <span onClick={() => props.togglesi("su")} >Sign up</span></p>
            </div>
        </div>
    )
}

export default SignIn
