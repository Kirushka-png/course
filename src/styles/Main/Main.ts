import styled from 'styled-components'
import "react-image-gallery/styles/css/image-gallery.css"
import { slide } from 'react-burger-menu'

const FlexCentering = "display: flex; justify-content: center; align-items: center;"

export const MainContainer = styled.main`
    font-family: 'Century Gothic', sans-serif;
`
export const Menu = styled(slide)`

`
export const Sidebar = styled.div`
    width: 100%;
    height: 140px;
    position: fixed;
    z-index: 100;
    background-color: #F8F9FA;
    align-items: center;
    justify-content: center;
    > p{
        margin-left:calc(50% - 100px);
    }
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
export const Link = styled.a`
    color: black;
    text-decoration: none;
    ${FlexCentering}
    font-size: 14px;
    width: 100px;
`
export const MenuLink = styled(Link)`
    font-size:24px;
    :hover{
        opacity: 0.6;
    }
`
export const Title = styled.p`
    ${FlexCentering}
    width: 200px;
    font-size: 40px;
`
export const Header = styled.nav`
    width: 100%;
    height: 140px;
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: center;
    background-color: #F8F9FA;
`
export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 180px;
`