import styled from 'styled-components'
import ImageGallery from 'react-image-gallery';
import ReactPaginate from 'react-paginate';

export const ImageSlider = styled(ImageGallery)`
`

export const MainPageContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
    overflow: hidden;
    .image-gallery{
        width: 100%;
        height: 100%;
    }
    .image-gallery-content .image-gallery-slide .image-gallery-image{
        max-height: none;
    }
`
export const ItemsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;
    @media (max-width: 860px){
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

`
export const ItemsTitle = styled.p`
    font-size: 40px;
    @media (max-width: 860px){
        font-size: 26px;
    }
`
export const Item = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    min-width: 100px;
    align-items: center;
    cursor: pointer;
`
export const ItemImg = styled.img`
    max-width: 300px;
    min-width: 100px;
    height: fit-content;
`
export const ItemText = styled.div`
    color: #212529;
    line-height: 1.5;
    font-size: 20px;
`
export const ItemDescription = styled(ItemText)`
    color: #212529;
    line-height: 1.5;
    font-size: 16px;
`
export const ItemCounter = styled.input`
    width: 100px;
    height: 30px;
`
export const BuyItemButton = styled.button`
    
`
export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 60px;
`
export const ModalBody = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`
export const ModalTitle = styled.p`
    line-height: 1.5;
    font-size: 1.5rem;
`


interface ItemsWrapperProps{
    $mobileScreen: boolean
}

export const ItemsWrapper = styled.div<ItemsWrapperProps>`
    width:80%;
    > ${ItemsContainer}{
        display: grid;
        grid-template-columns: ${p => p.$mobileScreen ? 'minmax(200px,450px)' : 'repeat(3,minmax(200px,450px))'} ;
    }
`

export const ItemContainer = styled(Item)`
    flex: 1;
    align-items: flex-start;
`
export const Paginate = styled(ReactPaginate)`
    display:flex;
    width: 100%;
    padding: 0;
    justify-content: center;
    column-gap:5px;
    user-select: none;
    > li{
        width: 30px;
        height:40px;
        border: 1px solid black;
        cursor:pointer;
        text-decoration: none;
        list-style: none;
    }
    > li a{
        display:flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height:100%;
    }
    > li:hover{
        color: rgb(230, 199, 199);
        border-color: rgb(230, 199, 199);
    }
    .selected{
        color: rgb(230, 199, 199);
        border-color: rgb(230, 199, 199);
    }
`