import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header, Footer } from "./components";
import Typewriter from 'typewriter-effect';
import { Box, Grid, Container, Typography, Button, Tooltip, Alert } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import emailjs from 'emailjs-com';

function App() {
  const initialState = {
    "nome": "",
    "email": "",
    "assunto": "",
    "mensagem": ""
  }
  const [dados, setDados] = useState(initialState);
  const [emailSuccess, setEmailsuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(dados);
    if(dados.nome === "" || dados.email === "") {
      window.alert("Preencha os campos obrigatorios *");
    } else {
      if(dados.email.indexOf("@" && ".com") !== -1) {
        emailjs.send("portfolioMessage", "template_1hhq8j9", dados, "bpEnz_KDXrbuvBnSM")
        .then((result) => {
          setEmailsuccess(!emailSuccess);
          setDados(initialState);
        })
        .catch(err => window.alert("Erro desconhecido, tente novamente."));
      } else {
        window.alert("Digite um email valido");
      }
    }
  }
  useEffect(() => {
    AOS.init({disable: "mobile"});
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <section id="home">
        <Container>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12} order={{sm: 1, xs: 2}} classes={{root: "content"}}>
              <Typography
                variant="span"
                className="welcome"
              >
                Welcome to my Portfólio
              </Typography>
              <Typography
                component="h1"
                fontWeight={1000}
                color="white"
                variant="h3"
              >
                Hi! I'm Carlos 
                <Typewriter
                  options={{
                    strings: ['Dev Full Stack', 'Hacker Etical'],
                    autoStart: true,
                    loop: true,
                    delay: 75
                  }}
                />
              </Typography>
              <Typography
                variant="p"
                color="white"
                fontSize="1.2rem"
              >
                Seja muito bem vindo ao meu Portfolio <br/>estou muito feliz por você estar aqui.
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12} order={{sm: 2, xs: 1}} classes={{root: "contentImage"}}>
              <div className="float1" data-aos="fade-right" data-aos-duration="2000">
                <ArticleIcon/>
                <p>Baixar CV</p>
              </div>
              <a href="#contact">
                <div className="float2" data-aos="fade-left" data-aos-duration="2000">
                  <ContactPageIcon/>
                  <p>Contato</p>
                  <TouchAppIcon sx={{ position: "relative", top: "25px", fontSize: "2rem" }} />
                </div>
              </a>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id="skills">
        <Container maxWidth="md" align="center">
          <Box>
            <Typography
              variant="h3"
              fontWeight={800}
            >
              Minhas Skills
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6} lg={2}>
              <Tooltip classes={{ root: "tooltip" }} title={
                <>
                  <h2>JavaScript - linguagem de programação voltada para web</h2>
                  <img widht="200" height="170" src="https://www.targethost.com.br/site/wp-content/uploads/2019/03/MaxPixel.freegreatpicture.com-Programming-Program-Source-Code-Code-Javascript-3337044.jpg" alt="..." />
                </>
                }>
                <img align="center" alt="JS" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
              </Tooltip>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Tooltip classes={{ root: "tooltip" }} title={
                <>
                  <h2>HTML5 - linguagem de marcação de texto</h2>
                  <img height="170" src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/pexels-pixabay-270404.jpg" alt="..." />
                </>
                }>
                <img align="center" alt="HTML" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg"/>
              </Tooltip>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Tooltip classes={{ root: "tooltip" }} title={
                <>
                  <h2>CSS3 - linguagem de folha de estilo</h2>
                  <img height="190" src="https://www.jotform.com/blog/wp-content/uploads/2008/07/photo-1505685296765-3a2736de412f.jpeg" alt="..." />
                </>
                }>
                <img align="center" alt="CSS" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg"/>
              </Tooltip>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Tooltip classes={{ root: "tooltip" }} title={
                <>
                  <h2>SASS - linguagem de script de pré-processador que é interpretada ou compilada em css</h2>
                  <img height="170" src="https://res.cloudinary.com/practicaldev/image/fetch/s--5_f8MK5S--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ryzba8onw9sv5no8m103.png" alt="..." />
                </>
                }>
                <img align="center" alt="SASS" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/>
              </Tooltip>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Tooltip classes={{ root: "tooltip" }} title={
                <>
                  <h2>React - biblioteca JS para construir interfaces de usuario baseadas em componentes</h2>
                  <img height="170" src="https://global-uploads.webflow.com/5ebc02b7be66aaaf272bb0c4/60ee2c9665dc45194bdc79cd_o-que-e-react-js-e-como-ele-funciona-para-seo.jpg" alt="..." />
                </>
                }>
                <img align="center" alt="React-js" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
              </Tooltip>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Tooltip classes={{ root: "tooltip" }} title={
                <>
                  <h2>NodeJS - ambiente de execução JavaScript back-end</h2>
                  <img height="200" src="https://miro.medium.com/max/1400/0*hEFTnzz-DUAjbtIG" alt="..." />
                </>
                }>
                <img align="center" alt="Node" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg"/>
              </Tooltip>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Tooltip classes={{ root: "tooltip" }} title={
                <>
                  <h2>PHP - linguagem de propósito geral voltada para web</h2>
                  <img height="160" src="https://www.cisoadvisor.com.br/wp-content/uploads/2021/03/php-script-language-linguagem.jpg" alt="..." />
                </>
                }>
                <img align="center" alt="PHP" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-plain.svg"/>
              </Tooltip>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Tooltip classes={{ root: "tooltip" }} title={
                <>
                  <h2>MySQL - sistema de gerenciamento de banco de dados</h2>
                  <img height="160" src="https://www.testingdocs.com/wp-content/uploads/MySQL-Table-Columns.png" alt="..." />
                </>
                }>
                <img align="center" alt="MySQL" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-plain.svg"/>
              </Tooltip>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Tooltip classes={{ root: "tooltip" }} title={
                <>
                  <h2>Python3 - linguagem de programação de alto nivel, interpretada e de proposito geral</h2>
                  <img height="170" src="https://t.ctcdn.com.br/Ecw_7ni14YQaQWTOh83I_NsVC1g=/512x288/smart/filters:format(webp)/i569772.jpeg" alt="" />
                </>
                }>
                <img align="center" alt="Python" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-plain.svg"/>
              </Tooltip>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Tooltip classes={{ root: "tooltip" }} title={
                <>
                  <h2>C - linguagem de programação de computador procedural de propósito geral</h2>
                  <img height="220" src="https://www.ufsm.br/app/uploads/sites/791/2020/09/aplicacoesC3.jpg" alt="..." />
                </>
                }>
                <img align="center" alt="C" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-plain.svg"/>
              </Tooltip>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Tooltip classes={{ root: "tooltip" }} title={
                <>
                  <h2>Linux - sistemas operacionais semelhantes ao Unix de código aberto baseados no kernel Linux</h2>
                  <img height="180" src="https://www.redhat.com/sysadmin/sites/default/files/styles/full/public/2020-02/blur-bright-business-codes-207580.jpg?itok=eUyGgeea" alt="..." />
                </>
                }>
                <img align="center" alt="Linux" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"/>
              </Tooltip>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Tooltip classes={{ root: "tooltip" }} title={
                <>
                  <h2>Bootstrap - framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web</h2>
                  <img height="200" src="https://1stwebdesigner.com/wp-content/uploads/2020/10/bootstrap-4-code-snippets.jpg" alt="..." />
                </>
                }>
                <img align="center" alt="Linux" height="60" width="80" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"/>
              </Tooltip>
            </Grid>
          </Grid>
          <Typography align="left" variant="p" sx={{display: {sm: "block", xs: "none", paddingTop: "20px"}}}>Passe o Mouse</Typography>
        </Container>
      </section>
      <section id="sobre">
        <Container maxWidth="md">
          <Box data-aos="fade-left" data-aos-duration="1000">
            <Typography
              variant="h3"
              fontWeight={800}
              align="center"
            >
              Sobre Mim
            </Typography>
            <img src="AREmoji_20220719_105135_54077.png" height={150} style={{borderRadius: "50%"}} alt="" />
            <Typography
             variant="p"
             fontSize="1.5rem"
            >
              Meu nome é Carlos e tenho 19 anos, sou Desenvolvesor WEB FullStack Estagiario, tambem gosto muito de segurança da informação.
            </Typography>
            <br /> <br />
            <Typography
              variant="p"
              fontSize="1.5rem"
            >
              Amo estudar coisas novas e ajudar pessoas a tirar dúvidas, eu não desisto até encontrar a solução para um problema de um sistema ou código.
            </Typography>
            <br /> <br />
            <Typography
             variant="p"
             fontSize="1.5rem"
            >
              Busco melhorar a cada dia e ter mais conhecimento do que ontem, nem que seja 1%.
            </Typography>
          </Box>
        </Container>
      </section>
      <section id="projects">
        <Container maxWidth="md">
          <Box data-aos="fade-right">
            <Typography
              variant="h3"
              fontWeight={800}
            >
              Projetos recentes
            </Typography>
            <Box className="play">
              <PlayArrowIcon onClick={() => alert("Em breve...")} sx={{ fontSize: "15rem", margin: "auto", display: "block", cursor: "pointer" }} />
              <h2 style={{display: "block", margin: "auto", textAlign: "center"}}>Press to Start!</h2>
            </Box>
          </Box>
        </Container>
      </section>
      <section id="contact">
        <Container maxWidth="md">
          <Box data-aos="fade-left" data-aos-duration="1000">
            <Typography
              variant="h3"
              fontWeight={800}
              align="center"
            >
              Contrate-me.
            </Typography>
            <p>Estou disponível para full-time, part-time e freelance. Conecte-se comigo através do e-mail: <a href="https://mailto:dasilvacarlosalberto344@gmail.com" target="_blank" rel="noreferrer">dasilvacarlosalberto344@gmail.com</a></p>
            <form onSubmit={sendEmail}>
              {emailSuccess ? <Alert severity="success">Email enviado com sucesso. muito obrigado pela escolha</Alert> : null}
              
              <Box sx={{display: {sm: "flex", xs: "block"}}}>
                <input value={dados.nome} onChange={e => setDados({...dados, nome: e.target.value})} type="text" placeholder="Seu nome *" className="input" style={{width: "50%", marginRight: "10px"}} />
                <input value={dados.email} onChange={e => setDados({...dados, email: e.target.value})} type="email" placeholder="Seu email *" className="input" style={{ width: "50%", marginLeft: "10px" }} />
              </Box>
              <Box>
              <input value={dados.assunto} onChange={e => setDados({...dados, assunto: e.target.value})} type="text" placeholder="Escreva um assunto" className="input"/>
              <textarea value={dados.mensagem} onChange={e => setDados({...dados, mensagem: e.target.value})} name="text" id="" rows="7" placeholder="Sua mensagem" className="input"></textarea>
              <Box display="flex" justifyContent="end">
                {emailSuccess ? 
                <Button variant="outlined" classes={{root: "button"}} disabled>Enviar</Button>:
                <Button variant="outlined" type="submit" classes={{root: "button"}}>Enviar</Button> }
              </Box>
              </Box>
            </form>
          </Box>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default App;
