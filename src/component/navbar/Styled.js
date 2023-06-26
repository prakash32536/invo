import styled from '@emotion/styled';


export const StyledNavDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 10vh;
position: fixed;
top:0;
width:100%;
transition: 0.8s;
z-index: 1;
`;

export const StyledLogo = styled.img`
width: 160px;
height: 24px;
position: fixed;
left: 20px;
object-fit: contain;
cursor: pointer;
`;

export const StyledAvatar = styled.img`
width: 40px;
height: 40px;
position: fixed;
right: 20px;
cursor: pointer;
border-radius: 10px
`;