import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
width: ${({ openMenu }) => openMenu? '300px' : '100px'};
height: calc(100vh);
box-sizing: border-box;
padding: 10px 10px 10px 10px;
display: flex;
align-items: center;
flex-direction: column;
overflow-y: auto;
position: sticky;
top: 55px;
`;

export const MenuItem = styled.div<{ openMenu : boolean }>`
width: 98%;
min-height: ${({ openMenu }) => openMenu? '45px' : '70px'};
border-radius: 10px;
cursor: pointer;
padding: 2px 15px;
box-sizing: border-box;
display: flex;
flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
align-items: center;
justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};

span {
    font-weight: ${({ openMenu }) => openMenu? '600' : '400'};
    margin-left: ${({ openMenu }) => openMenu? '20px' : 'none'};
    font-size: ${({ openMenu }) => openMenu? '16px' : '12px'};
}

 :hover {
    background-color: #f2f2f2;

 }
`
export const ButtonIcon = styled.img`
width: 25px;
`;

export const Line = styled.hr<{ openMenu : boolean }>`
visibility: ${({ openMenu }) => openMenu? 'visible' : 'hidden'};
width: 100%;
color:black;
`;

export const End = styled.footer`
display: flex;
flex-direction: column;
align-items: right;
justify-content: space-between;
width: 100%;
font-size: 14px;
`;

export const LoginButton = styled.button`
margin-top: 20px;
color: blue;
width: 100px;
height: 30px;
border-radius: 40px;
border-width: 1px;
font-weight: 600;
cursor: pointer;
`;