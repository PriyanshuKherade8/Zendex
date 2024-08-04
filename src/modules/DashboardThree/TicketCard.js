import { Box, Card, Typography } from "@mui/material";
import { CardContentWrapper, CardTitle } from "./StyledComponents";

export const TicketCard = ({ title, count, percentage, icon, color }) => (
  <Card variant="outlined" style={{ borderRadius: "10px" }}>
    <CardContentWrapper>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <CardTitle
          style={{
            display: "flex",
            fontSize: "15px",
            fontWeight: "600",
            fontFamily: "system-ui",
          }}
        >
          {title}
        </CardTitle>
        <Box style={{ display: "flex" }}>{icon}</Box>
      </Box>
      <Box>
        <Typography
          variant="h5"
          style={{
            fontWeight: "700",
            fontFamily: "system-ui",
            marginBottom: "2px",
          }}
        >
          {count}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {percentage}
        </Typography>
      </Box>
    </CardContentWrapper>
  </Card>
);
