import './InputText.css';

export const InputText = props => {
	const { title, isRequired = false, onChange, value, type = 'text' } = props;
	return (
		<div className={`box box-${type}`}>
			<label>{ title }</label>
			<input type={type} value={value} onChange={e => onChange(e.target.value)} required={isRequired} placeholder={`Digite seu ${title}`}/>
		</div>
  	)
}