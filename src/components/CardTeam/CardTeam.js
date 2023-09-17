import './CardTeam.css';
import { useEffect, useState } from 'react';
import { Collaborator } from '../Collaborator/Collaborator';
import { hexToRgbA } from '../../helpers/hexToRgba';

export const CardTeamPresentation = ({teams, cards, deleteCollaborator}) => {
	return (
		<>
			{teams.map((team, index) => {
				const collaboratorsWithTeam = cards.filter(card => card.team === team.team);
 
				if (collaboratorsWithTeam.length === 0) 
					return null;

				return (
					<section className={'team'} key={index} style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgbA(team.secondColor, '0.6') }}>
						<h3 style={{ borderColor:  team.primaryColor }}>
							{ team.team }
						</h3>
						<div className='collaborators'>
							{ collaboratorsWithTeam.map(card => <div key={card.name}><Collaborator collaborator={card} onDelete={() => deleteCollaborator(card.uid)} /></div>) }
						</div>
					</section>
				)
			})}
		</>
	);
}

export const CardTeam = ({teams, cards, deleteCollaborator}) => {
	const [teamCards, setTeamCards] = useState([]);

	useEffect(() => {
		setTeamCards(teams);
	}, [cards, teams])

	return <CardTeamPresentation teams={teamCards} cards={cards} deleteCollaborator={deleteCollaborator} />
}



// PRATICANDO PADRONIZAÇÃO PRESENTATION/LOGIC. SAIU DESSE COMPONENTE ABAIXO, PARA ESSE ACIMA



// export const CardTeam = ({teams, cards}) => {
// 	const [teamCards, setTeamCards] = useState([]);

// 	useEffect(() => {
// 		const generateTeamCards = teams.map((team, index) => {
// 			const collaboratorsWithTeam = cards.filter(card => card.team === team.team);

// 			if (collaboratorsWithTeam.length === 0) 
// 				return null;

// 			return (
// 				<section className={'team'} key={index} style={{backgroundColor: team.secondColor}}>
// 					<h3 style={{ borderColor:  team.primaryColor }}>
// 						{ team.team }
// 					</h3>
// 					<div className='collaborators'>
// 						{ collaboratorsWithTeam.map(card => <div key={card.name}><Collaborator collaborator={card} /></div>) }
// 					</div>
// 				</section>
// 			)
// 		});

// 		setTeamCards(generateTeamCards);
// 	}, [cards, teams])

// 	return <>{ teamCards }</>
// }

// CardTeam.propTypes = {
// 	teams: PropTypes.array.isRequired,
// 	cards: PropTypes.array.isRequired
// }