
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import UserSlice from '../../redux/slices/UserSlice'
import { RootState } from '../../redux/store'

import AuthService from "../../services/Auth";
import './Otp.css'



export default function () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    var state = useSelector((state: RootState) => state.user)


    const [otp, setOtp] = useState("");

    const handleChange = (e: any) => {
        setOtp(otp + e.target.value);
    }

    const handleSubmit = async () => {
        console.log(otp)
        let data = await AuthService.Login({ otp });

        if (!data.error) {
            navigate('/')
        }

    }

    const getCodeBoxElement = (index: number): any => {
        return document.getElementById('codeBox' + index);
    }
    const onKeyUpEvent = (index: number, event: any) => {
        const eventCode = event.which || event.keyCode;
        if (getCodeBoxElement(index).value.length === 1) {
            if (index !== 5) {
                getCodeBoxElement(index + 1).focus();
            } else {
                getCodeBoxElement(index).blur();
                // Submit code
                console.log('submit code ');
                document.getElementById('submit')?.focus();
            }
        }
        if (eventCode === 8 && index !== 1) {
            getCodeBoxElement(index - 1).focus();
        }
    }
    const onFocusEvent = (index: number) => {
        for (let item = 1; item < index; item++) {
            const currentElement = getCodeBoxElement(item);
            if (!currentElement.value) {
                currentElement.focus();
                break;
            }
        }
    }


    return (
        <div className="container height-100 d-flex justify-content-center align-items-center">
            <div className="position-relative">
                <div className="card p-2 text-center">
                    <h6>Please enter the One Time Password(Otp)  to verify your account</h6>
                    <div> <span>A Otp has been sent to</span> <small>{state.email}</small> </div>
                    <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
                        <input className="m-2 text-center otp-form-control rounded" type="text" id="codeBox1" onKeyUp={(e) => onKeyUpEvent(1, e)} onFocus={() => onFocusEvent(1)} onChange={(e) => handleChange(e)} maxLength={1} />
                        <input className="m-2 text-center otp-form-control rounded" type="text" id="codeBox2" onKeyUp={(e) => onKeyUpEvent(2, e)} onFocus={() => onFocusEvent(2)} onChange={(e) => handleChange(e)} maxLength={1} />
                        <input className="m-2 text-center otp-form-control rounded" type="text" id="codeBox3" onKeyUp={(e) => onKeyUpEvent(3, e)} onFocus={() => onFocusEvent(3)} onChange={(e) => handleChange(e)} maxLength={1} />
                        <input className="m-2 text-center otp-form-control rounded" type="text" id="codeBox4" onKeyUp={(e) => onKeyUpEvent(4, e)} onFocus={() => onFocusEvent(4)} onChange={(e) => handleChange(e)} maxLength={1} />
                        <input className="m-2 text-center otp-form-control rounded" type="text" id="codeBox5" onKeyUp={(e) => onKeyUpEvent(5, e)} onFocus={() => onFocusEvent(5)} onChange={(e) => handleChange(e)} maxLength={1} />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="button" id="submit" onClick={handleSubmit} className="btn btn-primary">
                            Validate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}