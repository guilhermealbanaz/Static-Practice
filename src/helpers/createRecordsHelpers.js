import { uniqueID } from "./uniqueUid";

export const returnCard = (currentName, currentStack, currentImg, currentTeam) => {
    return {
        uid: uniqueID(),
        name: currentName,
        stack: currentStack,
        img: currentImg,
        team: currentTeam
    };
}

export const returnTeam = (teamName, primaryColorTeam, secondColorTeam) => {
    return {
        uid: uniqueID(),
        team: teamName,
        primaryColor: primaryColorTeam,
        secondColor: secondColorTeam
    };
}
