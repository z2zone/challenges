const {hash} = window.location;
const strippedHash = hash.replace('#', '');
const decoded = atob(strippedHash);

if(decoded){
    document.querySelector('#show-panel').classList.remove('hide');
    document.querySelector('#form-panel').classList.add('hide');
    document.querySelector('h1').innerHTML = decoded;
}

document.querySelector('form').addEventListener('submit', (event)=>{
    event.preventDefault();

    document.querySelector('#form-panel').classList.add('hide');
    document.querySelector('#link-panel').classList.remove('hide');

    const input = document.querySelector('#message');
    const encrypted = btoa(input.value);
    const messageInput = document.querySelector('#share-link');
    messageInput.value = `${window.location}#${encrypted}`;
    messageInput.select();
});