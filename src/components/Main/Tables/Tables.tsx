import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
}

export const Tables = ({ }: Props) => {

    const getData = async (url: string) => {
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
                setRows(data.recordset)
            });
    }

    const [rows, setRows] = useState([{}])
    const [selectedTable, setSelectedTable] = useState("")

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedTable(event.target.value);
      };

    useEffect(() => {
    }, [])

    useEffect(() => {
        getData(selectedTable)
    }, [selectedTable])

    return (
        <>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Таблица</InputLabel>
        <Select
          defaultValue="/getEmployees"
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={selectedTable}
          onChange={handleChange}
        >
          <MenuItem value="/getEmployees">Сотрудники</MenuItem>
          <MenuItem value="/getPositions">Должности</MenuItem>
          <MenuItem value="/getCategories">Категории</MenuItem>
          <MenuItem value="/getTypeOfDelivery">Тип доставки</MenuItem>
          <MenuItem value="/getUnitsOfMeasurement">Единицы измерения</MenuItem>
          <MenuItem value="/getSupplies">Поставки</MenuItem>
          <MenuItem value="/getCustomTools">Заказ товары</MenuItem>
          <MenuItem value="/getProducts">Товары</MenuItem>
          <MenuItem value="/getOrderStatus">Статусы заказов</MenuItem>
          <MenuItem value="/getManufacturer">Производители</MenuItem>
          <MenuItem value="/getSuppliers">Поставщики</MenuItem>
          <MenuItem value="/getSupplyOfGoods">Поставка товары</MenuItem>
          <MenuItem value="/getOrders">Заказы</MenuItem>
          <MenuItem value="/getCustomers">Заказчики</MenuItem>
        </Select>
      </FormControl>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    {Object.keys(rows[0]).map((key:string) =>{
                        return <TableCell align="left">{key}</TableCell>
                    })}
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row : any, idx: number) => (
                    <TableRow
                    key={idx}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        {Object.keys(row).map((key:string) =>{
                            return <TableCell align="left">{row[key]}</TableCell>
                        })}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default Tables;