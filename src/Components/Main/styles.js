import styled from "styled-components";
import ImgDesktop from "../../assets/Images/image-hero-desktop.png";
import colors from "../../Styles/colors";
import ImgMobile from "../../assets/Images/image-hero-mobile.png";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: calc(100vh - 78px);
  margin: 0 auto;
  padding-bottom: 32px;

  @media (max-width: 768px) {
    display: block;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  text-align: center;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 0 0 130px;

  @media (max-width: 768px) {
    padding: 0 24px;
    text-align: center;
  }

  h1 {
    font-size: 80px;
    padding-right: 20px;
    padding-top: 42px;

    @media (max-width: 768px) {
      font-size: 32px;
      padding-right: 0;
      padding-top: 24px;
    }
  }

  p {
    color: ${colors.gray};
    font-size: 18px;
    padding-right: 100px;

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 16px 0;
    }
  }

  .clientImages {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      img {
        width: 70px;
      }
    }
  }
`;

export const Img = styled.div`
  background-image: url(${ImgDesktop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    background-image: url(${ImgMobile});
    background-size: contain;
    height: 60%;
  }

  @media (max-width: 375px) {
    background-image: url(${ImgMobile});
    height: 50%;
  }
`;

export const Button = styled.button`
  background-color: ${colors.black};
  border: none;
  border-radius: 8px;
  color: ${colors.white};
  padding: 12px 16px;
  width: 150px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 5px;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
    border: 1px solid ${colors.black};
  }

  @media (max-width: 768px) {
    margin: 12px auto 24px;
  }
`;
