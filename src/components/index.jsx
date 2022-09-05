import { useState } from "react";
import { AppBar, Container, Typography, Toolbar, Box, 
IconButton, Button } from "@mui/material";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Header = () => {
    var [menu, setMenu] = useState(false);

    return(
        <>
            <AppBar classes={{root: "header"}}>
                <Container>
                <Box sx={{ display: menu ? "block" : "none", width: "100vw", heith: "100%" }}>
                    <Button href="#home" color="inherit" sx={{display: "block"}} classes={{root: "link"}}>
                        home
                    </Button>
                    <Button href="#skills" color="inherit" sx={{display: "block"}} classes={{root: "link"}}>
                        skills
                    </Button>
                    <Button href="#sobre" color="inherit" sx={{display: "block"}} classes={{root: "link"}}>
                        sobre
                    </Button>
                    <Button href="#projects" color="inherit" sx={{display: "block"}} classes={{root: "link"}}>
                        projetos
                    </Button>
                    <Button href="#contact" color="inherit" sx={{display: "block"}} classes={{root: "link"}}>
                        contato
                    </Button>
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
                        <BubbleChartIcon sx={{ fontSize: "3rem" }} classes={{root: "logo"}} />
                        <Typography 
                            component="a"
                            href="/"
                            sx={{ color: "whitesmoke", textDecoration: "none", fontWeight: 700, fontSize: "1.3rem", flexGrow: { sm: 0, xs: 1 } }}
                        >
                        </Typography>
                        <Box edge="end" sx={{ display: {xs: "none", sm: "flex"}, flexGrow: 1 }}>
                            <Button href="#home" color="inherit" classes={{root: "link"}}>
                                home
                            </Button>
                            <Button href="#skills" color="inherit" classes={{root: "link"}}>
                                skills
                            </Button>
                            <Button href="#sobre" color="inherit" classes={{root: "link"}}>
                                sobre
                            </Button>
                            <Button href="#projects" color="inherit" classes={{root: "link"}}>
                                projetos
                            </Button>
                            <Button href="#contact" color="inherit" classes={{root: "link"}}>
                                contato
                            </Button>
                        </Box>
                        <Box>
                            <a href="https://www.linkedin.com/in/carlosallberto344" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                            <a href="https://www.github.com/CarlosAllberto/" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                            <a href="https://www.instagram.com/carlosallberto_s/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
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
            <Box style={{ background: "#0000004a", bottom: 0, margin: "auto" }} pb={6} textAlign="center" className="footer">
                <Container>
                    <Toolbar>
                        <Box margin="auto">
                            <a href="https://www.linkedin.com/in/carlosallberto344" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                            <a href="https://www.github.com/CarlosAllberto/" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                            <a href="https://www.instagram.com/carlosallberto_s/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                        </Box>
                    </Toolbar>
                    <Box p={2}>
                        <Button href="#home" color="inherit" classes={{root: "link"}}>
                            home
                        </Button>
                        <Button href="#skills" color="inherit" classes={{root: "link"}}>
                            skills
                        </Button>
                        <Button href="#sobre" color="inherit" classes={{root: "link"}}>
                            sobre
                        </Button>
                        <Button href="#projects" color="inherit" classes={{root: "link"}}>
                            projetos
                        </Button>
                        <Button href="#contact" color="inherit" classes={{root: "link"}}>
                            contato
                        </Button>
                    </Box>
                    <Box>
                        <typography
                            variant="p"
                        >
                            Copyright © 2022 Carlos Alberto • Desenvolvedor & Hacker Etico
                        </typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
}