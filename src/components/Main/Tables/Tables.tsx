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
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';
import allTablesWithRequests from "../../../utils/Tables";
import ChildModal from './ChildModal'
import _ from 'lodash'
interface Props {
}

export const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


export const Tables = ({ }: Props) => {

    const [rows, setRows] = useState([{}])
    const [selectedTable, setSelectedTable] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [tempData, setTempData] = useState<any>({})

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

    const insertData = async (url: string | undefined) => {
        if(url) {
            let tempObj = {}
            Object.keys(rows[0]).forEach((key,idx) => {
                if(idx == 0){
                    let tempId = (rows[rows.length - 1] as any)[key] + 1;
                    (tempObj as any)[key] = tempId
                }
                else{
                    (tempObj as any)[key] = tempData[key]
                }
            });
            const newData = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(tempObj)
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log("+");
                    setOpenModal(false)
                });
        }
    }


    const handleChange = (event: SelectChangeEvent) => {
        setSelectedTable(event.target.value);
    };

    useEffect(() => {
        getData(selectedTable)
    }, [selectedTable])

    const ChangeParam = (param: string, key: string) => {
        if (Object.keys(tempData).includes(key)) {
            let tempObj = tempData
            tempObj[key] = param
            setTempData({ ...tempObj })

        }
        else {
            let tempObj = { [key]: param }
            setTempData({ ...tempObj, ...tempData })
        }
    }

    return (
        <>
            {selectedTable != "" &&
                <Modal
                    open={openModal}
                    onClose={() => { setOpenModal(false) }}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <h2 id="parent-modal-title">Введите все данные</h2>
                        {

                            Object.keys(rows[0]).map((key, idx) => {
                                if (idx == 0) {
                                    let tempId = (rows[rows.length - 1] as any)[key] + 1
                                    return <>
                                        <p id="child-modal-description">{key} : {tempId}</p>
                                    </>
                                }
                                else {
                                    return <>
                                        <p id="child-modal-description">{key}</p>
                                        <Input value={tempData[key]} onChange={(e) => { ChangeParam(e.target.value, key) }} />
                                    </>
                                }
                            })
                        }
                        <Button variant="contained" onClick={() => { let temp = _.find(allTablesWithRequests,{get: selectedTable}); insertData(temp?.insert)}}>Добавить</Button>
                    </Box>
                </Modal>
            }
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Таблица</InputLabel>
                <Select
                    defaultValue="/getEmployees"
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={selectedTable}
                    onChange={handleChange}
                >
                    {
                        allTablesWithRequests.map((table) => {
                            return <MenuItem value={table.get}>{table.name}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {Object.keys(rows[0]).map((key: string) => {
                                return <TableCell align="left">{key}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row: any, idx: number) => (
                            <TableRow
                                key={idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {Object.keys(row).map((key: string) => {
                                    return <TableCell align="left">{row[key]}</TableCell>
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {selectedTable != "" && <Button variant="contained" onClick={() => { setOpenModal(true) }}>Добавить новую строку</Button>}
        </>
    )
}

export default Tables;