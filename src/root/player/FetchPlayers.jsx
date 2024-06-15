export const FetchPlayers = async (url) => {
    try{
        const data = await fetch(url)
    }
    catch(error){
        return error;
    }

}