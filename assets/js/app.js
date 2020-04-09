const BASE_URL = 'https://jsonplaceholder.typicode.com',
   defaultText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugait repudiandae explicabo animi minima fuga beatae ilum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.',
   defaultName = ['Andrea Dimitri', 'Alejandro Saldarriaga', 'Jhon Smith', 'Juan Gomez'],
         limit = 4; // testimonial items to render on screen

const createIndicators = (parent) => {

    const ol = document.createElement('ol');

    ol.setAttribute('class', 'carousel-indicators');

    for (let index = 0; index < testiominalNumber; index++) {

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

const createSliders = (parent) => {

    const content = document.createElement('div'),;

    content.setAttribute('class', 'carousel-inner carousel__content');
    content.setAttribute('role', 'listbox');

    for (let index = 0; index < testiominalNumber; index++) {

        const child = document.createElement('div'),
              media = document.createElement('img'),
            caption = document.createElement('div'),
        description = document.createElement('p'),
               name = document.createElement('h3');

        (index === 0) ? child.setAttribute('class', 'carousel__item item active') : child.setAttribute('class', 'carousel__item item ');

        media.setAttribute('src', `./assets/img/person_${index + 1}.jpg`);
        media.setAttribute('class', 'avatar__testimonial avatar--face');
        caption.setAttribute('class', 'carousel-caption');
        description.setAttribute('class', 'caption__text text--paragraph');
        name.setAttribute('class', 'caption__name text--dark');

        caption.append(name);
        description.append(defaultText);
        caption.appendChild(description);
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

    const parent = document.getElementById('carousel-default');

    let testimonials = handlerReduceList(postList, userList, 'userId', 'id');

    testimonials = _.sampleSize(testimonials, limit); // It should take 5 positions (Randomly) - Lodash

    createIndicators(parent);
    createSliders(parent);
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
