import React from 'react'
// import './Footer.scss'
export default function Footer({ promotion }) {
    return (
        <footer className="footer">
            <h4>rejoignez <span>emirates | the list</span></h4>
            <h4>{promotion}</h4>
        </footer>
    )
}
