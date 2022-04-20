import React from 'react';

function Input({placeholder}) {
    return (
        <form class="input">
            <label class="input_name">
                Guest234   <input type="text" name="Chatbox" class="button" placeholder="Kirjuta siia..." />
            </label>
            <input type="submit" value="Send" class="sendtxt" />
        </form>
    );
}

export default Input;