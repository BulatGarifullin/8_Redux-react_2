import { Button } from '../button/button';
import { useDispatch } from 'react-redux';
import { Search, Sorting } from './components';
import { NEW_TODO_ID } from '../../constants';
import styles from './control-panel.module.css';
import { ACTION_TYPE } from '../../actions';

export const ControlPanel = () => {
	const dispatch = useDispatch();

	const onTodoAdd = () => {
		dispatch({
			type: ACTION_TYPE.ADD_TODO,
			payload: {
				id: NEW_TODO_ID,
				title: '',
				completed: false,
			},
		});

		dispatch({
			type: ACTION_TYPE.EDIT_TODO,
			payload: {
				id: NEW_TODO_ID,
				title: '',
			},
		});
	};

	return (
		<div className={styles.controlPanel}>
			<Search />
			<Sorting />
			<Button onClick={onTodoAdd}>✚</Button>
		</div>
	);
};
