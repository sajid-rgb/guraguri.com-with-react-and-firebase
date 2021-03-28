import React from 'react';

const Contacts = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <textarea className='form-control w-50 mt-3' rows='10' placeholder='Enter private message..........'/>
            <button className='btn btn-danger mt-3 mb-2 w-25' >Send</button>
        </div>
    );
};

export default Contacts;