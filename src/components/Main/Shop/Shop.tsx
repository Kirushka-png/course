import { useEffect, useState } from 'react';
import { ItemsContainer, ItemsWrapper, Paginate } from '../../../styles/Main/MainPage/MainPage';
import ItemComponent from './ItemComponent'
import { CartItem } from '../Main'

interface Props {
    itemsPerPage: number,
    mobileScreen: boolean,
    onChangeItem(newItem: CartItem): any
}

export const Shop = ({ itemsPerPage, mobileScreen, onChangeItem }: Props) => {
    const [currentItems, setCurrentItems] = useState<any>([{}]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [AllItems, setAllItems] = useState<any>([])

    useEffect(() => {
        fetch("/getItems", {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
              'Accept': 'application/json'
            }
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
                setAllItems([...data.recordset])
            });
    }, [])

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(AllItems.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(AllItems.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, AllItems]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % AllItems.length;
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
                    currentItems.map((element: any) => (
                        <ItemComponent itemInfo={element} onChangeItem={onChangeItem}/>
                    ))
                }
            </ItemsContainer>
        </ItemsWrapper>
    )
}

export default Shop;