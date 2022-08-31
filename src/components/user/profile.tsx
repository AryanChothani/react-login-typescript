
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store";
import './index.css'

const getBase64 = (img: any, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        callback(reader.result);
    });
    reader.readAsDataURL(img);
}


export default function () {
    const user = useSelector((state: RootState) => state.user)
    const [profile, setProfile] = useState({ img: "" });


    const handleFileUpload = async (e: any) => {
        debugger
        console.log(e.target.files)

        getBase64(e.target.files[0], (imageUrl: string) => {
            console.log(imageUrl)
            setProfile({ ...profile, img: imageUrl })
        });
    }


    return (
        <div>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="img-fluid mt-5" src={profile.img}></img>
                            <span className="text-black-50">{user.email}</span>
                            <div className="mb-3">
                                <input className="form-control" type="file" onChange={(e) => handleFileUpload(e)} id="formFile"></input>
                            </div>
                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="profile-labels">UserName</label><input type="text" className="form-control" placeholder="username" value=""></input></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="profile-labels">FullName</label><input type="text" className="form-control" placeholder="Enter Full Name" value=""></input></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="profile-labels">Bio</label><textarea className="form-control" placeholder="Bio" value=""></textarea></div>
                            </div>
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Translate</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}