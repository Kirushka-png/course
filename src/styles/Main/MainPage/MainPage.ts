import styled from 'styled-components'
import ImageGallery from 'react-image-gallery';

export const ImageSlider = styled(ImageGallery)`
`

export const MainPageContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80vw;
    .image-gallery{
        width: 80%;
        height: 100%;
    }
    .image-gallery-content .image-gallery-slide .image-gallery-image{
        max-height: none;
    }
`