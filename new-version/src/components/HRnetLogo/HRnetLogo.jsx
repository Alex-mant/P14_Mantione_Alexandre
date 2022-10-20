import logo from "../../assets/Logo.png";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  margin: 20px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  h1{
    margin: 20px 0;
    font-family: 'Roboto Serif', serif;
    color: #768E12;
    font-size: 28px;
    font-weight: 400;
  }
  img{
    margin-right: 30px;
    object-fit: cover;
  }
}
`;
const HRnetLogo = () => {
  return (
    <Container className="websiteIdentity">
      <img className="flip-vertical-right" width="75px" height="75px" src={logo} alt="HRnet Logo" />
      <h1 className="mainTitle">HRNET</h1>
    </Container>
  );
};

export default HRnetLogo;
