import React, { useState } from 'react';
import './popUp.css'

function PopUp() {
    const [isOpen, setIsOpen] = useState( true);
    return (
    <div>
    <card>
    {isOpen && (
    <div>
        <button onClick={() => setIsOpen(false)}><p>Click the Widget</p>
        </button>
    </div>
    )}
    </card>
    </div>
    );
}
export default PopUp;