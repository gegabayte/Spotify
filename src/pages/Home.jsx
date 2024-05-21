import HomeHero from "../components/HomeHero"
import PlaylistCard from "../components/PlaylistCard"


function Home() {
    return (
        <div style={{width: '60%'}}>
           <HomeHero></HomeHero> 
           <div className="Playlist__Wrapper" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , gap: '15px'}}>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
                <PlaylistCard></PlaylistCard>
            </div>
        </div>
    )
}

export default Home
