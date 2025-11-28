const BASE_API_URL = "http://localhost:3000/api";

const BooksApi = {
    async addNewBook (params){
        const response = await fetch(  `${BASE_API_URL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        });

        return response.json();
    },

    async getAllBooks () {
        const response = await fetch (`${BASE_API_URL}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.json();
    },
};

export default BooksApi;