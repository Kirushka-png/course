import { Body, Header, Link, Links, MainContainer, NavBar, Title, Menu, Sidebar, MenuLink, CartCount } from "../../styles/Main/Main"
import Home, { Item } from './Home/Home'
import { useState, useEffect } from 'react'
import { Shop } from './Shop/Shop'
import Cart from './Cart/Cart'
import _ from 'lodash'
import Cookies from '../../utils/Cookies'
import Supply from './Supply/Supply'
import Tables from './Tables/Tables'

interface Props {
  link: string
}

export interface CartItem extends Item {
  count: number
}

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '52px'
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

const Main = ({ link }: Props) => {

  const [mobileScreen, setMobileScreen] = useState<boolean>(window.innerWidth < 860)
  const [selectedCartItems, setSelectedCartItems] = useState<CartItem[]>([])
  const [role, setRole] = useState("user")

  useEffect(() => {
    Cookies.getCookie("role") == "manager" && setRole("manager")
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const onChangeItems = (newItems: CartItem[]) => {
    setSelectedCartItems([...newItems])
  }
  const onChangeItem = (newItem: CartItem) => {
    let tempItem = _.find(selectedCartItems, { id: newItem.id })
    if (tempItem) {
      tempItem.count += newItem.count;
      setSelectedCartItems(a => [...a])
    }
    else { setSelectedCartItems(a => [...a, newItem]) }
  }
  const handleResize = () => {
    let currentWidth = window.innerWidth
    setMobileScreen(currentWidth < 860)
  }
  return (
    <MainContainer>
      {mobileScreen ?
        <Sidebar>
          <Menu styles={styles}>
            <MenuLink id="home" className="menu-item" to="/main/home">Главная</MenuLink>
            <MenuLink id="shop" className="menu-item" to="/main/shop">Магазин</MenuLink>
            <MenuLink id="about" className="menu-item" to="/main/about">Обо мне</MenuLink>
          </Menu>
          <Title>COOKIES</Title>
        </Sidebar> :
        <Header>
          <NavBar>
            <Links>
              <Link to="/main/home">Главная</Link>
              <Link to="/main/shop">Магазин</Link>
              {
                role.includes("manager") ? 
                  <>
                    <Link to="/main/supplies">Доставки</Link> 
                    <Link to="/main/tables">Данные</Link> 
                  </>
                  :
                  <>
                    <Link to="/main/contacts">Контакты</Link>
                    <Link to="/main/about">Обо мне</Link>
                  </>
              }
            </Links>
            <Title>COOKIES</Title>
            <Links>
              <Link to="/main/home">Instagram</Link>
              <Link to="/main/home">Facebook</Link>
              <Link to="/main/home">Youtube</Link>
              <Link to="/main/cart">Корзина 
                {selectedCartItems.length != 0 &&
                  <CartCount>{selectedCartItems.length}</CartCount>
                }
              </Link>
            </Links>
          </NavBar>
        </Header>
      }
      <Body>
        {
          {
            'home': <Home />,
            'shop': <Shop itemsPerPage={mobileScreen ? 4 : 9} mobileScreen={mobileScreen} onChangeItem={onChangeItem} />,
            'cart': <Cart selectedCartItems={selectedCartItems} onChangeItems={(newItems: CartItem[]) => { onChangeItems(newItems) }} />,
            'supplies': <Supply/>,
            'tables': <Tables/>
          }[link]
        }
      </Body>
    </MainContainer>
  )
}
export default Main;