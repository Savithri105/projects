import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme,
  Stack
} from "@mui/material";
import {
  KeyboardArrowDown,
  Menu as MenuIcon,
  Close as CloseIcon
} from "@mui/icons-material";
import clock from '../assets/clock.svg';
import line from '../assets/line.svg';
import taskmanagement from "../assets/taskmanagement.svg";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5rem 1rem'
      }}>
        {/* Logo and Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img className="h-12 w-12" src={taskmanagement} alt="Task Manager" />
          <Link
            to="/"
            className="text-2xl md:text-4xl font-bold text-teal-400 ms-3 md:ms-5"
            style={{ textDecoration: 'none' }}
          >
            Task Manager
          </Link>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {/* Madefor Dropdown */}
            <Box>
              <Button
                id="madefor-button"
                aria-controls={open ? "madefor-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDown />}
                sx={{
                  color: "#333",
                  textTransform: "none",
                  fontSize: '1rem'
                }}
              >
                Madefor
              </Button>
              <Menu
                id="madefor-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "madefor-button",
                }}
              >
                <MenuItem onClick={handleClose} component={Link} to="/TaskManagement">
                  <img src={taskmanagement} alt="Task" className="h-5 w-5 mr-2" />
                  <span className="text-teal-600">Task Management</span>
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/HabitForming">
                  <img src={line} alt="Habit" className="h-5 w-5 mr-2" />
                  <span className="text-teal-600">Habit Forming</span>
                </MenuItem>
              </Menu>
            </Box>

            <Link
              to="/pricing"
              className="hover:text-teal-600"
              style={{ textDecoration: 'none', color: '#333' }}
            >
              Pricing
            </Link>

            <Link
              to="/login"
              className="hover:text-teal-600"
              style={{ textDecoration: 'none', color: '#333' }}
            >
              Log in
            </Link>
          </Box>
        ) : (
          // Mobile Menu Icon
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <Stack
          spacing={2}
          sx={{
            padding: '1rem',
            borderTop: '1px solid #eee'
          }}
        >
          {/* Madefor Dropdown */}
          <Button
            id="mobile-madefor-button"
            aria-controls={open ? "mobile-madefor-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDown />}
            sx={{
              color: "#333",
              textTransform: "none",
              justifyContent: 'flex-start',
              padding: '0.5rem 0',
            }}
          >
            Madefor
          </Button>
          <Menu
            id="mobile-madefor-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "mobile-madefor-button",
            }}
          >
            <MenuItem onClick={handleClose} component={Link} to="/TaskManagement">
              <img src={taskmanagement} alt="Task" className="h-5 w-5 mr-2" />
              <span className="text-teal-600">Task Management</span>
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/HabitForming">
              <img src={line} alt="Habit" className="h-5 w-5 mr-2" />
              <span className="text-teal-600">Habit Forming</span>
            </MenuItem>
          </Menu>

          {/* Pricing & Login */}
          <Link
            to="/pricing"
            className="hover:text-teal-600"
            style={{
              textDecoration: 'none',
              color: '#333',
              fontSize: '1rem',
              padding: '0.5rem 0'
            }}
            onClick={toggleMobileMenu}
          >
            Pricing
          </Link>

          <Link
            to="/login"
            className="hover:text-teal-600"
            style={{
              textDecoration: 'none',
              color: '#333',
              fontSize: '1rem',
              padding: '0.5rem 0'
            }}
            onClick={toggleMobileMenu}
          >
            Log in
          </Link>
        </Stack>
      )}
    </AppBar>
  );
};

export default Navbar;
