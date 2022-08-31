
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addUser } from '../../redux/slices/UserSlice'
import AuthService from "../../services/Auth";
import './Auth.css'



export default function () {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [creds, setCreds] = useState({});

    const handleChange = (e: any, key: string) => {
        setCreds({ ...creds, [key]: e.target.value });
    }

    const handleSubmit = async () => {

        let data = await AuthService.Login(creds);

        if (!data.error) {
            dispatch(addUser(creds))
            navigate('/otp')
        }

    }


    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
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
                    <p className="forgot-password text-right mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    )
}