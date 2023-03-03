import {posts, generateList} from './blog.js';

let deleteDialog = document.querySelector('#delete');
deleteDialog.addEventListener('close', () => {
    if(deleteDialog.returnValue == "true"){
        posts.splice(window.postIndex, 1);
    }

    localStorage.setItem("blog-list", JSON.stringify(posts));
    generateList();
});