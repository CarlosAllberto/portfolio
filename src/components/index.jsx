import { AppBar, Container, Typography, Toolbar, Box, 
IconButton, Menu, MenuItem, Button } from "@mui/material";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Header = () => {
    let pages = ["home", "skills", "sobre", "projetos", "contato"];
    return(
        <>
            <AppBar sx={{ background: "#0000004a" }} classes={{root: "header"}}>
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
                                <MenuIcon />
                            </IconButton>
                            <Menu>
                                {pages.map((page) => (
                                    <MenuItem key={page}>
                                        <Typography>
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <BubbleChartIcon sx={{ fontSize: "3rem" }} />
                        <Typography 
                            component="a"
                            href="/"
                            sx={{ color: "whitesmoke", textDecoration: "none", fontWeight: 700, fontSize: "1.3rem", flexGrow: { sm: 0, xs: 1 } }}
                        >
                        </Typography>
                        <Box edge="end" sx={{ display: {xs: "none", sm: "flex"}, flexGrow: 1 }}>
                            {pages.map((page) => (
                                <Button color="inherit" key={page} sx={{fontWeight: 600, padding: "0 25px", "&:hover": {color: "violet"}}}>
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box>
                            <a href="#"><LinkedInIcon /></a>
                            <a href="#"><GitHubIcon /></a>
                            <a href="#"><InstagramIcon /></a>
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