import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Card, Typography } from "@mui/material";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";

Chart.register(ArcElement, Tooltip, Legend);

const ChartContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const CardContentWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 470px;
  border-radius: 12px !important;
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Title = styled(Typography)`
  font-size: 17px !important;
  font-weight: 600 !important;
  font-family: system-ui !important;
`;

const FeedbackText = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

const FeedbackBox = styled.div`
  text-align: center;
`;

const FeedbackValue = styled(Typography)`
  font-size: 25px !important;
  font-weight: 600 !important;
  font-family: system-ui !important;
  color: ${(props) => props.color} !important;
`;

const FeedbackLabel = styled(Typography)`
  font-size: 20px !important;
  font-weight: 600 !important;
  font-family: system-ui !important;
`;

const data = {
  labels: ["Positive Feedback", "Negative Feedback", "Neutral", "Other"],
  datasets: [
    {
      data: [60, 20, 15, 5],
      backgroundColor: ["#36a2eb", "#ff6384", "#ffcd56", "#4bc0c0"],
      hoverBackgroundColor: ["#36a2eb", "#ff6384", "#ffcd56", "#4bc0c0"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const CustomerSatisfaction = () => (
  <CardContentWrapper variant="outlined">
    <ChartContainer>
      <Header>
        <Title variant="h6">Customer Satisfaction</Title>
        <SentimentVerySatisfiedOutlinedIcon />
      </Header>
      <FeedbackText>
        <FeedbackBox>
          <FeedbackValue variant="h1" color="green">
            93%
          </FeedbackValue>
          <FeedbackLabel variant="h6">Positive Feedback</FeedbackLabel>
        </FeedbackBox>
        <FeedbackBox>
          <FeedbackValue variant="h1" color="red">
            8%
          </FeedbackValue>
          <FeedbackLabel variant="h6">Negative Feedback</FeedbackLabel>
        </FeedbackBox>
      </FeedbackText>
      <div style={{ height: "260px" }}>
        <Pie data={data} options={options} />
      </div>
    </ChartContainer>
  </CardContentWrapper>
);

export default CustomerSatisfaction;
