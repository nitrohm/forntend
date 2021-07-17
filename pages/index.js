import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'ทำครบ 10 อย่างรึยัง?';
    case 1:
      return 'แน่ใจนะ?';
    case 2:
      return 'โอเคตามนั้น';
    default:
      return 'Unknown stepIndex';
  }
}
export default function Home() {
  const useStyles = makeStyles({
    root: {
      width: 400,
    },
  });
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div >
      
    <Head>
      <title>Nitrohm_Shop</title>
    </Head>
  <main>
  <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      
    </IconButton>
    <Typography variant="h6" className={classes.title}>
    <Link href="/"><a>Home</a></Link> | 
    <Link href="/about"><a>about</a></Link> | 
    <Link href="/service"><a>service</a></Link> |
    <Link href="/components"><a>components</a></Link> |
    <Link href="/products/P002"><a>products</a></Link> |
    </Typography>
    
    
  </Toolbar>
</AppBar>

   <h1> <center>หน้าแรก</center></h1>
   
   <br />
   <center>
   <Link href="/"><a>Home</a></Link> | 
   <Link href="/about"><a>about</a></Link> | 
   <Link href="/service"><a>service</a></Link> | 
   <Link href="/products/P002"><a>products</a></Link> | </center>
   <br />
   <center>
   <Button variant="outlined" color="primary">
    Hello 
   </Button>
   <br/><br/>
   <Box component="span" m={1}>
   <Button variant="contained" color="primary">
  BOX
  </Button>
</Box>
<br/><br/>
<ButtonGroup color="primary" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
   </center>
   <center><br/>
  
   </center>
   <center>
   <Checkbox
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Checkbox
      color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Checkbox
      color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      </center>
      <br/>
      <center>
      <Switch
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Switch
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      </center>
      <br/>
      <center>
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
      </center>
      <br/>
      <center>
      <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
      <br/>
      <center>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" /><br/>
      <TextField id="filled-basic" label="Filled" variant="filled" /><br/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
      </center>
      <br/>
      <center>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  Open Menu
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose}>My account</MenuItem>
  <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu>
      </center>
      <br/>
      <center>
      <div className={classes.root}>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </div>
      </center>
      <br/>
      <center>
      <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
      </center>
    </div>
      </center>
  </main>  
    </div>
  )
}