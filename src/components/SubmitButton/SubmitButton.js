import './SubmitButton.css';

export const SubmitButton = props => {
	const { text } = props;

	return (
		<button className='button'>
			{ text }
		</button>
	)
}