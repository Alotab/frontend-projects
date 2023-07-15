const postContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');

//set a limit of posts per page in our api call
let limit = 10;
let page = 1;

//fetch the post data from an external source
async function getPost(){
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );

    const data = await res.json()

    return data;
}

//render data into elements in DOM
async function showPosts(){
    const  posts = await getPost()

    //create an element for each post
    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
        </div>`;

        postContainer.appendChild(postEl);
    })
}

// add loader animation and fetch more posts
function showLoading(){
    loading.classList.add('show');

    //set time to remove the loader for posts to show
    setTimeout(() => {
        loading.classList.remove('show');

        //show more post after loader
        setTimeout(() => {
            page++;
            showPosts()
        }, 300);
    }, 1000);
}


showPosts()

//add listner on scroll to trigger loader
window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

    if (scrollTop + clientHeight >=  scrollHeight - 5){
        showLoading();
    }

});