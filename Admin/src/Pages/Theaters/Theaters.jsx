import React, { useState } from 'react'
import './Theaters.css'

// icons
import { MdOutlineAddToQueue } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Theaters = () => {
    const [popup, setPopup] = useState(false)

    return (
        <>
            <div className="page-header">
                <h1>Manage Theaters</h1>
                <button onClick={() => setPopup(!popup)}>
                    <MdOutlineAddToQueue className='app-icon' /> Add New Theater
                </button>

                {/* Popup Section */}
                {popup && (
                    <div className="popuparea">
                        <div className="popupbox">
                            <div className="popupheader">
                                <h3>Add new Theater</h3>
                                <IoClose
                                    onClick={() => setPopup(false)}
                                    className='app-icon popup-close-btn'
                                />
                            </div>

                            <form className='add-theater-form'>
                                <input type="text" placeholder='Theater Name' />
                                <input type="text" placeholder='Theater Address' />
                                <input type="url" placeholder='Logo URL' />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>

            {/* Theaters List */}
            <div className="theaters-list">
                <table>
                    <thead>
                        <tr>
                            <th>Logo</th>
                            <th>Name</th>
                            <th>Available Screens</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className='theater-logo'>
                                    <img
                                        src="https://animationxpress.com/wp-content/uploads/2018/06/PVR-logo.png"
                                        alt="Theater Logo"
                                        style={{
                                            width: '60px',
                                            height: '40px',
                                            objectFit: 'cover',
                                            borderRadius: '6px'
                                        }}
                                    />
                                </div>
                            </td>
                            <td>PVR <span className='view-btn'>👁️</span></td>
                            <td>2</td>
                            <td>
                                <div className='theater-actions'>
                                    <button className='edit-btn'>Edit</button>
                                    <button className='delete-btn'>Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Theaters
