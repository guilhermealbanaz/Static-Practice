import { useState } from 'react';
import Banner from './components/Banner/Banner.js';
import { Form } from './components/Form/Form.js';
import { CardTeam } from './components/CardTeam/CardTeam.js';

const initialCollaborators = [
	{
		name: 'Rodrigo',
		stack: 'Desenvolvedor',
		img: 'Lorem Ipsum',
		team: 'Front End'
	},
	{
		name: 'Guilherme',
		stack: 'Engenheiro de Software',
		img: 'Lorem Ipsum',
		team: 'Front End'
	},
	{
		name: 'Leonardo',
		stack: 'Desenvolvedor',
		img: 'Lorem Ipsum',
		team: 'Front End'
	},
	{
		name: 'Érico',
		stack: 'Desenvolvedor',
		img: 'Lorem Ipsum',
		team: 'Back End'
	},
];

const initialTeams = [
	{
		team: 'Front-End',
		primaryColor: '#82CFFA',
		secondColor: '#E8F8FF',
	},
	{
		team: 'Data Sciense',
		primaryColor: '#A6D157',
		secondColor: '#F0F8E2',
	},
	{
		team: 'Devops',
		primaryColor: '#E06B69',
		secondColor: '#FDE7E8',
	},
	{
		team: 'UX e Design',
		primaryColor: '#D86EBF',
		secondColor: '#FAE5F5',
	},
	{
		team: 'Mobile',
		primaryColor: '#FEBA05',
		secondColor: '#FFF5D9',
	},
	{
		team: 'Inovação e Gestão',
		primaryColor: '#FF8A29',
		secondColor: '#FFEEDF',
	}
]

function App() {
	const [cards, setCards] = useState(initialCollaborators);
	const addCard = (card) => {
		setCards([...cards, card]);
  	};
	const teamsNames = initialTeams.map(team => team.team);

	return (
		<div className="App">
			<Banner />
			<Form teams={teamsNames} newCard={card => addCard(card)}/>
			<CardTeam teams={initialTeams} cards={cards} />
		</div>
	);
}

export default App;
