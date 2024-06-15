
export const FetchPoints = async () => {
    const API_HEADERS = {
        'Content-type': 'application/json',
        Authentication: 'any-string-you-like'
    };

    const editProduct = {
        id: "1715702596214", 
        action: "REPORT"
    };

    try {
        const response = await fetch("https://messonstats.com:8443/statsbymatchunforcederror", {
            method: 'POST',
            headers: API_HEADERS,
            body: JSON.stringify(editProduct)
        });

        const data = await response.json();
        if(data.length < 2){
            console.log("error has happened ")
            throw new Error("The data length < 2")

        } 

        return data;

    } catch (error) {
        console.error(error);
        return error;
    }
};
