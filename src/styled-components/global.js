import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  align-items: center;
  height: 100px;
  padding: 0px 25px;
  background-color: #85CB33;
  color: white;
`

export const Searchbar = styled.input`
  height: 30px;
  border-radius: 10px;
  border: none;
  padding: 0px 10px;
`
export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 350px;
  width: 250px;
  border-style: none;
  border-radius: 25px;
  background-color: #85cb33ff;
`
export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  color: white;
`

export const ProjectCardPhoto = styled.img`
  height: 125px;
  width: 250px;
  border-radius: 25px 25px 0px 0px;
`



