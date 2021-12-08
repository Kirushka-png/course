import { ImageSlider, MainPageContainer } from '../../../styles/Main/MainPage/MainPage';

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
            
        </MainPageContainer>
    )
}
export default MainPage;