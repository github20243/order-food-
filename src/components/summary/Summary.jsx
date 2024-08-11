import styled from "styled-components";
import BackgroundImg from "../../assets/images/summaryBcg.png";
import { Button } from "../UI/Button";
import SummaryInfoCard from "./SummaryInfo";

const Summary = () => {
  return (
    <Container>
      <ImgStyle src={BackgroundImg} alt="summary" />
      <SummaryInfoCard />
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  height: 527px;
  margin-top: 100px;
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 432px;
`;
