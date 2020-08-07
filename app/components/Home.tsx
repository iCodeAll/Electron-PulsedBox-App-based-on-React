import React from 'react';
import clsx from 'clsx';
// import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import WebIcon from '@material-ui/icons/Web';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const useStyles = makeStyles((theme) => ({
  root: {
    '& label.Mui-focused': {
      color: 'white',

       },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#bbb',
      },
      "&:hover .MuiOutlinedInput-root .MuiInput-underline:before": {
        borderBottomColor: "red"
      },
    '& .MuiInputBase-input': {
      '&:hover .MuiInput-underline:before': {
        borderBottomColor: '#bbb',  
      }
      },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#bbb',
    },
    display: 'flex',
    width: '90%',
    margin: '0 auto',
    flexDirection: 'column',
    placeContent: 'center',
    alignItems: 'start',
    background: 'linear-gradient(0deg, #333 30%, #444 60%, #333 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(5, 5, 5, .3)',
    color: 'white',
    height: 'calc(100vh - 60px)',
    padding: '0 30px'
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textFieldWrapper: {
    flex: '1 1 auto !important'
  },
  inputStyles:{
    color: '#bbb',
    width: '100% !important'
  },
  inputWrapper: {
    padding: '20px 0'
  },
  icon: {
    flex: '0 0 30px !important'
  },
  submit: {
    marginTop: "30px"
  },
  textField: {
    color: '#bbb !important',
    borderColor: '#bbb'
  },
  warn: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: '13.5px',
    lineHeight: "20px"
  },
  loginWrapper:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '300px',
    marginTop: "50px"
  },
  info:{
    width: '400px',
    marginTop: "50px"
  },
  space: {
    flex: '0 0 200px',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    margin: '0 auto'
  },
  lightBlue: {
    color: 'rgb(80,211,255)'
  },
  title: {
    margin: '0 auto',
  },
  divider: {
    width: "1px",
    background: "#fff",
    height: "50%"
  }
}));


export default function Home(): JSX.Element {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop: any) => (event:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
  };
  return (
    <div className={classes.root} ata-tid="container">
      <h1 className={clsx(classes.title, classes.lightBlue)}>Welcome to pulsedBox</h1>
      <div className={classes.wrapper}>
      <div className={classes.loginWrapper}>
      <h3 className={classes.lightBlue}>Login to your seedbox</h3>
      <Grid className={classes.inputWrapper} container spacing={1} alignItems="flex-end">
        <Grid item className={classes.icon} >
          <WebIcon />
        </Grid>
        <Grid item className={classes.textFieldWrapper} >
          <TextField 
            fullWidth 
            id="server" 
            label="Server: "
            InputLabelProps={{
              className: classes.textField
            }}
            InputProps={{
              classes: {
                  input: classes.textField
              }
            }}
          />
        </Grid>
      </Grid>
      <Grid className={classes.inputWrapper} container spacing={1} alignItems="flex-end">
        <Grid item className={classes.icon}>
          <AccountCircle />
        </Grid>
        <Grid item className={classes.textFieldWrapper}>
          <TextField 
            fullWidth  
            id="username" 
            label="Username:" 
            InputLabelProps={{
              className: classes.textField
            }}
            InputProps={{
              classes: {
                  input: classes.textField
              }
            }}
          />
        </Grid>
      </Grid>
      <Grid className={classes.inputWrapper} container spacing={1} alignItems="flex-end">
        <Grid item>
          <LockOpenIcon/>
        </Grid>
        <FormControl className={clsx(classes.margin, classes.textFieldWrapper)}>
          <InputLabel className={classes.inputStyles} htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            className={classes.inputStyles}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  className={classes.inputStyles}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        className={classes.submit}
        startIcon={<ExitToAppIcon />}
      >
        Login
      </Button>
      <label className={classes.warn}>This software is in beta stage, and will continuously be upgraded.</label>
      </div>
      <div className={classes.space}>
        <div className={classes.divider}></div>
      </div>
      <div className={classes.info}>
        <h3 className={classes.lightBlue}>BETA SOFTWARE</h3>
        <h4>There are known bugs</h4>
        <ul>
          <li>
          Blank screen after attempt to login: Wrong login credentials, restart pulsedBox and try again
          </li>
          <li>
          Attachment to .torrent files: Might need to be done manually from "explorer", right click on a .torrent file and choose "Open with..."
          </li>
          <li>
          Adding too many .torrents too fast might fail (still uploading last one)
          </li>
          <li>
          ruTorrent update on adding .torrent is delayed by a few seconds (you won't see new torrent immediately)
          </li>
          <li>
          Disk Quota context text not showing on ruTorrent (bottom left), only % visible.
          </li>
          <li>
          No loading indicators
          </li>
          <li>
          dding torrent from "shell" (system) without pulsedBox running fails most times
          </li>
        </ul>
        <label>Absolutely no warranties given. You use this software at your own risk! Absolutely no modifications allowed, or re-distribution (repackaging)</label>
        <p>Feedback can be given via help desk</p>
      </div>
  </div>
  </div>
    // <div className={styles.container} data-tid="container">
    //   <h2>Home</h2>
    //   <Link to={routes.COUNTER}>to Counter</Link>
    // </div>
  );
}
