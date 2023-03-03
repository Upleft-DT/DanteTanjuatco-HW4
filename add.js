import {posts, generateList} from './blog.js'

let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', function (event) {
    let addModal = document.querySelector('#add');
    addModal.showModal();
});

let addDialog = document.querySelector('#add');
addDialog.addEventListener('close', () => {
    if(addDialog.returnValue == "true"){

        let postTitle = document.querySelector('#title').value;

        let postDate = document.querySelector('#date').value;

        let postSummary = document.querySelector('#summary').value;
        
        posts.push({title: postTitle, date: postDate, summary: postSummary});

        localStorage.setItem("blog-list", JSON.stringify(posts));
        generateList();
    }
});