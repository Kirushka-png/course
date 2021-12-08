import { ImageSlider, MainPageContainer, ItemsContainer, ItemsTitle, Item, ItemImg, ItemText } from '../../../styles/Main/MainPage/MainPage';
import cookie from '../../../Images/cookie1.jpg'

export interface Item{
  name: string
  price: number
  id: number
}
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
const items = [
    {
      name:"ВАШ ТОВАР",
      price: 10.00,
      id: 1
    },
    {
      name:"ВАШ ТОВАР",
      price: 10.00,
      id: 2
    },
    {
      name:"ВАШ ТОВАР",
      price: 10.00,
      id: 3
    }
]

const MainPage = () => {
    return(
        <MainPageContainer>
            <ImageSlider
                items={images}
                autoPlay
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={false}
                slideInterval={5000}
            />
            <ItemsTitle>ПОПУЛЯРНОЕ</ItemsTitle>
            <ItemsContainer>
              {
                items.map(element =>
                <Item>
                  <ItemImg src={cookie}/>
                  <ItemText>{element.name}</ItemText>
                  <ItemText>{"RUB " + element.price.toFixed(2)}</ItemText>
                </Item>)
              }
            </ItemsContainer>
        </MainPageContainer>
    )
}
export default MainPage;