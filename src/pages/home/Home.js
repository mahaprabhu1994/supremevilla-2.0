import React from 'react'
import PropertiesContainer from '../../components/Properties/Properties_Container'
import "./Home.css"

function Home() {
    return (
        <div>
            <nav className='nav__bar'>
                <h2 className='logo'>Supremevilla</h2>
                <ul>
                    <li>Home</li>
                    <li>Properties</li>
                    <li>Blog</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </nav>
            <div className='Hero'>
                <div className='Hero__content'>
                    <h1>Always find Your Best Choice  </h1>
                </div>
                <div className='Hero__image__container'>
                    <img className='hero__image' src='../images/1_hero.png' alt='' />
                </div>
            </div>
            <div className='catagories'>
                <div className='catagories__item'>House / Villa</div>
                <div className='catagories__item'>Apartment</div>
                <div className='catagories__item'>Land</div>
                <div className='catagories__item'>Others</div>
            </div>
            <div className='heading'><h3>Latest Properties</h3></div>
            <div className='Latest__Properties'>
                <PropertiesContainer />
                <PropertiesContainer />
                <PropertiesContainer />
                <PropertiesContainer />
                <PropertiesContainer />
                <PropertiesContainer />
                <PropertiesContainer />
                <PropertiesContainer />
                <PropertiesContainer />
                <PropertiesContainer />
            </div>

            <div className='footer'>
                <div className='footer__menu'>
                    <div className='footer__menu__list'>
                        <ul>
                            <li>Home</li>
                            <li>Videos</li>
                            <li>Properties</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                            <li>About us</li>
                        </ul>
                    </div>
                    <div className='footer__menu__list'>
                        <ul>
                            <li>Home / Villas</li>
                            <li>Apartment</li>
                            <li>Land</li>
                            <li>Commercial Proeprties</li>
                            <li>Agricultural Proeprties</li>
                            <li>Others</li>
                        </ul>
                    </div>
                </div>
                <div className='footer__contact'>

                    <h5>Contact us </h5>
                    <h2>+91 - 81100 55500</h2>
                    <h2>support@supremevilla.com</h2>

                </div>
            </div>
            <div className='footer__copyright'>
                <h3>supremevilla.com @ All right reserved </h3>
            </div>
        </div>
    )
}

export default Home