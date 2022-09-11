const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    get = async() => {
        try {
        const response = await fetch(HOUSES_ENDPOINT);
        const data = await response.json();
        return data;
        }
        catch(e) {
            console.log('fetch didnt work.', e);
        }
        
    }

    put = async (house) => {
        try{
            const response = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await response.json();
        }
        catch(e) {
            console.log('update didnt work.', e);
        }
    }
}

export const housesApi = new HousesApi();