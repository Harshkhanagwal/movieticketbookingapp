import React, {useState} from 'react'
import './Theaters.css'

// icons
import {IoTrashBin} from "react-icons/io5";
import {MdOutlineAddToQueue} from "react-icons/md";
import {FaEye} from "react-icons/fa";

import {IoClose} from "react-icons/io5";

import {FaPencilAlt} from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";

const Theaters = () => {
    const [popup, setPopup] = useState(false)
    const [theaterPopup, setTheaterPopup] = useState(false)
    const [selectedTheater, setSelectedTheater] = useState({})


    const openPopup = (popup_data) => {
        setSelectedTheater(popup_data)
        setTheaterPopup(true)
    }
    const closePopup = () => {
        setSelectedTheater({})
        setTheaterPopup(!theaterPopup)
    }
    const [data, setData] = useState([
        {
            name: "INOX, Mumbai",
            logoUrl: "https://imgs.search.brave.com/EeDglhXmyn24iLgk4IjqUBvtsDaV8Jm0mhNxP-BJ1PE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM0L1BWUl9Jbm94/X1BpY3R1cmVzX2xv/Z28uanBn",
            screen: 5,
            address: "R City Mall, Ghatkopar West, Mumbai, Maharashtra"
        },
        {
            name: "Cinepolis, Delhi",
            logoUrl: "https://imgs.search.brave.com/IjuhPSSK8ZPzbd5H4VWwIW5rFpdNZyWiA18rnI-r2BA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzM1LzEvY2luZXBv/bGlzLWxvZ28tcG5n/X3NlZWtsb2dvLTM1/NzA5NC5wbmc",
            screen: 5,
            address: "Unity One Mall, Janakpuri, New Delhi"
        },
        {
            name: "Carnival Cinemas, Bengaluru",
            logoUrl: "https://imgs.search.brave.com/Wg3Iei_mp1EhajvptOmKKbRwKeS7pV0YKJH2nClmL9I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c21hcnRhZHMuaW4v/aW1hZ2VzL3Byb2R1/Y3RfZ3JvdXAvY2lu/ZW1hL2Nhcm5pdmFs/LWNpbmVtYXMtbXVt/YmFpLndlYnA",
            screen: 5,
            address: "GT World Mall, Magadi Road, Bengaluru, Karnataka"
        },
        {
            name: "PVR Icon, Hyderabad",
            logoUrl: "https://animationxpress.com/wp-content/uploads/2018/06/PVR-logo.png",
            screen: 5,
            address: "Forum Sujana Mall, Kukatpally, Hyderabad, Telangana"
        }, {
            name: "Miraj Cinemas, Ahmedabad",
            logoUrl: "https://www.mirajcinemas.com/static/img/logo-2.1303aac.png",
            screen: 5,
            address: "Alpha One Mall, Vastrapur, Ahmedabad, Gujarat"
        }
    ])

    return (
        <>
            <div className="page-header">
                <h1>Manage Theaters</h1>
                <button onClick={
                    () => setPopup(!popup)
                }>
                    <MdOutlineAddToQueue className='app-icon'/>
                    Add New Theater
                </button>

                {/* Popup Section */}
                {
                popup && (
                    <div className="popuparea">
                        <div className="popupbox">
                            <div className="popupheader">
                                <h3>Add new Theater</h3>
                                <IoClose onClick={
                                        () => setPopup(false)
                                    }
                                    className='app-icon popup-close-btn'/>
                            </div>

                            <form className='popup-form'>
                                <input type="text" placeholder='Theater Name'/>
                                <input type="text" placeholder='Theater Address'/>
                                <input type="url" placeholder='Logo URL'/>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                )
            } </div>

            {/* Theaters List */}
            <div className="theaters-list">
                <table>
                    <thead>
                        <tr>
                            <th>logo</th>
                            <th>Name
                            </th>
                            <th>Avialable screens</th>
                            <th className='theater-actions-head'>
                                <span>Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody> {
                        data.map(theater => {
                            return (
                                <>
                                    <tr>
                                        <td className='t-l-td'>
                                            <div className='theater-logo'>
                                                <img src={
                                                        theater.logoUrl
                                                    }
                                                    alt="Theater Logo"
                                                    style={
                                                        {
                                                            width: '40px',
                                                            height: '40px',
                                                            objectFit: 'cover',
                                                            borderRadius: '6px'
                                                        }
                                                    }/>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="view">
                                                <button onClick={
                                                        () => openPopup(theater)
                                                    }
                                                    className='view-btn'><FaEye/></button>
                                                {
                                                theater.name
                                            } </div>
                                        </td>
                                        <td>{
                                            theater.screen
                                        }</td>
                                        <td>
                                            <div className='theater-actions'>
                                                <button className='edit-btn'><FaPencilAlt/>Edit</button>
                                                <button className='delete-btn'><IoTrashBin/>
                                                    Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    } </tbody>
                </table>
            </div>

            {
            theaterPopup && (
                <>
                    <div className="popuparea">
                        <div className="popupbox">
                            <div className="popupheader">
                                <h3>Theater Details</h3>
                                <IoClose onClick={
                                        () => closePopup()
                                    }
                                    className='app-icon popup-close-btn'/>
                            </div>
                                <div className="theater_popup_details">
                                    <img  className='theater_popup_details_logo' src={selectedTheater.logoUrl} alt="img" />
                                    
                                    <div className='theater_popup_txt' >
                                    <h2>{selectedTheater.name}</h2>
                                    <p className='seleted-theater-location-text'><TfiLocationPin  className='location_icon_popup' />{selectedTheater.address}</p>
                                    <p className='seleted-theater-Screen-text'>Available Screens : {selectedTheater.screen}</p>
            
                                    </div>

                                </div>
                        </div>
                    </div>
                </>
            )
        } </>
    )
}

export default Theaters
