import { Box,Typography, Button, Dialog, TextField, Grid } from '@mui/material'
import styled from '@emotion/styled'

export const StyledBoxForInvoiceHeader = styled(Box)`
width: 70%;
height: 40vh;
display: flex;
align-items: center;
justify-content: space-between;
`;
export const StyledBoxForInvoices = styled(Box)`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`;
export const StyledTypographyForHeader = styled(Typography)`
color: white;
`;
export const StyledButtonForHeader = styled(Button)`
font-size: 16px;
background: white;
color: black;
`;

export const StyledDialog = styled(Dialog)`
.css-1t1j96h-MuiPaper-root-MuiDialog-paper {
    width: 70%;
}
`;
export const StyledTextField = styled(TextField)`
width: 100%;
margin-top: 10px;
`;

export const StyledGrid = styled(Grid)`
margin-left: 10px;
`;

export const StyledDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 10px 0px;
`;

export const StyledDivForDetailsPage =styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 90vh;
flex-direction: column;
margin: 20px 0px;
`;

export const StyledDiv2 = styled.div`
margin-top : 20px;
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`;

export const StyledDiv3 = styled.div`
margin-top : 20px;
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
height: 15vh;
border-radius: 10px;
background: #d5d5d5;
`;
export const StyledDiv4 = styled.div`
margin-top : 20px;
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
height: 15vh;
border-radius: 10px;
background: #252367;
`;
