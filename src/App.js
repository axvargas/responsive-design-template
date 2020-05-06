import React from 'react';

import './App.css';

import {
	createMuiTheme,
	responsiveFontSizes,
	MuiThemeProvider,
	Typography,
	Grid,
	Paper,
	makeStyles,
	

} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

	root: {
		width: '100%',
		flexGrow: 1,
		margin: '0px' //ojo
		
	},
	grid: {
		width: '100%',
		margin: '0px',
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		background: theme.palette.success.light,
	},
}));





function App() {
	const classes = useStyles();
	let theme = createMuiTheme();
	theme = responsiveFontSizes(theme);
	let paragrah = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam vero obcaecati illum! Labore id dolore facilis officiis, molestiae vel et totam aliquam velit, hic harum eligendi obcaecati temporibus fuga unde?
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas vel provident beatae sed, iusto, deserunt nihil in error placeat voluptatibus perferendis fugit aspernatur cum eum eius esse neque saepe odio!`
	return (
		<MuiThemeProvider theme={theme}>
			
				<Grid container spacing={3} className={classes.grid} >
					<Grid item xs={12}>
						<Paper className={classes.paper}><Typography variant="h2" gutterBottom>PATIENT APPOINTMENTS</Typography></Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}><Typography variant="h3" gutterBottom>{paragrah}</Typography></Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}><Typography variant="h3" gutterBottom>{paragrah}</Typography></Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>xs=6 sm=3</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>xs=6 sm=3</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>xs=6 sm=3</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>xs=6 sm=3</Paper>
					</Grid>
				</Grid>
		

		</MuiThemeProvider>
	);
}

export default App;
