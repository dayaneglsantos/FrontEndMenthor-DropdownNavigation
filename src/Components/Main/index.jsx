import { Button, Content, Img, MainContainer } from "./styles";
import databiz from "../../assets/Images/client-databiz.svg";
import audiophile from "../../assets/Images/client-audiophile.svg";
import maker from "../../assets/Images/client-maker.svg";
import meet from "../../assets/Images/client-meet.svg";

const Main = () => {
  return (
    <MainContainer>
      <Img />
      <Content>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Button>Learn more</Button>
        <div className="clientImages">
          <img src={databiz} alt="databiz logo" />
          <img src={audiophile} alt="audiophile logo" />
          <img src={meet} alt="meet logo" />
          <img src={maker} alt="maker logo" />
        </div>
      </Content>
    </MainContainer>
  );
};
export default Main;
