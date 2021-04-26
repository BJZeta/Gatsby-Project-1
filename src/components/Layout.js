import React from 'react'
import Navigation from './Navigation';
import '../styles/bootstrap.min.css'
import '../styles/global.css'

export default function Layout({children}) {
    return (
        <div className="layout">
            <Navigation />
            <div className="content">
                {children}
            </div>
            <footer>
                <p>Copyright 2021 Brandon Unzueta</p>
            </footer>
        </div>
    )
}
