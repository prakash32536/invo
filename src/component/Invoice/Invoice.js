import React from 'react'
import { StyledDiv, StyledpBold, Styledp } from './Styled'
import { useNavigate } from 'react-router-dom'

const Invoice = (props) => {
  const navigate = useNavigate()

  const handleRoute = (item) => {
    navigate(`/details/${props.data.id}`, { state: { item: item }});
  }
  return (
    <StyledDiv onClick={() => handleRoute(props.data)}>
      <StyledpBold>{props.data.client_name}</StyledpBold>
      <Styledp>{props.data.item_name}</Styledp>
      <Styledp>{props.data.Qty}</Styledp>
      <StyledpBold>{props.data.price}</StyledpBold>
      <StyledpBold>{props.data.total}</StyledpBold>
    </StyledDiv>
  )
}

export default Invoice
