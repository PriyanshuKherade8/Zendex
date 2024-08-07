import React from "react";
import { Card, CardHeader, Typography, Box, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import Dropdown from "../../UIComp/dropdown/Dropdown";
import { useForm } from "react-hook-form";
import { primaryColor } from "../../ThemeColor";

const StyledCard = styled(Card)({
  width: "100%",
  height: "270px",
});

const StyledCardHeader = styled(CardHeader)({
  borderBottom: "1px solid #e0e0e0",
  backgroundColor: primaryColor,
  padding: "10px",
});

const StyledCardTitle = styled(Typography)({
  fontSize: "17px",

  display: "flex",
  alignItems: "center",
  gap: "5px",
  color: "white",
  fontFamily: "system-ui",
});

const Container = styled(Box)`
  font-family: "system-ui";
  background-color: #fff;
  padding: 20px;
`;

const Properties = () => {
  const {
    formState: { errors },
    control,
  } = useForm();
  return (
    <StyledCard variant="outlined">
      <StyledCardHeader
        title={
          <StyledCardTitle>
            <AssignmentOutlinedIcon style={{ fontSize: "32px" }} />
            Properties
          </StyledCardTitle>
        }
      />
      <Container>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={6} md={6}>
              <Dropdown
                control={control}
                maxMenuHeight={200}
                id="transactionStage"
                placeholder="Select"
                isMulti={true}
                label={"Priority"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Dropdown
                control={control}
                maxMenuHeight={200}
                id="transactionStage"
                placeholder="Select"
                isMulti={true}
                label={"Status"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Dropdown
                control={control}
                maxMenuHeight={200}
                id="transactionStage"
                placeholder="Select"
                isMulti={true}
                label={"Source"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Dropdown
                control={control}
                maxMenuHeight={200}
                id="transactionStage"
                placeholder="Select"
                isMulti={true}
                label={"Type"}
                isRequired={false}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              style={{ justifyContent: "flex-end", display: "flex" }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="small"
                style={{ backgroundColor: primaryColor }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </StyledCard>
  );
};

export default Properties;
