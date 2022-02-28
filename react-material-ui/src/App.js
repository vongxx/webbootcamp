import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import { AppBar, Toolbar, Typography, Container, Button, GridList, GridListTile, Card, CardHeader, CardActions } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
 
const useStyles = makeStyles(theme => ({
  root: {
    padding: "120px"
  }
}));

function App() {
  return (
    <div className="App">
      <CustomAppBar/>
      <Hero/>
      {/* <NavBar/> */}
      {/* <Button variant="contained" color="primary">Hello World</Button> */}
    </div>
  );
}

function CustomAppBar() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Material UI Demo
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function Hero() {
  const classes = useStyles();
 
  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom>
          Material UI Demo
        </Typography>
 
        <Typography variant="p" gutterBottom>
          Hero Component
        </Typography>
      </div>
    </Container>
  );
}

function Blog() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Blog
      </Typography>
      <GridList className={classes.gridList} cols={3} spacing={30}>
        {tileData.map(tile => (
          <GridListTile cols={1} className={classes.gridTile}>
            <Card>
              <CardHeader title={tile} />
              <CardActions>
                <Button size="small" color="primary" variant="outlined">
                  Read more
                </Button>
              </CardActions>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}


export default App;
