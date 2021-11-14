const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: null,
			planets: null,
			vehicles: null,
            charsDetail:[]
		},
		actions: {
			getCharacters: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ characters: data.results }));
			},
			getPlanets: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ planets: data.results }));
			},
			getStarships: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ vehicles: data.results }));
			},
            
		},
	};
};

export default getState;


