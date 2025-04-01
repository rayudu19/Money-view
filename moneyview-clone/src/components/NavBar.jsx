import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Menu, MenuItem, InputBase, Box,  Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

const Logo = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: 'white',
});

const SearchBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '4px',
  padding: '5px',
  marginLeft: '20px',
});

const SearchInput = styled(InputBase)({
  marginLeft: '10px',
  width: '100%',
});

const NavLinks = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  width: '80%',
});

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Logo>MoneyView</Logo>

        {/* Navbar Sections */}
        <NavLinks>
          {/* Credit Cards */}
          <Menu>
            <MenuItem onClick={handleMenuClick}>Credit Cards</MenuItem>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem component={Link} to="/credit-cards">HDFC Credit Card</MenuItem>
              <MenuItem component={Link} to="/credit-cards">SBI Credit Card</MenuItem>
              <MenuItem component={Link} to="/credit-cards">Popular Credit Card</MenuItem>
              <MenuItem component={Link} to="/credit-cards">IDFC First Credit Card</MenuItem>
              <MenuItem component={Link} to="/credit-cards">Axis Credit Card</MenuItem>
              <MenuItem component={Link} to="/credit-cards">ICICI Credit Card</MenuItem>
            </Menu>
          </Menu>

          {/* Loans */}
          <Menu>
            <MenuItem onClick={handleMenuClick}>Loans</MenuItem>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem component={Link} to="/loans">Personal Loan</MenuItem>
              <MenuItem component={Link} to="/loans">Bike Loan</MenuItem>
              <MenuItem component={Link} to="/loans">Car Loan</MenuItem>
              <MenuItem component={Link} to="/loans">Gold Loan</MenuItem>
              <MenuItem component={Link} to="/loans">Home Loan</MenuItem>
              <MenuItem component={Link} to="/loans">Property Loan</MenuItem>
            </Menu>
          </Menu>

          {/* Insurance */}
          <Menu>
            <MenuItem onClick={handleMenuClick}>Insurance</MenuItem>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem component={Link} to="/insurance">Health Insurance</MenuItem>
              <MenuItem component={Link} to="/insurance">Life Insurance</MenuItem>
            </Menu>
          </Menu>

          {/* EMI Calculators */}
          <Menu>
            <MenuItem onClick={handleMenuClick}>EMI Calculators</MenuItem>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem component={Link} to="/emi-calculators">Home Loan EMI Calculator</MenuItem>
              <MenuItem component={Link} to="/emi-calculators">Personal Loan EMI Calculator</MenuItem>
              <MenuItem component={Link} to="/emi-calculators">Business Loan EMI Calculator</MenuItem>
              <MenuItem component={Link} to="/emi-calculators">RD Calculator</MenuItem>
              <MenuItem component={Link} to="/emi-calculators">FD Calculator</MenuItem>
            </Menu>
          </Menu>

          {/* Credit Score */}
          <Menu>
            <MenuItem onClick={handleMenuClick}>Credit Score</MenuItem>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem component={Link} to="/credit-score">Check CIBIL Score by PAN Card</MenuItem>
              <MenuItem component={Link} to="/credit-score">CIBIL Score for Banks</MenuItem>
              <MenuItem component={Link} to="/credit-score">Check Free CIBIL Score</MenuItem>
              <MenuItem component={Link} to="/credit-score">Instant Loan without CIBIL</MenuItem>
            </Menu>
          </Menu>

          {/* Blogs */}
          <Menu>
            <MenuItem component={Link} to="/blogs">Blogs</MenuItem>
          </Menu>
        </NavLinks>

        {/* Search Bar */}
        <SearchBox>
          <SearchIcon />
          <SearchInput
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </SearchBox>

        {/* Sign In Button */}
        <Button variant="contained" color="secondary" style={{ marginLeft: '20px' }}>
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
