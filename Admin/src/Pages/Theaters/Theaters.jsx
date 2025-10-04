import React, { useState } from 'react'
import './Theaters.css'

//icons
import { MdOutlineAddToQueue } from "react-icons/md";
import { IoClose } from "react-icons/io5";



const Theaters = () => {
    const [popup, setPopup] = useState(false)


    return (
        <div className="page-header">

            <h1>Manage Theaters</h1>
            <button onClick={() => setPopup(!popup)} ><MdOutlineAddToQueue className='app-icon' /> Add New Theater </button>


            {
                popup && (
                    <>

                        <div className="popuparea">
                            <div className="popupbox">
                                <div className="popupheader">

                                    <h3>Add new Theater</h3>
                                    <IoClose onClick={() => setPopup(!popup)} className='app-icon popup-close-btn' />

                                </div>

                                <form className='add-theater-form'>
                                    <input type="text" placeholder='Theater Name' />
                                    <input type="text" placeholder='Theater Address' />
                                    <input type="url" placeholder='Logo URL' />
                                    <button type="submit" > Submit </button>
                                </form>
                            </div>
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default Theaters