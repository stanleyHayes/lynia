import React from 'react';
import LoginComponent from '../components/Login';

export default function LoginPage() {
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
			<LoginComponent />
		</div>
	);
}
