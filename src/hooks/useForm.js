
import { useState, useCallback } from 'react';
import { returnCard, returnTeam } from '../helpers/createRecordsHelpers.js';

export const useForm = (props) => {
	const { newCard, newTeam, deleteTeam, teams } = props;
	//card states
	const [currentName, setCurrentName] = useState('');
	const [currentTeam, setCurrentTeam] = useState(teams && teams.length > 5 ? teams[0] : 'Front-End');
	const [currentTeamDelete, setCurrentTeamDelete] = useState(teams[0]);
	const [currentImg, setCurrentImg] = useState('');
	const [currentStack, setCurrentStack] = useState('');

	//team states
	const [teamName, setTeamName] = useState('');
	const [primaryColorTeam, setPrimaryColorTeam] = useState('#FFFFFF');
	const [secondColorTeam, setSecondColorTeam] = useState('#FFFFFF');

	const createCard = useCallback((e) => {
		e.preventDefault();
		newCard(returnCard(currentName, currentStack, currentImg, currentTeam));
		
		setCurrentName('');
		setCurrentStack('');
		setCurrentImg('');
	}, [newCard, currentName, currentStack, currentImg, currentTeam]);

	const createTeam = useCallback((e) => {
		e.preventDefault();
		newTeam(returnTeam(teamName, primaryColorTeam, secondColorTeam));

		setTeamName('');
		setPrimaryColorTeam('#FFFFFF');
		setSecondColorTeam('#FFFFFF');
	}, [newTeam, teamName, primaryColorTeam, secondColorTeam]);

	const removeTeam = useCallback((e) => {
		e.preventDefault();
		deleteTeam(currentTeamDelete);
		setCurrentTeam(teams[0])

	}, [deleteTeam, currentTeamDelete, teams]);

	return {
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
    };
}
