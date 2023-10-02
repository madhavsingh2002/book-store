import React from 'react'
import '../styles/Header.css'
function Header() {
    return (
        <div className='Header mx-5 mt-3 '>
            <div >
                <ul>
                    <li className='logo'>MS-Store</li>
                </ul>
            </div>
            <div>
                <ul className='d-flex mt-2 header-content' style={{ fontSize: '20px' }}>
                    <li>Home</li>
                    <li>Collection</li>
                    <li>Store</li>
                    <li>About</li>
                </ul>
            </div>

            <div>
                <button className='btn-main'  >Login</button>
            </div>


        </div>
    )
}

export default Header