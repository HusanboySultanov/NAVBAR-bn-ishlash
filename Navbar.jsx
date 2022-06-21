import React, { useContext } from "react";
import { FozilInfo } from "../context";
import { Container, NavItems, Title, Item } from "./style";

export const Navbar = () => {
  const [mock] = useContext(FozilInfo);
  return (
    <div>
      <Container>
        <Title>WebCode</Title>
        <NavItems>
          <Item rang={"qizil"}>Home</Item>
          <Item>Contact</Item>
          <Item>Mowies</Item>
          <Item>Discount</Item>
          <Item rang={"sariq"}>{[mock.length]}</Item>
        </NavItems>
      </Container>
    </div>
  );
};
export default Navbar;
