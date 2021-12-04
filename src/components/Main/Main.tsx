import { MainContainer, Header, NavBar, Links, Link, Title, ImageSlider, Body } from "../../styles/Main/Main"

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

const Main = () => {
    return(
        <MainContainer>
            <Header>
                <NavBar>
                    <Links>
                        <Link>Главная</Link>
                        <Link>Магазин</Link>
                        <Link>Обо мне</Link>
                        <Link>Контакты</Link>
                    </Links>
                    <Title>COOKIES</Title>
                    <Links>
                        <Link>Instagram</Link>
                        <Link>Facebook</Link>
                        <Link>Youtube</Link>
                        <Link>Корзина</Link>
                    </Links>
                </NavBar>
            </Header>
            <Body>
                <ImageSlider
                    items={images}
                    autoPlay
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={false}
                    slideInterval={5000}
                />
                
            </Body>
        </MainContainer>
    )
}
export default Main;