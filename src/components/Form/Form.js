import './Form.css';
import { DynamicInput } from '../DynamicInput/DynamicInput.js';
import { SubmitButton } from '../SubmitButton/SubmitButton';
import { useForm } from '../../hooks/useForm';

export const Form = props => {
    const { teams } = props;
    const {
        currentName,
        setCurrentName,
        currentStack,
        setCurrentStack,
        currentImg,
        setCurrentImg,
        currentTeam,
        setCurrentTeam,
        teamName,
        setTeamName,
        primaryColorTeam,
        setPrimaryColorTeam,
        secondColorTeam,
        setSecondColorTeam,
        createCard,
        createTeam,
		removeTeam,
		currentTeamDelete,
		setCurrentTeamDelete
    } = useForm(props);

	return (
		<section className='form-container'>
			<form className='form' onSubmit={createCard}>
				<h2>Preencha o formulário abaixo:</h2>
				<DynamicInput
				isRequired={true}
				title="Nome"
				value={currentName}
				onChange={setCurrentName}
				/>
				<DynamicInput
				isRequired={true}
				title="Cargo"
				value={currentStack}
				onChange={setCurrentStack}
				/>
				<DynamicInput
				title="Imagem"
				value={currentImg}
				onChange={setCurrentImg}
				/>
				<DynamicInput
				type='dropdown'
				isRequired={true}
				title="Time"
				teams={teams}
				value={currentTeam}
				onChange={setCurrentTeam}
				/>
				<SubmitButton text="Criar Card" />
			</form>
			<form className='form' onSubmit={createTeam}>
                <h2>Preencha os dados para criar um novo time:</h2>
                <DynamicInput
				isRequired={true}
				title="Nome do Time"
				value={teamName}
				onChange={setTeamName}
				/>
				<DynamicInput
				type='color'
				isRequired={true}
				title="Cor primária"
				value={primaryColorTeam}
				onChange={setPrimaryColorTeam}
				/>
				<DynamicInput
				type='color'
				isRequired={true}
				title="Cor secundária"
				value={secondColorTeam}
				onChange={setSecondColorTeam}
				/>
                <SubmitButton text='Criar Time' />
            </form>
			<form className='form' onSubmit={removeTeam}>
                <h2>Selecione um time para ser excluído:</h2>
                <DynamicInput
				type='dropdown'
				isRequired={true}
				title="Time"
				teams={teams}
				value={currentTeamDelete}
				onChange={setCurrentTeamDelete}
				/>
                <SubmitButton text='Deletar Time' />
            </form>
		</section>
    )
}

