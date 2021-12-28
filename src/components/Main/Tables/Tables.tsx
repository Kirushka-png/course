import React, { useEffect, useState } from 'react';
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
import Menu from '@mui/material/Menu';
import _, { map } from 'lodash'
import AnalyticalRequests from '../../../utils/AnalyticalRequests'
import AllInserting from '../../../utils/AllInserting'

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

interface SelectedColumnData {
    key: string,
    value: string
}
export const Tables = () => {


    const [rows, setRows] = useState([{}])
    const [ErrorMessage, setErrorMessage] = useState("")
    const [selectedTable, setSelectedTable] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [openErrorModal, setOpenErrorModal] = useState(false)
    const [tempData, setTempData] = useState<any>({})
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [editData, setEditData] = useState(false)
    const open = Boolean(anchorEl);
    const [selectedColumnData, setSelectedColumnData] = useState<SelectedColumnData>()

    const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
        setAnchorEl(event.currentTarget)
        event.preventDefault()
    };
    const handleClose = () => {
        setEditData(true)
        setAnchorEl(null)
        setOpenModal(true)
    };

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
        if (url) {
            let tempObj = {}
            Object.keys(rows[0]).forEach((key, idx) => {
                let temp = _.find(allTablesWithRequests, { get: selectedTable });
                if (temp && idx == 0 && !AllInserting.includes(temp.name) && !editData) {
                    let tempId = (rows[rows.length - 1] as any)[key] + 1;
                    (tempObj as any)[key] = tempId
                }
                else {
                    (tempObj as any)[key] = tempData[key]
                }
            });
            console.log(tempObj)
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
                    console.log(data)
                    if (data.name && (data.name.includes("Error")) || (data.recordsets && data.recordsets.length != 0)) {
                        setOpenErrorModal(true)
                        if (data.recordsets && data.recordsets.length != 0) {
                            let temperr = ""
                            data.recordsets.forEach((Err: any) => {
                                temperr += Err[0].Error + ";\n"
                            })
                            setErrorMessage(temperr)
                        }
                        else {
                            setErrorMessage("")
                        }
                    }
                    else {
                        setOpenModal(false)
                        setTempData({})
                        getData(selectedTable)
                    }
                });
        }
    }
    const analyticalRequest = async (url: string | undefined) => {
        if (url && selectedColumnData) {
            const newData = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ [selectedColumnData.key]: selectedColumnData.value })
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (data.recordset.length != 0) {
                        setRows(data.recordset)
                    }
                    else (
                        setRows([{}])
                    )
                    setSelectedTable("")
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
                <>
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
                                    let temp = _.find(allTablesWithRequests, { get: selectedTable });
                                    if ((temp && idx == 0 && !AllInserting.includes(temp.name)) || (editData && idx == 0)) {
                                        let tempId = (rows[rows.length - 1] as any)[key] + 1
                                        return <>
                                            <p id="child-modal-description">{key} : {editData ? tempData[key] : tempId}</p>
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
                            <Button variant="contained" onClick={() => {
                                let temp = _.find(allTablesWithRequests, { get: selectedTable });
                                let tempLength = Object.keys(tempData).length
                                temp && !AllInserting.includes(temp.name) && tempLength++
                                if (tempLength >= Object.keys(rows[0]).length && !_.includes(tempData, "")) { editData ? insertData(temp?.update) : insertData(temp?.insert) } else {
                                    setErrorMessage("Введены не все поля")
                                    setOpenErrorModal(true)
                                }
                            }}>{editData ? "Изменить" : "Добавить"}</Button>
                        </Box>
                    </Modal>
                    <Modal
                        hideBackdrop
                        open={openErrorModal}
                        onClose={() => { setOpenErrorModal(false) }}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                    >
                        <Box sx={{ ...style, width: 200 }}>
                            <h2 id="child-modal-title">Ошибка!</h2>
                            <p id="child-modal-description">
                                {ErrorMessage}
                            </p>
                            <Button onClick={() => { setOpenErrorModal(false) }}>Закрыть</Button>
                        </Box>
                    </Modal>
                </>
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
                                    return <TableCell align="left" onContextMenu={(e) => { handleClick(e); setSelectedColumnData({ key: key, value: row[key] }); setTempData(row) }}>{row[key]}</TableCell>
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {
                    selectedColumnData && selectedTable.length != 0 &&
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => setAnchorEl(null)}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => { handleClose(); }}>Изменить</MenuItem>
                        {
                            AnalyticalRequests.map((req) => {
                                if (req.mainData.includes(selectedColumnData.key)) {
                                    return <MenuItem onClick={() => { setAnchorEl(null); analyticalRequest(req.link) }}>{req.description}</MenuItem>
                                }
                            })
                        }
                    </Menu>
                }
            </TableContainer>
            {selectedTable != "" && <Button variant="contained" onClick={() => { setOpenModal(true); setEditData(false); setTempData({}) }}>Добавить новую строку</Button>}
        </>
    )
}

export default Tables;