import Home_icon from '../assets/Home.svg'
import Search_icon from '../assets/Search.svg'
import library_icon from '../assets/library.svg'
import Subtract_icon from '../assets/Subtract.svg'
import Liked_icon from '../assets/Liked.svg'
import { Link } from 'react-router-dom'
function LeftSidebar() {
    // const SidebarWrapper = .div`
    // width: 17%;
    // height: 100vh;
    // background-color: #000;
    // color: #B3B3B3;
    // `;

    return (
        <div style={{ width: '20%', height: '400vh', background: '#000', color: '#B3B3B3', paddingTop: '50px', paddingLeft: '20px' }}>
            <div style={{display: 'flex', flexDirection: 'column' , gap: '25px'}}>
                <div style={{display:'flex' , alignItems: 'center', gap: '25px'}}>
                    <img src={Home_icon} alt="" />
                    <Link style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='/'>Home</Link>
                </div>
                <div style={{display:'flex' , alignItems: 'center', gap: '25px'}}>
                    <img src={Search_icon} alt="" />
                    <Link style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='/'>Search</Link>
                </div>
                <div style={{display:'flex' , alignItems: 'center', gap: '25px'}}>
                    <img src={library_icon} alt="" />
                    <Link style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='/'>Your Library</Link>
                </div>

                <div style={{display:'flex' , alignItems: 'center', gap: '25px', marginTop: '40px'}}>
                    <img src={Subtract_icon} alt="" />
                    <Link style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='/'>Create Playlist</Link>
                </div>
                <div style={{display:'flex' , alignItems: 'center', gap: '25px'}}>
                    <img src={Liked_icon} alt="" />
                    <Link style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='/'>Create Playlist</Link>
                </div>
                <hr style={{width: "90%", opacity: '0.2'}} />
            </div>
            <div style={{display: 'flex' , flexDirection: "column" , gap: "25px", marginTop :'30px'}}>
                <Link  style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='#'>Chill Mix</Link>
                <Link  style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='#'>Insta Hits</Link>
                <Link  style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='#'>Your Top Songs 2021</Link>
                <Link  style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='#'>Mellow Songs</Link>
                <Link  style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='#'>Anime Lofi & Chillhop Music</Link>
                <Link  style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='#'>BG Afro “Select” Vibes</Link>
                <Link  style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='#'>Afro “Select” Vibes</Link>
                <Link  style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='#'>Happy Hits!</Link>
                <Link  style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='#'>Deep Focus</Link>
                <Link  style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='#'>Instrumental Study</Link>
                <Link  style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='#'>OST Compilations</Link>
                <Link  style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='#'>Nostalgia for old souled mill...</Link>
                <Link  style={{fontSize: '18px', textDecoration: 'none' , color: 'white'}} to='#'>Mixed Feelings</Link>
            </div>
        </div>
    )
}

export default LeftSidebar
