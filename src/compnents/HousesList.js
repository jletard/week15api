import React from 'react';
import { House } from './House';
import { housesApi } from '../rest/HousesApi.js';
import { NewHouseForm } from './NewHouseForm';
import { Card, Stack } from 'react-bootstrap';

export default class HousesList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    };

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    addHouse = async (addedHouse) => {
        await housesApi.post(addedHouse);
        this.fetchHouses();
    }

    deleteHouse = async (house) => {
        await housesApi.delete(house);
        this.fetchHouses();
    }

    render() {
        return (

            <div className="house-list">
                <NewHouseForm addHouse={this.addHouse} />
                <Stack gap={5}>
                {this.state.houses.map((house) => (
                        <Card style={{width: '90%', align: 'center'}}>
                            <House
                                house={house}
                                key={house._id}
                                updateHouse={this.updateHouse}
                                deleteHouse={this.deleteHouse}
                            />
                        </Card>
                    
                ))}
                </Stack>
            </div>
        )
    }
}