import React from 'react'
import { Helmet } from 'react-helmet';

const Login = () => {
    return (
        <div>
            Login
            <Helmet>
                <title>Login page</title>
                <meta name="login" content="This is Login Page" />
            </Helmet>
        </div>
    )
}

export default Login
