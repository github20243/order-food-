import React from "react";
import styled from "styled-components";

const SummaryInfoCard = () => {
  return (
    <Card>
      <HeaderText>Delicious Food, Delivered To You</HeaderText>
      <InfoText>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </InfoText>
      <InfoText>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </InfoText>
    </Card>
  );
};

export default SummaryInfoCard;

const Card = styled.div`
  max-width: 54rem;
  background-color: #383838;
  height: 270px;
  padding: 36px 40px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  position: relative;
  margin: -12rem auto;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`;

const HeaderText = styled.h4`
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  color: #ffffff;
`;
const InfoText = styled.p`
  margin-top: 28px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
