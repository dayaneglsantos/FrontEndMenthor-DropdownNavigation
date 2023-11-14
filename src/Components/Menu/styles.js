import styled from "styled-components";
import colors from "../../Styles/colors";

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.gray};
  font-size: 14px;
  margin-left: 36px;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;

    li {
      padding: 8px;
      cursor: pointer;
      position: relative;

      &:hover {
        color: ${colors.black};
      }

      img {
        margin-left: 5px;
      }
    }
  }
`;

export const UserPlace = styled.div`
  a {
    padding: 8px 12px;
    color: ${colors.gray};

    &:hover {
      color: ${colors.black};
    }
  }

  .register {
    border: 1px solid ${colors.gray};
    border-radius: 12px;
    margin-left: 24px;

    &:hover {
      color: ${colors.black};
      border: 1px solid ${colors.black};
    }
  }
`;

export const FeaturesNavigation = styled.div`
  background-color: #fff;
  position: absolute;
  right: 12px;
  top: 38px;
  border-radius: 8px;
  box-shadow: 1px 1px 15px #c3c3c3;

  ul {
    display: block;
    padding: 12px;
    font-size: 14px;

    li {
      a {
        display: flex;
        align-items: center;
        color: ${colors.gray};

        img {
          margin-right: 12px;
        }
      }
    }
  }
`;

export const CompanyNavigation = styled(FeaturesNavigation)`
  left: 12px;
  width: 105px;
`;
