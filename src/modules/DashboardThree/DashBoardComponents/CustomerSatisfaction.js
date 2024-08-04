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
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const FeedbackText = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

const PositiveFeedback = styled.div`
  text-align: center;
`;

const NegativeFeedback = styled.div`
  text-align: center;
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
  <Card variant="outlined" style={{ borderRadius: "12px" }}>
    <CardContentWrapper>
      <ChartContainer>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: "17px",
              fontWeight: "600",
              fontFamily: "system-ui",
            }}
          >
            Customer Satisfaction
          </Typography>
          <SentimentVerySatisfiedOutlinedIcon />
        </Box>
        <FeedbackText>
          <PositiveFeedback>
            <Typography
              variant="h1"
              style={{
                fontSize: "25px",
                fontWeight: "600",
                fontFamily: "system-ui",
                color: "green",
              }}
            >
              93%
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "system-ui",
              }}
            >
              Positive Feedback
            </Typography>
          </PositiveFeedback>
          <NegativeFeedback>
            <Typography
              variant="h1"
              style={{
                fontSize: "25px",
                fontWeight: "600",
                fontFamily: "system-ui",
                color: "red",
              }}
            >
              8%
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: "system-ui",
              }}
            >
              Negative Feedback
            </Typography>
          </NegativeFeedback>
        </FeedbackText>
        <div style={{ height: "292px" }}>
          <Pie data={data} options={options} />
        </div>
      </ChartContainer>
    </CardContentWrapper>
  </Card>
);

export default CustomerSatisfaction;
