import styled from  'styled-components';

export const Container = styled.div`
width: 100%;
height: 100px;
background: black;
border-bottom: 2px solid white;
display: flex;
align-items: center;
justify-content: space-around;
  
`;
export const Title = styled.div`
font-size: 30px;
color: white;
font-weight: 600;
` 
export const NavItems  = styled.div`
display: flex;
align-items: center;
`;

const getColor =({rang}) =>{
   switch (rang) {
    case 'qizil': return 'red';
    case 'sariq': return 'yellow';
    default: return 'white';
        
   }
}  
export const Item = styled.div`
  font-size: 20px;
  color: ${getColor};
  margin:0px 30px;
  cursor: pointer;
`;