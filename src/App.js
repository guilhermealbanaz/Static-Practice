import { useState, useEffect } from 'react';
import Banner from './components/Banner/Banner.js';
import { Form } from './components/Form/Form.js';
import { Footer } from './components/Footer/Footer.js';
import { CardTeam } from './components/CardTeam/CardTeam.js';

const initialCollaborators = [
	{
		uid: '1239sbbcv-123131dsav-232vsdf',
		name: 'Rodrigo',
		stack: 'Desenvolvedor',
		img: 'https://github.com/guilhermealbanaz.png',
		team: 'Front-End'
	},
	{
		uid: '323234fsd-123131dsav-232vsdf',
		name: 'Guilherme',
		stack: 'Engenheiro de Software',
		img: 'https://github.com/guilhermealbanaz.png',
		team: 'Front-End'
	},
	{
		uid: '123124csdf-123131dsav-232vsdf',
		name: 'Leonardo',
		stack: 'Desenvolvedor',
		img: 'https://github.com/leomaros.png',
		team: 'Front-End'
	},
	{
		uid: 'nfcvs34242-123131dsav-232vsdf',
		name: 'Érico',
		stack: 'Desenvolvedor',
		img: 'https://github.com/guilhermealbanaz.png',
		team: 'Back End'
	},
];

const initialTeams = [
	{
		team: 'Front-End',
		uid: '1231331sdasda-asdasdad12-asad223',
		primaryColor: '#82CFFA',
		secondColor: '#E8F8FF',
	},
	{
		team: 'Data Sciense',
		uid: '2222dfafa-asdasdad12-asad223',
		primaryColor: '#A6D157',
		secondColor: '#F0F8E2',
	},
	{
		team: 'Devops',
		uid: '14423sss-asdasdad12-asad223',
		primaryColor: '#E06B69',
		secondColor: '#FDE7E8',
	},
	{
		team: 'UX e Design',
		uid: '14423sss-asdasdad12-asad223',
		primaryColor: '#D86EBF',
		secondColor: '#FAE5F5',
	},
	{
		team: 'Mobile',
		uid: '111232sas-asdasdad12-asad223',
		primaryColor: '#FEBA05',
		secondColor: '#FFF5D9',
	},
	{
		team: 'Inovação e Gestão',
		uid: 'zxczcaaa2231-asdasdad12-asad223',
		primaryColor: '#FF8A29',
		secondColor: '#FFEEDF',
	},
	{
		team: 'Back End',
		uid: 'adasw123-asdasdad12-asad223',
		primaryColor: '#FF8A29',
		secondColor: '#FFEEDF',
	}
]

function App() {
	const [cards, setCards] = useState(initialCollaborators);
	const [teams, setTeams] = useState(initialTeams);
	const [teamsNames, setTeamsNames] = useState([]);

	const handleAddCard = (card) => {
		setCards((prevCards) => [...prevCards, card]);
	};

	const handleAddTeam = (team) => {
		setTeams((prevTeams) => [...prevTeams, team]);
	};

	const handleDeleteCard = (uid) => {
		setCards(prevCards => prevCards.filter(card => card.uid !== uid));
	}

	const handleDeleteTeam = (name) => {
		if(teams.length !== 1)
			setTeams(prevTeams => prevTeams.filter(team => team.team !== name));
	}

	useEffect(() => {
		setTeamsNames(teams.map(team => team.team));
	}, [teams]);

	return (
		<div className="App">
			<Banner />
			<Form teams={teamsNames} newCard={handleAddCard} newTeam={handleAddTeam} deleteTeam={handleDeleteTeam} />
			<CardTeam teams={teams} cards={cards} deleteCollaborator={handleDeleteCard} />
			<Footer />
		</div>
	);
}

export default App;
