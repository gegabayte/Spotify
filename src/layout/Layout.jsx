// import styled from "@emotion/styled/macro"
import LeftSidebar from "../components/LeftSidebar"
import RightSidebar from "../components/RightSidebar"

function Layout({ children }) {

    
    return (
        <>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <LeftSidebar></LeftSidebar>
                {children}
                <RightSidebar></RightSidebar>
            </div>
        </>
    )
}

export default Layout
