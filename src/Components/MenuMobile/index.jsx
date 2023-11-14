import { useState } from "react";

import {
  CompanyNavigation,
  FeaturesNavigation,
  MenuMobileContainer,
  Menu,
  OpenMenuButton,
  UserPlace,
} from "./styles";
import menuIcon from "../../assets/Images/icon-menu.svg";
import arrowDown from "../../assets/Images/icon-arrow-down.svg";
import arrowUp from "../../assets/Images/icon-arrow-up.svg";
import todoList from "../../assets/Images/icon-todo.svg";
import calendar from "../../assets/Images/icon-calendar.svg";
import reminders from "../../assets/Images/icon-reminders.svg";
import planning from "../../assets/Images/icon-planning.svg";
import closeMenu from "../../assets/Images/icon-close-menu.svg";

const MenuMobile = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [menuMobileOpen, setmenuMobileOpen] = useState(false);

  return (
    <>
      <OpenMenuButton onClick={() => setmenuMobileOpen(true)}>
        <img src={menuIcon} alt="Open menu icon" />
      </OpenMenuButton>
      <MenuMobileContainer menuOpen={menuMobileOpen}>
        <Menu>
          <img
            src={closeMenu}
            alt="Close menu icon"
            onClick={() => setmenuMobileOpen(false)}
            className="closeMenu"
          />
          <nav>
            <ul>
              <li onClick={() => setFeaturesOpen(!featuresOpen)}>
                Features
                <img
                  src={featuresOpen ? arrowUp : arrowDown}
                  alt="Arrow up/down"
                  className="arrow"
                />
                {featuresOpen ? (
                  <FeaturesNavigation>
                    <ul>
                      <li>
                        <a href="#">
                          <img src={todoList} alt="todo icon" /> Todo List
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={calendar} alt="Calendar icon" /> Calendar
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={reminders} alt="Reminder icon" /> Reminders
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={planning} alt="Planning icon" /> Planning
                        </a>
                      </li>
                    </ul>
                  </FeaturesNavigation>
                ) : (
                  ""
                )}
              </li>
              <li onClick={() => setCompanyOpen(!companyOpen)}>
                Company
                <img
                  src={companyOpen ? arrowUp : arrowDown}
                  alt="Arrow up/ down"
                  className="arrow"
                />
                {companyOpen ? (
                  <CompanyNavigation>
                    <ul>
                      <li>
                        <a href="#">History</a>
                      </li>
                      <li>
                        <a href="#">Our Team</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </CompanyNavigation>
                ) : (
                  ""
                )}
              </li>
              <li>Careers</li>
              <li>About</li>
            </ul>
          </nav>
          <UserPlace>
            <a href="#">Login</a>
            <a className="register" href="#">
              Register
            </a>
          </UserPlace>
        </Menu>
      </MenuMobileContainer>
    </>
  );
};
export default MenuMobile;
