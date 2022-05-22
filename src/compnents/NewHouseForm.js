import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

export const NewHouseForm = (props) => {
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name) {
            props.addHouse({ name });
            setName('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <card>
                <Card.Header as="h3" bg="Dark">Add a new house</Card.Header>
                <Card.Body>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        placeholder='New House Name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <Button variant="success" type='submit'>Add House</Button>
                </form>
                </Card.Body>
            </card>
        </div>
    )
};