import React from 'react';
import styles from 'styles/layout.module.css';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import HomeIcon from '@mui/icons-material/Home';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MoreIcon from '@mui/icons-material/MoreVert';
import FeedIcon from '@mui/icons-material/Feed';

const NavbarActions = [
  {
    href: "/projects",
    label: "Projects",
  }
];
const SidebarActions = [
  { name: 'Linked In', icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/orenthal-hill/' },
  { name: 'Github', icon: <GitHubIcon />, href: 'https://github.com/ojhill' },
  { name: 'Email', icon: <EmailIcon />, href: 'mailto:ojhill98@gmail.com' },
  {
    name: 'Resume',
    icon: <FeedIcon />,
    href: 'https://firebasestorage.googleapis.com/v0/b/oj-hill-portfolio.appspot.com/o/Orenthal_Hill_Resume.pdf?alt=media&token=2c5e50ab-e448-478c-ae8f-299d0ae28fd6',
  },
];



export default function Layout({ children }) {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(true);
  return (
    <div>
      {children}
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit">
            <Link href="/" passHref>
              <HomeIcon fontSize="large" />
            </Link>
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
         
          <MenuItem>
            <Link href="/projects">Projects</Link>
          </MenuItem>
        </Toolbar>
      </AppBar>

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        color="secondary"
        sx={{ position: 'fixed', bottom: 80, left: 20 }}
        icon={<MoreIcon />}
        open={sidebarIsOpen}
        onClick={() =>setSidebarIsOpen(!sidebarIsOpen)}
      >
        {SidebarActions.map(action => (
          <SpeedDialAction
            key={action.href}
            icon={
              <a href={action.href}
                target="blank"
                rel="noreferrer"
                >
                {action.icon}
              </a>
            }
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
