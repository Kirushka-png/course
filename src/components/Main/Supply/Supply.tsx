import { SupplyContainer, DelivererButton, Input, ApplyButton, AlertMessage } from '../../../styles/Main/Supply/Supply'
import { useTable } from 'react-table'
import { useMemo, useEffect, useState } from 'react'
import _ from 'lodash'

export const Supply = () => {
    interface Category {
        'Код_категории_сладостей': number,
        'Наименование': string
    }
    const [deliveries, setDeliveries] = useState([{}])
    const [Categories, setCategories] = useState<Category[]>()
    const [delivererNumber, setDelivererNumber] = useState(100)
    const [Alert, setAlert] = useState(false)

    const getAllCategories = async (url: string) => {
        const newData = await fetch(url, {
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
                setCategories(data.recordset as Category[])
            });
    }

    const getDeliverers = async (url: string) => {
        const newData = await fetch(url, {
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
                setDeliveries(data.recordset)
                setAlert(false) 
            });
    }
    const getDeliveriesByDeliverer = async (url: string, param: number) => {
        const newData = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ param: param })
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.recordset)
                if(data.recordset.length == 0){
                    setDeliveries([{}])
                    setAlert(true)
                }
                else{
                    setDeliveries(data.recordset)
                    setAlert(false) 
                }
            });
    }
    useEffect(() => {
    }, [])

    const data = useMemo(() => {
        if (deliveries) { return [...deliveries] }
        else { return [] }
    }, [deliveries])


    const columns = useMemo(
        () => {
            let tempArr = [
                {
                    Header: "Заказчик и его заказы",
                    columns: [{}]
                }
            ]
            if (deliveries != []) {
                let Keys = Object.keys(deliveries[0])
                console.log(Keys)
                tempArr[0].columns = Keys.map((key) => {
                    return {
                        Header: key,
                        accessor: key,
                    }
                })
            }
            return tempArr
        },
        [deliveries]
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    return (
        <SupplyContainer>
            <DelivererButton onClick={() => { getDeliverers("/getDeliverers") }}>Заказчик и его заказы</DelivererButton>
            {
                !_.isEmpty(deliveries[0]) && !Alert &&

                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
            {
                Alert && <AlertMessage>У данного заказчика нет заказов</AlertMessage>
            }
            {
                (!_.isEmpty(deliveries[0]) || Alert) &&
                <>
                    <Input type="number" value={delivererNumber} onChange={(e: any) => { setDelivererNumber(e.target.value) }} />
                    <ApplyButton onClick={() => { getDeliveriesByDeliverer("/getDeliveriesByDeliverer", delivererNumber) }}>OK</ApplyButton>
                </>
            }
        </SupplyContainer>
    )
}

export default Supply