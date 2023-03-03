import {posts, generateList} from './blog.js';


let editDialog = document.querySelector('#edit');
editDialog.addEventListener('close', () => {
    if(editDialog.returnValue == "true"){

        let post = posts[window.postIndex];

        post.title = document.querySelector('#editTitle').value;
        post.date = document.querySelector('#editDate').value;
        post.summary = document.querySelector('#editSummary').value;

        localStorage.setItem("blog-list", JSON.stringify(posts));
        generateList();
    }
});