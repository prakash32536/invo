import React, { useState, useEffect } from 'react'
import Nav from '../component/navbar/NavBar'
import Invoice from '../component/Invoice/Invoice'
import { db } from '../Firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { DialogTitle, DialogContent, DialogActions, Button, Typography, Grid } from '@mui/material'
import { StyledBoxForInvoiceHeader,StyledDiv, StyledGrid, StyledTextField, StyledBoxForInvoices, StyledTypographyForHeader, StyledButtonForHeader, StyledDialog } from './Styled'

const Home = () => {

    const [fromData, setFromData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target
        setFromData((preData) => ({
            ...preData,
            [name]: value
        }))
    }

    //multiply function
    const [total, setTotal] = useState("")
    const price = parseFloat(fromData.price);
    const quantity = parseFloat(fromData.Qty)

    useEffect(() => {
        setTotal(price * quantity)
    }, [price, quantity])

    useEffect(() => {
        setFromData((preData) => ({
            ...preData,
            total: total
        }))
    }, [total])

    //push everything in firebase
    const invoiceRef = collection(db, "invoice")
    const handleSubmit = async (e) => {
       await addDoc(invoiceRef, fromData)
       extra()
    }

    //dailog 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        handleSubmit()
        setOpen(false);
    };

    //call the data from direbase 
    const [data, setData] = useState([])
    console.log(data)             // the final output of comming from firestore
    const extra = async () => {
        const invoiceRef = collection(db, "invoice")
        let updatedData = []
        const snapshot = await getDocs(invoiceRef)
        snapshot.docs.forEach((doc) => {
            updatedData.push({...doc.data(), id: doc.id})
        })
        setData(updatedData)
    }
    useEffect(() => {
        extra()
    }, [])

    return (
        <div>
            <Nav />
            <StyledBoxForInvoices>
                <StyledBoxForInvoiceHeader>
                    <StyledTypographyForHeader variant='h4'>Invoices</StyledTypographyForHeader>
                    <StyledButtonForHeader onClick={handleClickOpen} variant='contained'>New Invoices +</StyledButtonForHeader>
                </StyledBoxForInvoiceHeader>
                {/* invoice  */}

                {
                    data &&
                    data.map((data, index) => {
                        return (
                            <StyledDiv key={index}>
                                <Invoice data={data} />
                            </StyledDiv>
                        )
                    }
                    )
                }
            </StyledBoxForInvoices>


            {/* dailog Box */}
            <StyledDialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>

                <DialogContent>
                    <StyledTextField name="client_name" onChange={handleChange} id="outlined-basic" label="Client Name" variant="outlined" />
                    <StyledTextField name="email" onChange={handleChange} id="outlined-basic" label="Client Email" variant="outlined" />
                    <StyledTextField name="address" onChange={handleChange} id="outlined-basic" label="Address" variant="outlined" />
                    <StyledTextField name="date" onChange={handleChange} id="outlined-basic" label="Date" variant="outlined" />
                    <Typography variant='h4' sx={{ marginTop: "10px" }}>Item Details</Typography>
                    <Grid container>
                        <StyledGrid item sx={12} md={12} lg={3}>
                            <StyledTextField name="item_name" onChange={handleChange} id="outlined-basic" label="Item Name" variant="outlined" />
                        </StyledGrid>
                        <StyledGrid item sx={3} md={3} lg={2} >
                            <StyledTextField name="Qty" onChange={handleChange} id="outlined-basic" label="Qty." variant="outlined" />
                        </StyledGrid>
                        <StyledGrid item sx={4} md={4} lg={2}>
                            <StyledTextField name="price" onChange={handleChange} id="outlined-basic" label="Price" variant="outlined" />
                        </StyledGrid>
                        <StyledGrid item sx={5} md={5} lg={3}>
                            <StyledTextField id="outlined-basic" label={total} value={total} variant="outlined" disabled />
                        </StyledGrid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>

            </StyledDialog>

        </div>
    )
}

export default Home
