{
    class HelperFunctions {
        getMessageElement(data) {
            const newElement = document.createElement('div');
            newElement.innerHTML = `${data.name === CURRENT_USER ? '' : data.name+'<br/>'}
                                    ${data.message}`;
            newElement.className = `message ${data.name === CURRENT_USER ? 'mine' : ''}`;
        
            return newElement;
        }
    }
    const inputBox = document.querySelector('#inputbox');
    const messages = document.querySelector('#messages');
    const msgHelpFuncs = new HelperFunctions();
    const CURRENT_USER = '@codecrook';

    messages.appendChild(msgHelpFuncs.getMessageElement({ name: '@codecrook', message: 'Hello' }));
    messages.appendChild(msgHelpFuncs.getMessageElement({ name: '@chethan', message: 'Hi' }));

    inputBox.addEventListener('keyup', e => { 
        if (e && e.key === 'Enter' && inputBox.value.trim !== 0) {
            messages.appendChild(msgHelpFuncs.getMessageElement({ name: CURRENT_USER, message: e.target.value }));
            inputBox.value = '';
        }
    });
}