import { useEffect, useState } from 'react';
import { shopItems } from '../../../utils/ShopItems'
import { Item } from '../Home/Home'
import { ItemsContainer, ItemsWrapper, Paginate } from '../../../styles/Main/MainPage/MainPage';
import ItemComponent from './ItemComponent'
import { CartItem } from '../Main'

interface Props {
    itemsPerPage: number,
    mobileScreen: boolean,
    onChangeItem(newItem: CartItem): any
}

export const Shop = ({ itemsPerPage, mobileScreen, onChangeItem }: Props) => {
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
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={0}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
            />
            <ItemsContainer>
                {currentItems &&
                    currentItems.map((element) => (
                        <ItemComponent itemInfo={element} onChangeItem={onChangeItem}/>
                    ))
                }
            </ItemsContainer>
        </ItemsWrapper>
    )
}

export default Shop;