import { useEffect, useState } from 'react';
import './CardTeam.css';
import { Collaborator } from '../Collaborator/Collaborator';

export const CardTeam = ({teams, cards}) => {
	const [teamCards, setTeamCards] = useState();
	const generateTeamCards = (teams, cards) => {
		return teams.map(team => {
			console.log(cards);
			return (
				<section className={'team'} key={ team.primaryColor } style={{backgroundColor: team.secondColor}}>
					<h3 style={{ borderColor:  team.primaryColor }}>
						{ team.team }
					</h3>
					{cards.map(card => {
						return (
							<div key={card.name}>
								<Collaborator collaborator={card} />
							</div>
						)
					}
					)}
				</section>
			)
		})
	};

	useEffect(() => {
		setTeamCards(generateTeamCards(teams, cards));
	}, [cards, teams])

	return (
		<>
			{ teamCards }
		</>
	)
}