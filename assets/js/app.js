const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const fetchPosts = () => {
    axios.get(`${BASE_URL}posts`)
        .then(response => {
            const posts = response.data;
            console.log(`GET list posts`, posts);
            // append to DOM
            // appendToDOM(posts);
        })
        .catch(error => console.error(error));
};

fetchPosts();