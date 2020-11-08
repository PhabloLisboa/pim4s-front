import React, { useState } from "react";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
  useTheme,
  Red,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../../store/actions/authAction";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

export default function InternalLayout(props) {
  const { window } = props;
  const user = useSelector((state) => state.Auth.user);
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const objectUser = user.funcionario || user.client;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menu = {
    1: ["Dashboard", "Usuários", "Criptoativos"],
    2: ["Dashboard", "Usuários", "Criptoativos"],
    3: ["Dashboard", "Conta", "Investimentos", "Contratos"],
  };
  return (
    <>
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "black" }}
      >
        <Toolbar>
          <div className="w-full flex justify-between self-center">
            <Typography className="self-center" variant="h6"></Typography>

            <Link to="/">
              <Button
                color="primary"
                onClick={() => dispatch(authActions.logout())}
              >
                Sair
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        onClose={handleDrawerToggle}
        variant="permanent"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        style={{ backgroundColor: "#000" }}
      >
        <div
          className={classes.drawer}
          style={{ backgroundColor: "#000", height: "100%" }}
        >
          <div
            className="flex justify-around flex-col text-center"
            style={{ height: "20%", backgroundColor: "#303F9F" }}
          >
            <img
              className="self-center"
              src="https://icons-for-free.com/iconfiles/png/512/lord+of+the+rings+old+man+wizard+icon-1320166692548419860.png"
              style={{ height: "60%", maxWidth: "40%" }}
            />
            {user.id && objectUser && (
              <>
                <Typography variant="subtitle1">{objectUser.name}</Typography>
                <Typography variant="subtitle2">{user.email}</Typography>
              </>
            )}
          </div>
          <List>
            {user.id &&
              menu[user.role.id].map((text, index) => (
                <Link key={text} to={`/${text}`}>
                  <ListItem
                    style={{
                      color: location.pathname === `/${text}` ? "#000" : "#fff",
                      backgroundColor:
                        location.pathname === `/${text}`
                          ? "#303F9F"
                          : "transparent",
                    }}
                    button
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ))}
          </List>
        </div>
      </Drawer>
      <div className={classes.content} style={{ background: "#fafafa" }}>
        <div
          className="w-full sm:px-8 h-full flex justify-center flex-col lg:self-center"
          style={{
            background: "#fafafa",
            // background: "red",
            marginTop: "5rem",
          }}
        >
          {props.children}
        </div>
      </div>
    </>
  );
}
