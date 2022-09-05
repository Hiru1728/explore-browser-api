console.log('prompt');
// alert('This is very Dengeras.')
const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('alert for all men');
    }
}

const askSomething = () => {
    const decision = confirm('Are you coming Picnic');
    console.log(decision);
    if (decision === true) {
        console.log('Send 500 tk to the bikash');
    }
    else {
        console.log('I could not go to picnic');
    }
}

const userInfo = () => {
    const name = prompt('Tell us your name');
    console.log(name);
    if (!!name) {
        console.log('Welcome her', name);
    }
}