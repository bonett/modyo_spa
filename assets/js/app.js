const BASE_URL = 'https://jsonplaceholder.typicode.com',
    itemNumber = 4; // testimonial items to render on screen

/**
 *  It should create slider indicatos
 * 
 * @param {parent} Html
 * @param {sourceData} Array
 * @returns null
 * 
 */
const createIndicators = (parent, sourceData) => {

    const ol = document.createElement('ol');

    ol.setAttribute('class', 'carousel-indicators');

    for (let index = 0; index < sourceData.length; index++) {

        const li = document.createElement('li');

        li.dataset.target = "#carousel-default";
        li.setAttribute('data-slide-to', `${index}`);

        if (index === 0) {
            li.setAttribute('class', 'active');
        }

        ol.appendChild(li);
    }

    parent.appendChild(ol);
};

/**
 *  It should create a certain number of slider with testimonial data
 * 
 * @param {parent} Html
 * @param {sourceData} Array
 * @returns null
 * 
 */
const createSliders = (parent, sourceData) => {

    const content = document.createElement('div');

    content.setAttribute('class', 'carousel-inner carousel__content');
    content.setAttribute('role', 'listbox');
    
    for (let index = 0; index < sourceData.length; index++) {

        const child = document.createElement('div'),
              media = document.createElement('img'),
            caption = document.createElement('div'),
        description = document.createElement('p'),
               name = document.createElement('h3');

        (index === 0) ? child.setAttribute('class', 'carousel__item item active') : child.setAttribute('class', 'carousel__item item ');

        media.setAttribute('src', `./assets/img/person_${index + 1}.jpg`);
        media.setAttribute('class', 'avatar__testimonial avatar--picture');
        caption.setAttribute('class', 'carousel-caption');
        description.setAttribute('class', 'caption__text text--paragraph');
        name.setAttribute('class', 'caption__name text--dark');

        name.textContent = sourceData[index].name;
        description.textContent = sourceData[index].body;
        caption.appendChild(description);
        caption.appendChild(name);
        child.append(caption);
        child.append(media);
        content.appendChild(child);
    }

    parent.appendChild(content);
};

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
const handlerReduceList = (collection1, collection2) => {
    return collection1.map(o => ({
        ...collection2.find((x) => (x.id === o.userId) && x),
        ...o
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

    const parent = document.getElementById('carousel-default');

    let testimonials = handlerReduceList(postList, userList);

    testimonials = _.sampleSize(testimonials, itemNumber); // It should take 5 positions (Randomly) - Lodash
    
    createIndicators(parent, testimonials);
    createSliders(parent, testimonials);
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
