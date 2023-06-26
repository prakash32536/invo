import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';
import { StyledDivForDetailsPage, StyledDiv3, StyledDiv4 } from './Styled';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../Firebase';



const Details = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const data = {
        Qty: state.item.Qty,
        address: state.item.address,
        client_name: state.item.client_name,
        date: state.item.date,
        item_name: state.item.item_name,
        price: state.item.price,
        total: state.item.total,
        email: state.item.email,
        id: state.item.id
    };
    console.log(data)

    //delete 

    const handleDelete = async () => {
        await deleteDoc(doc(db, "invoice", data.id));
        navigate("/")
    }
    return (
        <StyledDivForDetailsPage>
            <Card sx={{ minWidth: 230, width: "70%", borderRadius: "10px" }}>
                <CardActions>
                    <Button onClick={handleDelete} variant='contained' sx={{ background: "red" }}>Delete</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 230, width: "70%", borderRadius: "10px", mt: 2 }}>
                <CardContent sx={{ padding: "15px" }}>
                    <div>
                        <Typography variant='h5'>{data.client_name} </Typography>
                        <Typography>{data.address}</Typography>
                    </div>
                    <StyledDiv3>
                        <Grid container>
                            <Grid item sx={12} md={6}>
                                <Typography variant='h5' sx={{mt:1}}> Date:- {data.date}</Typography>
                            </Grid>
                            <Grid sx={12} md = {6}>
                                <Typography variant='h5'sx={{mt:1}}>Email:- {data.email} </Typography>
                            </Grid>
                        </Grid>
                    </StyledDiv3>
                    <StyledDiv3> <Typography variant='h6'> Item Name:- {data.item_name}</Typography>
                        <Typography variant='h6'>Quantity:- {data.Qty} </Typography>
                        <Typography variant='h6'>Price:- {data.price} </Typography>
                    </StyledDiv3>
                    <StyledDiv4>
                        <Typography variant='h5' sx={{ color: "white" }}>Total Amount:-  </Typography>
                        <Typography variant='h5' sx={{ color: "white" }}> {data.total} </Typography>
                    </StyledDiv4>
                </CardContent>
            </Card>
        </StyledDivForDetailsPage>
    )
}

export default Details
