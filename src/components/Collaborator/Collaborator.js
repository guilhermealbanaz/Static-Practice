import './Collaborator.css';

export const Collaborator = ({name, img, stack}) => {
	return (
		<div className='collaborator'>
			<div className='header'>
				<img src={img} alt='Foto colaborador' />
			</div>
			<div className='footer'>
				<h4>{ name }</h4>
				<h5>{ stack }</h5>
			</div>
		</div>
	)
}