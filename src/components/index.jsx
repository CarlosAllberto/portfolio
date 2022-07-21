import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppBar, Container, Typography, Toolbar, Box, 
IconButton, Menu, MenuItem, Button } from "@mui/material";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    var [menu, setMenu] = useState(false);

    let pages = ["home", "skills", "sobre", "projetos", "contato"];
    return(
        <>
            <AppBar sx={{ background: "#0000004a" }} classes={{root: "header"}}>
                <Container>
                <Box sx={{ display: menu ? "block" : "none", width: "100vw", heith: "100%" }}>
                    <Menu>
                    <MenuItem>
                    <Typography variant="Button" href="#home">home</Typography>
                    <Typography variant="Button" href="#skills">skills</Typography>
                    <Typography variant="Button" href="#sobre">sobre</Typography>
                    <Typography variant="Button" href="#projects">projects</Typography>
                    <Typography variant="Button" href="#contact">contact</Typography>
                    </MenuItem>
                    </Menu>
                </Box>
                    <Toolbar>
                        <Box sx={{ display: {xs: "flex", sm: "none"} }}>
                            <IconButton 
                                color="inherit"
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                edge="start"
                                onClick={() => setMenu(!menu)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <BubbleChartIcon sx={{ fontSize: "3rem" }} />
                        <Typography 
                            component="a"
                            href="/"
                            sx={{ color: "whitesmoke", textDecoration: "none", fontWeight: 700, fontSize: "1.3rem", flexGrow: { sm: 0, xs: 1 } }}
                        >
                        </Typography>
                        <Box edge="end" sx={{ display: {xs: "none", sm: "flex"}, flexGrow: 1 }}>
                            <Button href="#home" color="inherit" sx={{fontWeight: 600, padding: "0 25px", "&:hover": {color: "violet"}}}>
                                home
                            </Button>
                            <Button href="#skills" color="inherit" sx={{fontWeight: 600, padding: "0 25px", "&:hover": {color: "violet"}}}>
                                skills
                            </Button>
                            <Button href="#sobre" color="inherit" sx={{fontWeight: 600, padding: "0 25px", "&:hover": {color: "violet"}}}>
                                sobre
                            </Button>
                            <Button href="#projects" color="inherit" sx={{fontWeight: 600, padding: "0 25px", "&:hover": {color: "violet"}}}>
                                projetos
                            </Button>
                            <Button href="#contact" color="inherit" sx={{fontWeight: 600, padding: "0 25px", "&:hover": {color: "violet"}}}>
                                contato
                            </Button>
                        </Box>
                        <Box>
                        <a href="https://www.linkedin.com/in/carlosallberto344" target="_blank"><LinkedInIcon /></a>
                            <a href="https://www.github.com/CarlosAllberto/" target="_blank"><GitHubIcon /></a>
                            <a href="https://www.instagram.com/carlosallberto_s/" target="_blank"><InstagramIcon /></a>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
} 

export const Footer = () => {
    return(
        <>
            <Box style={{ background: "#0000004a", bottom: 0 }} className="footer">
                <Container>
                    <Toolbar>
                    <Box sx={{ display: {xs: "flex", sm: "none"} }}>
                            <IconButton 
                                color="inherit"
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                edge="start"
                            >
                            </IconButton>
                        </Box>
                        <BubbleChartIcon sx={{ fontSize: "3rem" }} />
                        <Typography 
                            component="a"
                            href="/"
                            sx={{ color: "whitesmoke", textDecoration: "none", fontWeight: 700, fontSize: "1.3rem", flexGrow: 1 }}
                        >
                        </Typography>
                        <Box>
                            <a href="#"><LinkedInIcon /></a>
                            <a href="#"><GitHubIcon /></a>
                            <a href="#"><InstagramIcon /></a>
                        </Box>
                    </Toolbar>
                </Container>
            </Box>
        </>
    );
}