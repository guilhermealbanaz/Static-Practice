import './InputText.css';

export const InputText = props => {
	const { title, isRequired = false, onChange, value } = props;

	return (
		<div className='input'>
			<label>{ title }</label>
			<input value={value} onChange={e => onChange(e.target.value)} required={isRequired} placeholder={`Digite seu ${title}`}/>
		</div>
  	)
}
