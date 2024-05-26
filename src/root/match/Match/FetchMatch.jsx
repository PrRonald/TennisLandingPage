import { SplitString } from "../functions/SplitString";

export const FetchMatch = async (players, description) => {
    const API_HEADERS = {
        'Content-type': 'application/json',
        Authentication: 'any-string-you-like'
    };

    const editProduct = {
        description: description,
        action: "REPORT"
    };

    try {
        const response = await fetch("https://messonstats.com:8443/statsbymatch", {
            method: 'POST',
            headers: API_HEADERS,
            body: JSON.stringify(editProduct)
        });

        const data = await response.json();
        if(data.length < 2) throw new Error("The data length < 2")

        const [playerone, playertow] = data;
        const [Onename, Onelastname] = SplitString(playerone._id);
        const [Towname, Towlastname] = SplitString(playertow._id);

        const transformedPlayers = {
            playerOne: {
                id: players.playerOne.id,
                name: Onename,
                lastname: Onelastname,
                points: [
                    playerone.ACE,
                    playerone.DOUBLE_FAULT,
                    playerone.FORCED_ERROR,
                ],
                winner: [
                    playerone.RETURN_ERROR,
                    playerone.SERVICE_FAULT,
                    playerone.UNFORCED_ERROR
                ],
                error: players.playerOne.error
            },
            playerTow: {
                id: players.playerTow.id,
                name: Towname,
                lastname: Towlastname,
                points: [
                    playertow.ACE,
                    playertow.DOUBLE_FAULT,
                    playertow.FORCED_ERROR,
                ],
                winner: [
                    playertow.RETURN_ERROR,
                    playertow.SERVICE_FAULT,
                    playertow.UNFORCED_ERROR
                ],
                error: players.playerTow.error
            }
        };

        return transformedPlayers;

    } catch (error) {
        console.error(error);
        return null;
    }
};
