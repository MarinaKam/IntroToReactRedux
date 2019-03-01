import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from "./GoogleAuth";

const Header = () => (
    <Fragment>
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className="nav-link navbar-brand" to='/'>Streamer</Link>
                <button className="navbar-toggler d-md-none" type="button"
                        data-toggle="collapse" data-target="#b-nav" aria-controls="b-nav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse hidden-toggle-nav' id='b-nav'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/streams/show'>Show</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/streams/new'>Create</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/streams/edit'>Edit</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/streams/delete'>Delete</Link>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li className='nav-item'>
                            <GoogleAuth/>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                    <li className='nav-item dropdown mx-3'>
                        <Link to='#'
                              className="nav-link dropdown-toggle"
                              role="button"
                              id="dropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false">
                            All Streams
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <Link className='dropdown-item' to='/streams/show'>Show</Link>
                            <Link className='dropdown-item' to='/streams/new'>Create</Link>
                            <Link className='dropdown-item' to='/streams/edit'>Edit</Link>
                            <div className='dropdown-divider'></div>
                            <Link className='dropdown-item' to='/streams/delete'>Delete</Link>
                        </div>
                    </li>
                    <li className='nav-item'>
                        <GoogleAuth/>
                    </li>
                </ul>
            </nav>
        </header>
    </Fragment>
);

export default Header;