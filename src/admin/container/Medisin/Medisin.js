import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function Medisin() {
    const [open, setOpen] = React.useState(false);

    const [mData, setMData] = useState([])
    const [updte, setUpdate] = useState(false)
  

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medisin"));
        if (localData) {
            setMData(localData);
        }
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    var d = new Date();
    let nd = Date(d.setDate(d.getDate() - 1))

    let medisinesSchema = yup.object().shape({
        name: yup.string().required("please enter name"),
        price: yup.number().required("please enter price"),

        date: yup.date().required("please enter date").min(nd, 'please enter valid sate'),

    })

    const handleUpdate = (data) => {
        console.log(data);
        let localData = JSON.parse(localStorage.getItem("medisin"));

        let index = localData.findIndex((v) => v.id == data.id)
        console.log(index);

        localData[index] = data;

        localStorage.setItem("medisin", JSON.stringify(localData))
        setMData(localData)

        setUpdate(false)
    }

    const Tabledata = (data) => {
        console.log(data);
        let localData = JSON.parse(localStorage.getItem("medisin"));
        let id = Math.floor(Math.random() * 1000)
        if (localData) {
            localData.push({ id: id, ...data });
            localStorage.setItem("medisin", JSON.stringify(localData))
            setMData(localData)
            // console.log(localData);
        } else {
            localStorage.setItem("medisin", JSON.stringify([{ id, ...data }]))
            setMData([{ id, ...data }])
        }
    }
    // Tabledata();

    const formikobj = useFormik({

        initialValues: {
            name: '',
            price: '',
            date: '',

        },

        validationSchema: medisinesSchema,
        onSubmit:(values,action)  => {
            // console.log(values);
   
            if(updte){
                handleUpdate(values);
            }else{
                handleUpdate(values);
            }
            Tabledata(values)
            action.resetForm();
        },

    })

    const { handleSubmit, handleChange, handleBlur, errors, values, touched } = formikobj;
  
    const handleEdit = (data) => {
        // console.log(data);
        handleClickOpen();

        setMData(data)
        setUpdate(true)
    }

    const handleDelete = (id) => {
        // console.log(id);
        let localData = JSON.parse(localStorage.getItem("medisin"));

        let fData = localData.filter((v) => v.id == id)

        localStorage.setItem("medisin", JSON.stringify(fData))
        setMData(fData)

    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'date', headerName: 'date', width: 130 },
        {
            field: 'Action', headerName: 'Action',

            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleEdit(params.row)}>
                        <EditIcon/>
                    </IconButton>

                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )

        },

    ];


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? <span>{errors.name}</span> : null}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        name="price"
                        label="Price"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    {errors.price && touched.price ? <span>{errors.price}</span> : null}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        name="date"
                        label="date"
                        type="date"
                        fullWidth
                        variant="standard"
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.date && touched.date ? <span>{errors.date}</span> : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={mData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}
