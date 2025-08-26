import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
    return (
        <button onClick={()=> signIn()}>Login</button>
    );
};

export default Login;