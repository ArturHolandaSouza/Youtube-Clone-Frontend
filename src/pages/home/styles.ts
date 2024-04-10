import styled from "styled-components";


export const Container = styled.div<{ openMenu : boolean }>`
width: 100%;
max-width: 1600px;
display: grid;
grid-template-columns: ${({ openMenu }) => openMenu? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
column-gap: 20px;
row-gap: 50px;
`;

export const TagsContainer = styled.div`
display: flex;
justify-content: left;
align-items: center;
column-gap: 13px;
margin-bottom: 20px;
border-style
`;

export const Tag = styled.button`
font-family: "Roboto", sans-serif;
font-weight: 700;
font-style: normal;
font-size: 14px;
padding: 10px;
background-color: #d3d3d3;
border-radius: 10px;
border: none;
cursor: pointer;
`;


export const NextButton = styled.img`
height: 25px;
width: 25px;
border-radius: 50%;
cursor: pointer;
`;