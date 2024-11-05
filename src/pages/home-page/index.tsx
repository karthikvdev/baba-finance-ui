import React from "react"
import { LocationIcon } from "../../assets/icons/location"
import { Link } from "react-router-dom"
import { UI_ENDPOINTS } from "../../utils/endpoints"


export const HomePage: React.FC = () => {
    return (
        <main className='relative'>
            Home Page.
            <LocationIcon />
            <Link to={UI_ENDPOINTS.CONTACT_US}>Contact Us Page</Link>
        </main>
    )
}