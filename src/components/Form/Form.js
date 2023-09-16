import { useState } from 'react';
import './Form.css';
import { InputText } from '../InputText/InputText.js';
import { InputDropDown } from '../InputDropDown/InputDropDown';
import { SubmitButton } from '../SubmitButton/SubmitButton';

export const Form = props => {
	const { newCard, teams } = props;
	const [currentName, setCurrentName] = useState('');
	const [currentTeam, setCurrentTeam] = useState('');
	const [currentImg, setCurrentImg] = useState('');
	const [currentStack, setCurrentStack] = useState('');

	const handleSendForm = e => {
		e.preventDefault();
		newCard({
			name: currentName,
			stack: currentStack,
			img: currentImg,
			team: currentTeam
		});
	}

	return (
		<section className='form'>
			<form onSubmit={handleSendForm}>
				<h2>Preencha o formulário abaixo:</h2>
				<InputText
				isRequired={true}
				title="Nome"
				value={currentName}
				onChange={currentName => setCurrentName(currentName)}
				/>
				<InputText
				isRequired={true}
				title="Cargo"
				value={currentStack}
				onChange={currentStack => setCurrentStack(currentStack)}
				/>
				<InputText
				isRequired={true}
				title="Imagem"
				value={currentImg}
				onChange={currentImg => setCurrentImg(currentImg)}
				/>
				<InputDropDown
				isRequired={true}
				title="Time"
				teams={teams}
				value={currentTeam}
				onChange={currentTeam => setCurrentTeam(currentTeam)}
				/>
				<SubmitButton text="Criar Card" />
			</form>
		</section>
	)
}