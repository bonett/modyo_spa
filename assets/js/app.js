/* EndPoint Base */
const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * It should merge two collections through comparison param1 and param2
 * 
 * @param {collection1} Array
 * @param {collection2} Array
 * @param {param1} string
 * @param {param2} string
 * @return Array 
 * 
 */
const handlerReduceList = (collection1, collection2, param1, param2) => {
    return collection1.map(a => ({
        ...collection2.find((b) => (b[param1] === a[param2]) && b),
        ...a
    }));
}

/**
 * It should validate and get a testimonial data by users to render on screen
 * 
 * @param {postList} Array
 * @param {userList} Array
 * 
 */
const addTestimonialToDOM = (postList, userList) => {

    let testimonials = handlerReduceList(postList, userList, 'userId', 'id');

    testimonials = _.sampleSize(testimonials, 5); // It should take 5 positions Randomly - Lodash

    console.log(
        testimonials
    )
}

/**
 *  Get All Users
 * 
 * @param null
 * @returns {response.data} Array
 * 
 */
const getUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

/**
 *  Get All Post
 * 
 * @param null
 * @returns {response.data} Array
 * 
 */
const getPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

/**
 *  It should call addTestimonialToDOM method to render data on screen
 * 
 * @param null
 * 
 */
const main = async () => {
    addTestimonialToDOM(await getPosts(), await getUsers());
};

/* Initialize script */

main();
