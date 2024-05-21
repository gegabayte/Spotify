import Liked_icon from '../assets/Liked.svg'
function PlaylistCard() {
    return (
        <div style={{padding: '20px', width: '224px', height: '324px', cursor: 'pointer' , background :'aqua', display: 'flex' , flexDirection: 'column', gap: '20px'}}>
            <div>
                <img width={182} height={182} src={Liked_icon} alt="" />
            </div>
            <div style={{display: 'flex ' , flexDirection: 'column' , gap: '15px'}}>
                <h3 style={{fontSize: '20px'}}>chill mix</h3>
                <p style={{fontSize: '18px'}}>julia wolf, khalid, ayokay  and more</p>
            </div>
        </div>
    )
}

export default PlaylistCard
