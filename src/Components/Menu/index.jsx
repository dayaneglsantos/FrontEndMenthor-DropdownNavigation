import { useState } from "react";

import {
  CompanyNavigation,
  FeaturesNavigation,
  MenuContainer,
  UserPlace,
} from "./styles";

import arrowDown from "../../assets/Images/icon-arrow-down.svg";
import todoList from "../../assets/Images/icon-todo.svg";
import calendar from "../../assets/Images/icon-calendar.svg";
import reminders from "../../assets/Images/icon-reminders.svg";
import planning from "../../assets/Images/icon-planning.svg";

const Menu = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <MenuContainer>
      <nav>
        <ul>
          <li onClick={() => setFeaturesOpen(!featuresOpen)}>
            Features
            <img src={arrowDown} alt="Arrow down" />
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
            <img src={arrowDown} alt="Arrow down" />
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
    </MenuContainer>
  );
};
export default Menu;
