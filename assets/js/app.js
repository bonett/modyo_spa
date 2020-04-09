const BASE_URL = 'https://jsonplaceholder.typicode.com';

const addTestimonialToDOM = (postList, userList) => {
    console.log(`GET: Here's the lists`, postList, userList);
}

const getUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

const getPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

const main = async () => {
    addTestimonialToDOM(await getPosts(), await getUsers());
};

main();
