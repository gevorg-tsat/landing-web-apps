/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, MouseEvent } from "react";
import Logo from "../Assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { NestedDropdown } from "mui-nested-menu";

const menuItemsData = {
  label: 'Меню',
  items: [
    {
      label: 'Контакты',
      items: [
        {
          label: 'ТГ',
          callback: (event, item) => console.log('Save As > Option 1 clicked', event, item),
        },
        {
          label: 'VK',
          callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
        },
      ],
    }
  ],
};

/* TODO выпадающее меню из навбара и из контактов ссылки на тг и тд */
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} width={200} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Главная</a>
        <a href="">О проекте</a>
        <a href="">Работа</a>
        <a href="">Команда</a>
      </div>
      <div>
        <NestedDropdown
          menuItemsData={menuItemsData}
          MenuProps={{ elevation: 3 }}
          ButtonProps={{ variant: 'outlined' }}
          onClick={() => console.log('Clicked')}
        />
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
