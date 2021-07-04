import { connect } from 'react-redux';
import { add, remove, toggle } from './actions'
import { useState } from 'react';
import { Box, Button, Checkbox, Container, Grid, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText,
TextField, } from '@material-ui/core';
import { Delete, Remove } from '@material-ui/icons';
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = props => {
const [text, setText] = useState('');
	return (
		<Router>
			<Route path="/" exact>
				<Box marginTop="1rem">
					<Container maxWidth="sm">
						<Grid container justify="center" alignItems="center">
							<TextField value={text} onChange={ (e)=> setText(e.target.value) } variant="outlined" size="small"></TextField>
							<Button onClick={ ()=> {props.add(text); setText('')} }>Add</Button>
						</Grid>
						{ props.todos ? props.todos.map( todo => { return (
						<ListItem key={todo.id} role={undefined} dense button >
							<Grid container justify="center" alignItems="center">
								<ListItemIcon>
									<Checkbox edge="start" checked={todo.completed ? 'checked': ''} tabIndex={-1} disableRipple
										inputProps={{ 'aria-labelledby': todo.name }} onClick={()=> props.toggle(todo.id)}
										/>
								</ListItemIcon>
								<ListItemText id={todo.id} primary={todo.name}  onClick={()=> props.toggle(todo.id) } />
								<ListItemSecondaryAction>
									<IconButton edge="end" aria-label="comments" onClick={()=> props.remove(todo.id)}>
										<Delete />
									</IconButton>
								</ListItemSecondaryAction>
							</Grid>
						</ListItem> ) }) : '' }
					</Container>
				</Box>
			</Route>
		</Router>
	);
}


const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default connect(
	mapStateToProps,
	{ add, remove, toggle }
)(App);