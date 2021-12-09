import { useEffect, useState } from 'react';
import { shopItems } from '../../../utils/ShopItems'
import { Item } from '../MainPage/MainPage'
import { ItemsContainer, ItemsTitle, ItemContainer, ItemImg, ItemText, ItemsWrapper, Paginate } from '../../../styles/Main/MainPage/MainPage';
import cookie from '../../../Images/cookie1.jpg'

interface ItemsProps {
    currentItems: Item[]
}
function Items({ currentItems }: ItemsProps) {
    return (
        <>
            {currentItems &&
                currentItems.map((element) => (
                    <ItemContainer>
                        <ItemImg src={cookie} />
                        <ItemText>{element.name}</ItemText>
                        <ItemText>{"RUB " + element.price.toFixed(2)}</ItemText>
                    </ItemContainer>
                ))}
        </>
    );
}

interface Props {
    itemsPerPage: number,
    mobileScreen: boolean
}

export const Paginator = ({ itemsPerPage, mobileScreen }: Props) => {
    const [currentItems, setCurrentItems] = useState<Item[]>(shopItems);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(shopItems.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(shopItems.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % shopItems.length;
        setItemOffset(newOffset);
    };

    return (
        <ItemsWrapper $mobileScreen={mobileScreen}>
            <Paginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
            />
            <ItemsContainer>
                <Items currentItems={currentItems} />
            </ItemsContainer>
        </ItemsWrapper>
    )
}

export default Paginator;