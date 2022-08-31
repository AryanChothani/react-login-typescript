
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addUser } from '../../redux/slices/UserSlice'
import AuthService from "../../services/Auth";
import './Auth.css'
import Session from 'store2';
import { useAuthContext } from "../../context/authContext";


export default function () {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [auth, setAuthenticated] = useAuthContext();
    const [creds, setCreds] = useState({ email: "", password: "" });
    const [attempts, setAttempts] = useState(10);
    const [invaliedCreds, setInvaliedCreds] = useState(false);
    const [restrictLogin, setRestrictLogin] = useState(false);



    const handleChange = (e: any, key: string) => {
        setCreds({ ...creds, [key]: e.target.value });
    }

    const handleSubmit = async () => {
        if (attempts == 0) {
            setRestrictLogin(true)
        } else {
            try {
                let data = await AuthService.Login(creds);

                if (!data.error) {
                    dispatch(addUser({ email: creds.email }))
                    setAuthenticated({ isAuthenticated: true })
                    Session.session("session_token", data.sessionToken)
                    navigate('/otp')
                } else {
                    let wrongAttempts = attempts
                    setAttempts(wrongAttempts - 1)
                }
            } catch (error) {
                let wrongAttempts = attempts
                setAttempts(wrongAttempts - 1)
                setInvaliedCreds(true)
                console.log(error)
            }
        }
    }


    return (
        <div className="Auth-form-container" >
            <form className="Auth-form needs-validation">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={(e) => handleChange(e, "email")}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(e) => handleChange(e, "password")}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="button" onClick={handleSubmit} className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    &nbsp;
                    {invaliedCreds ? <div className="alert alert-danger" role="alert">
                        Please provide a valid email and password. You have {attempts} attempts left.
                    </div> : ""}
                    {restrictLogin ? <div className="alert alert-danger" role="alert">
                        Reached the maximum limit of attempts. Please try again after some time.
                    </div> : ""}
                </div>
            </form >
        </div >
    )
}