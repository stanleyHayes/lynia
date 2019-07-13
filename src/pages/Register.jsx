import React from 'react';
import RegisterComponent from '../components/Register';

export default function RegisterPage() {
    return (
        <div
            style={{
                display: 'flex',
                flex: 1,
                background: 'whitesmoke',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <RegisterComponent />
        </div>
    );
}
