const addForm = document.querySelector('.add');

const generateTemplate = (todo) => {

    const html = ``;

}

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();

    generateTemplate(todo);

});