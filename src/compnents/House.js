import React from 'react';
import { NewRoomForm } from './NewRoomForm';
import { Button, Card, Table } from 'react-bootstrap';

export const House = (props) => {
    const { house, updateHouse, deleteHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room] });

    const rooms = () => (
        <tbody>
            {house.rooms.map((room, index) => (
                <tr key={index}>
                    <td>{room.name}</td>
                    <td>{room.area}</td>
                    <td><Button variant="warning" size="sm" onClick={(e) => deleteRoom(room._id)}>Delete Room</Button></td>
                </tr>
            ))}
        </tbody>
    );

    return (
        <div>
            <Card>
                <Card.Header as="h4">{house.name}
                    <Button variant="danger" onClick={(e) => deleteHouse(house)}>Delete House</Button>
                </Card.Header>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Room Name</th>
                            <th>Area (sqft)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                        {
                            rooms({ rooms, houseId: house._id, deleteRoom })
                        }
                </Table>
                <NewRoomForm addNewRoom={addNewRoom} />
            </Card>
        </div>
    );

};