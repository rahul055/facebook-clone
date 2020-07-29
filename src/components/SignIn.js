import React from 'react';
import { TextInput } from 'react-materialize'

function SignIn() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >
            <div className='outerBox'>
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

export default SignIn
