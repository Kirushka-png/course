import { Body, Header, Link, Links, MainContainer, NavBar, Title, Menu, Sidebar, MenuLink } from "../../styles/Main/Main"
import MainPage from './MainPage/MainPage'
import { useState, useEffect } from 'react'

interface Props{
    link: string
}

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100vh'
    },
    bmMenu: {
      background: '#F8F9FA',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflow: 'hidden'
    },
    bmMorphShape: {
      fill: '#F8F9FA'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
}

const Main = ({ link }:Props) => {

    const [mobileScreen, setMobileScreen] = useState<boolean>(window.innerWidth < 860)

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const handleResize = () =>{
        let currentWidth = window.innerWidth
        setMobileScreen(currentWidth < 860)
    }
    return(
        <MainContainer>
            { mobileScreen ?
                <Sidebar>
                    <Menu styles={ styles }>
                        <MenuLink id="home" className="menu-item" href="/main/home">Главная</MenuLink>
                        <MenuLink id="shop" className="menu-item" href="/main/shop">Магазин</MenuLink>
                        <MenuLink id="about" className="menu-item" href="/main/about">Обо мне</MenuLink>
                    </Menu>
                </Sidebar> :
                <Header>
                    <NavBar>
                        <Links>
                            <Link href="/main/home">Главная</Link>
                            <Link href="/main/shop">Магазин</Link>
                            <Link href="/main/about">Обо мне</Link>
                            <Link href="/main/contacts">Контакты</Link>
                        </Links>
                        <Title>COOKIES</Title>
                        <Links>
                            <Link href="/main/home">Instagram</Link>
                            <Link href="/main/home">Facebook</Link>
                            <Link href="/main/home">Youtube</Link>
                            <Link href="/main/trash">Корзина</Link>
                        </Links>
                    </NavBar>
                </Header>
            }
            <Body>
            {
                {
                    'home': <MainPage />
                }[link]
            }
            </Body>
        </MainContainer>
    )
}
export default Main;