export let list = document.querySelector('#list');
export let posts = JSON.parse(localStorage.getItem("blog-list")) || [];


export function generateList () {
    list.innerHTML = '';
    let inner = '';
    posts.forEach(postItem => {
        inner +=
        `<li index='${posts.indexOf(postItem)}'>
            <h3>${postItem.title}</h3>
            <p>${postItem.date}</p>
            <p>${postItem.summary}</p>
            <button class='edit'>Edit</button>
            <button class='delete'>Delete</button>
        </li>`;
    })
    list.innerHTML = inner;

    let delList = document.querySelectorAll('.delete');
    delList.forEach(deleteBtn => deleteBtn.addEventListener('click', () => {
        window.postIndex = deleteBtn.parentElement.getAttribute("index");
        document.querySelector("#delete").showModal();
    }));

    let editList = document.querySelectorAll('.edit');
    editList.forEach(editBtn => editBtn.addEventListener('click', () => {
        window.postIndex = editBtn.parentElement.getAttribute("index");

        let postElements = editBtn.parentElement.children;
        
        document.querySelector('#editTitle').value = postElements[0].innerText;
        document.querySelector('#editDate').value = postElements[1].innerText;
        document.querySelector('#editSummary').value = postElements[2].innerText;

        document.querySelector('#edit').showModal();
    }));
}

(function () {
    generateList();
  })();


