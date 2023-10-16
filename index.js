function addingEventListener() {
    const input = document.getElementById('button');
    function clickAlert() {
        alert('Stop clicking me!');
    }
    input.addEventListener('click', clickAlert);
}

addingEventListener();