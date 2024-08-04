// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import Button from "@mui/material/Button"; // Import Button
// import { Routes, Route, useNavigate } from "react-router-dom"; // Import Routes and Route
// import TestComponent from "./Components/TestComponent"; // Sample component import

// import Main from "./Main";
// import DashboardTwo from "./DashBoardTwo/DashBoardTwo";

// import DashboardFive from "./DashboardThree/DashboardFour";
// import DashBoardComp from "./DashboardThree/DashBoardComponents/DashBoardComp";
// import MainTicket from "./TicketsFlow/TicketsComponent/MainTicket";
// import SearchFilter from "./TicketsFlow/TicketsComponent/SearchFilter";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
//   backgroundColor: "grey", // Change this to your desired color
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const handleNavigation = (path) => {
//     navigate(path); // Navigate to the specified path
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: "none" }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ color: "white", cursor: "pointer" }}
//             onClick={() => handleNavigation("/")}
//           >
//             Zendesk Portal
//           </Typography>
//           <Box sx={{ flexGrow: 1 }} />
//           {/* This will push the button to the right */}
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => alert("Button clicked!")}
//             style={{ marginRight: "10px" }}
//           >
//             Raise Ticket
//           </Button>
//           <AccountCircleOutlinedIcon />
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "rtl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {[
//             "Dashboard",
//             "DashboardTwo",
//             "dashboardthree",
//             "Starred",
//             "Send email",
//             "Drafts",
//           ].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: "block" }}>
//               <ListItemButton
//                 onClick={() =>
//                   handleNavigation(text.toLowerCase().replace(" ", "-"))
//                 } // Navigate on click
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {["All mail", "Trash", "Spam"].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: "block" }}>
//               <ListItemButton
//                 onClick={() =>
//                   handleNavigation(text.toLowerCase().replace(" ", "-"))
//                 } // Navigate on click
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         <Routes>
//           {/* Define your routes here */}
//           <Route path="/" element={<DashboardFive />} /> {/* Default route */}
//           <Route path="/dashboard" element={<DashboardFive />} />
//           <Route path="/dashboardtwo" element={<DashboardTwo />} />
//           <Route path="/dashboardthree" element={<DashboardFive />} />
//           <Route path="/Starred" element={<DashBoardComp />} />
//           <Route path="/drafts" element={<TestComponent />} />
//           <Route path="/all-mail" element={<TestComponent />} />
//           <Route path="/trash" element={<TestComponent />} />
//           <Route path="/spam" element={<TestComponent />} />
//           <Route path="/total-tickets" element={<SearchFilter />} />
//           <Route path="/open-tickets" element={<>{"juu"}</>} />
//           <Route path="/closed-tickets" element={<>{"juu"}</>} />
//           <Route path="/pending-tickets" element={<>{"juu"}</>} />
//         </Routes>
//       </Box>
//     </Box>
//   );
// }

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button"; // Import Button
import { Routes, Route, useNavigate } from "react-router-dom"; // Import Routes and Route
import TestComponent from "./Components/TestComponent"; // Sample component import

import Main from "./Main";
import DashboardTwo from "./DashBoardTwo/DashBoardTwo";
import DashboardFive from "./DashboardThree/DashboardFour";
import DashBoardComp from "./DashboardThree/DashBoardComponents/DashBoardComp";
import MainTicket from "./TicketsFlow/TicketsComponent/MainTicket";
import SearchFilter from "./TicketsFlow/TicketsComponent/SearchFilter";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RaiseForm from "./TicketsFlow/TicketsComponent/RaiseForm";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: "grey", // Change this to your desired color
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "white", cursor: "pointer" }}
            onClick={() => handleNavigation("/")}
          >
            Zendesk Portal
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/* This will push the button to the right */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleNavigation("/raise-ticket")}
            style={{ marginRight: "10px" }}
          >
            Raise Ticket
          </Button>
          <AccountCircleOutlinedIcon />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Dashboard",
            "DashboardTwo",
            "dashboardthree",
            "Starred",
            "Send email",
            "Drafts",
          ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() =>
                  handleNavigation(text.toLowerCase().replace(" ", "-"))
                } // Navigate on click
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() =>
                  handleNavigation(text.toLowerCase().replace(" ", "-"))
                } // Navigate on click
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<DashboardFive />} /> {/* Default route */}
          <Route path="/dashboard" element={<DashboardFive />} />
          <Route path="/dashboardtwo" element={<DashboardTwo />} />
          <Route path="/dashboardthree" element={<DashboardFive />} />
          <Route path="/Starred" element={<DashBoardComp />} />
          <Route path="/drafts" element={<TestComponent />} />
          <Route path="/all-mail" element={<TestComponent />} />
          <Route path="/trash" element={<TestComponent />} />
          <Route path="/spam" element={<TestComponent />} />
          <Route path="/total-tickets" element={<SearchFilter />} />
          <Route path="/open-tickets" element={<SearchFilter />} />
          <Route path="/closed-tickets" element={<SearchFilter />} />
          <Route path="/pending-tickets" element={<SearchFilter />} />
          <Route path="/raise-ticket" element={<RaiseForm />} />
        </Routes>
      </Box>
    </Box>
  );
}
