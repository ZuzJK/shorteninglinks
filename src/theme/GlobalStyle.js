import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
:root{
--primaryColor:hsl(180, 66%, 49%);
--secondaryColor: hsl(257, 27%, 26%);
--danger: hsl(0, 87%, 67%);

--light:#fff;
--neutral-200: hsl(0, 0%, 75%);
--neutral-400: hsl(257, 7%, 63%);
--neutral-500: hsl(255, 11%, 22%);
--neutral-700: hsl(260, 8%, 14%);


--inputHeight:50px;
--gapWidth:1rem;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

*{
    box-sizing:border-box;
    }
html{
    font-size:16px;
    font-size:62,5%;
}
    body{
    font-family:'Poppins',sans-serif;
    font-size: 1.8rem; 
    background-color:var(--white);
}
`;

export default GlobalStyle;