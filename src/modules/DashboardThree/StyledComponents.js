import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Avatar,
  Card as MuiCard,
  CardContent,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const StyledAppBar = styled(AppBar)`
  background-color: #fff;
  color: #000;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const SearchWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: #f1f1f1;
  margin-left: 0;
  width: 100%;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  padding: 10px;
  height: 100%;
  position: absolute;
  pointer-events: none;
`;

export const StyledInputBase = styled(InputBase)`
  padding-left: calc(1em + 32px);
  width: 100%;
`;

export const Card = styled(MuiCard)`
  margin: 10px;
`;

export const CardTitle = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
`;

export const CardContentWrapper = styled(CardContent)`
  display: flex;
  flex-direction: column;
  // align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
  border-radius: 15px;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 10px;
  // border: 1px solid red;
`;
