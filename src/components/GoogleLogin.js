import * as React from "react";
import {googleLogin} from "../helpers/auth";

export default class GoogleLogin extends React.Component {
    render() {
        return (
            <div>
                <h1>Google Login</h1>
                <button
                    style={{border: 'none', background: 'transparent'}}
                    onClick={() => {
                        googleLogin()
                    }}
                    className="navbar-brand">Login
                </button>
            </div>
        )
    }
}