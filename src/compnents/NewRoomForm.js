import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState('');

    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Add a new room</h4>
            <Form onSubmit={onSubmit}>
                <input
                type='text'
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <input
                type='text'
                placeholder='Area'
                onChange={handleAreaInput}
                value={area}
                />
                <Button variant="info" size="sm" type='submit'>Add Room</Button>
            </Form>
        </div>
    )
};