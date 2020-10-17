// display a list of dogs

const dogs = [
    { name: 'Justin'},
    { name: 'Laurent'},
    { name: 'Shaoqi'},
];

main();

function main() {
    display_dogs();
}

function display_dogs() {
    for (let dog of dogs) {
        add_dog_to_UI(dog);
    } 
}

function add_dog_to_UI(dog) {
    const dog_ui = document.createElement('a');
    dog_ui.className = 'list-group-item';
    dog_ui.innerText = dog.name;

    document.getElementById('dogs-list').appendChild(dog_ui);
}