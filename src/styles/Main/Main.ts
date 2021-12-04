import styled from 'styled-components'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"

const FlexCentering = "display: flex; justify-content: center; align-items: center;"

export const MainContainer = styled.main`
    width: 100vw;
`
export const NavBar = styled.div`
    max-width: 1140px;
    min-width: 900px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex: 1;
    align-items: center;
`
export const Links = styled.div`
    ${FlexCentering}
    width: 300px;
    flex-wrap: wrap;
    height: 70%;
`
export const Link = styled.div`
    ${FlexCentering}
    font-size: 14px;
    width: 100px;
`
export const Title = styled.p`
    ${FlexCentering}
    width: 200px;
    font-size: 40px;
`
export const Header = styled.nav`
    width: 100vw;
    height: 140px;
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: center;
    background-color: #F8F9FA;
`
export const ImageSlider = styled(ImageGallery)`
`
export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 180px;
    .image-gallery{
        width: 80%;
        height: 100%;
    }
    .image-gallery-content .image-gallery-slide .image-gallery-image{
        max-height: none;
    }
`