import logo from "./logo.jpg";
import "./Navbar.css";
import Services from './Services';
import Industries from './Industries';
import Company from './Company'
import { useState } from 'react';

export default function Navbar() {
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
    const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

    function handleServicesMouseOver() {
        setShowServicesDropdown(true);
    }

    function handleServicesMouseOut() {
        setShowServicesDropdown(false);
    }

    function handleIndustriesMouseOver() {
        setShowIndustriesDropdown(true);
    }

    function handleIndustriesMouseOut() {
        setShowIndustriesDropdown(false);
    }

    function handleCompanyMouseOver() {
        setShowCompanyDropdown(true);
    }

    function handleCompanyMouseOut() {
        setShowCompanyDropdown(false);
    }

    return (
        <div className="Navbar">
            <img src={logo} alt="Error" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li onMouseOver={handleServicesMouseOver} onMouseOut={handleServicesMouseOut}>
                        Services
                        {showServicesDropdown && <Services />}

                    </li>
                    <li onMouseOver={handleIndustriesMouseOver} onMouseOut={handleIndustriesMouseOut}>
                        Industries
                        {showIndustriesDropdown && <Industries />}
                    </li>
                    <li>Portfolio</li>
                    <li>Blogs</li>
                    <li onMouseOver={handleCompanyMouseOver} onMouseOut={handleCompanyMouseOut}>
                        Company
                        {showCompanyDropdown && <Company />}
                    </li>
                    <button>Contact Us</button>
                </ul>
            </nav>
        </div>
    );
}
