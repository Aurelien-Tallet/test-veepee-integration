import React from 'react'
// import './Header.scss'
export default function Header({ promotion }) {
    return (
        <header className='header'>
            <h1 className='title'>découvrez les offres du moment</h1>
            <h2 className='promotion'>{promotion}</h2>
          
        </header>
    )
}
