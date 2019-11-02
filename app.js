//Adding the new item form
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i> 
                 </li >
                `;

    list.innerHTML += html;
};


addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    if (todo.length > 0) {
        generateTemplate(todo);
        addForm.reset();
    }
});

//delete checklist
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        console.log(e.target.previousSibling);
        e.target.parentElement.remove();
    }
});

//keyup event