import Back_left from '../assets/Back_left.svg'
import Back_right from '../assets/Back_right.svg'
function HomeHero() {
    return (
        <div style={{background: 'blue',paddingTop: '20px', paddingLeft : '40px', paddingRight: '40px'}}>
            <div style={{display: 'flex', gap: '20px'}}>
                <img src={Back_left} alt="" />
                <img src={Back_right} alt="" />

            </div>
            <div>
                <h1 style={{fontSize: '39px' ,marginTop: "30px", color: 'white'}}>Good afternoon</h1>
            </div>
            <div></div>
        </div>
    )
}

export default HomeHero
