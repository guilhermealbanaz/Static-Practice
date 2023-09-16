import './InputDropDown.css';

export const InputDropDown = (props) => {
	const { title, teams, isRequired = false, onChange, value } = props;

	return (
		<div className='dropdown'>
			<label>{ title }</label>
			<select value={value} onChange={e => onChange(e.target.value)} required={isRequired}>
				{ teams.map(team => <option key={team}>{ team }</option>) }
			</select>
		</div>
	)
}