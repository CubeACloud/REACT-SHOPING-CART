import React , {useEffect} from 'react'
import { Link } from 'react-router-dom';
import gsap, {Power2 , Back} from 'gsap'


const Header = () => {
    useEffect(() => {
        gsap.to ('body', 0, {css : {visibility : 'visible'}});
        const tl = gsap.timeline()

        tl.from('.link', 1.2, {
            x: 300,
            ease: 'power3.easeout',
            stagger: {
                amount: 0.3 
            },

        })

        tl.from('.line', 0.9, {
            opacity: 0,
            y: 70,
            ease: Back.easeOut,
            stagger: 0.3
        })

        tl.from('.card' , 0.3 , {
            autoAlpha: 0,
            opacity: 0,
            ease: Power2.easeIn,
        })

    }, [])
    
    
    return(

       <nav className="header">
    <div className="container row space-between v-center">
        <div className="logo row">
            <img/>
            <h2>Shoping Cart</h2>
        </div>
   
        <div className="nav-routes">
            <ul>
                <Link className="link "to='/'>Home</Link>
                <Link className="link" to='/cart'>Cart</Link>
                {/* <Link className="link" to='/'>Contact</Link> */}
            </ul>
        </div>
        </div>
       </nav>
    )
}

export default Header;