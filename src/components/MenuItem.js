import React from "react";
import styled from "styled-components";

function MenuItem({ title, imageUrl, size, linkUrl }) {
  return (
    <Container size={size}>
      <BgImg src={imageUrl} />
      <Content className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <p className="subtitle">Shop Now</p>
      </Content>
    </Container>
  );
}

export default MenuItem;

const Container = styled.div`
  min-width: 30%;
  height: ${(props) => (props.size !== "large" ? "380px" : "560px")};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  :hover {
    img {
      transform: scale(1.2);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    .content {
      opacity: 0.9;
    }
  }

  :first-child {
    margin-right: 7.5px;
  }

  :last-child {
    margin-left: 7.5px;
  }

  @media (max-width: 768px) {
    height: 190px;
  }
`;

const Content = styled.div`
  height: 120px;
  position: absolute;
  background-color: white;
  padding: 0 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.7;

  .title {
    font-size: 32px;
    letter-spacing: 2px;
    font-weight: bold;
    margin: 0 6px 0;
    color: #4a4a4a;
  }

  .subtitle {
    font-size: 22px;
    font-weight: lighter;
    margin: 0;
  }

  :hover {
    opacity: 0.9;
  }
`;

const BgImg = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  object-fit: cover;
  transform: scale(1);
  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;
