import './Collaborator.css';
import PropTypes from 'prop-types';

export const Collaborator = ({collaborator, onDelete}) => {
	const { name, img, stack } = collaborator;
	const defaultImage = 'https://github.com/NaN-xyz.png';
	
	return (
		<div className={'collaborator'}>
			<div className='deleteButton' onClick={onDelete}>x</div>
			<div className={'header'}>
				<img src={img || defaultImage} alt='Foto colaborador' />
			</div>
			<div className={'footer'}>
				<h4>{ name }</h4>
				<h5>{ stack }</h5>
			</div>
		</div>
	)
}

Collaborator.propTypes = {
	collaborator: PropTypes.shape({
		name: PropTypes.string.isRequired,
		img: PropTypes.string,
		stack: PropTypes.string.isRequired,
	}).isRequired,
};