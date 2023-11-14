import styled from "styled-components";
import colors from "../../Styles/colors";

export const OpenMenuButton = styled.button`
  border: none;
  background: none;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MenuMobileContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.menuOpen ? "flex" : "none")};
`;

export const Menu = styled.div`
  z-index: 2;
  width: 70%;
  background-color: ${colors.white};
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;

  .arrow {
    margin-left: 5px;
  }

  .closeMenu {
    position: fixed;
    right: 12px;
    top: 12px;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 54px 24px 24px;

    li {
      margin-bottom: 16px;
      color: ${colors.gray};
    }
  }
`;

export const FeaturesNavigation = styled.div`
  ul {
    padding: 24px;
    li {
      margin-bottom: 12px;

      a {
        color: ${colors.black};
      }
    }
  }
`;

export const CompanyNavigation = styled.div`
  ul {
    padding: 24px;
    li {
      margin-bottom: 12px;

      a {
        color: ${colors.black};
      }
    }
  }
`;

export const UserPlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-bottom: 12px;
    color: ${colors.gray};
    display: block;
  }

  .register {
    border: 1px solid ${colors.gray};
    border-radius: 12px;
    padding: 8px 48px;
    color: ${colors.gray};
  }
`;
