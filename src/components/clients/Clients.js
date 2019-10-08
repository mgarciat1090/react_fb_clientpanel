import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Clients extends Component{
    render(){
        const clients = [
            {
                id: '234343',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevin@gmail.com',
                phone: '444-4444-444',
                balance: 30
            },
            {
                id: '234344',
                firstName: 'Bob',
                lastName: 'Jackson',
                email: 'bobn@gmail.com',
                phone: '423-4444-444',
                balance: 400
            }
        ]
        if(clients){
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <h2><i className="fas fa-users"></i>Clients</h2>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                    <table className="table table-stripped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { clients.map(client => (
                                <tr key={client.id} >
                                    <td>{client.firstName} {client.lastName}</td>
                                    <td>{client.email}</td>
                                    <td>${parseFloat(client.balance).toFixed(2)}</td>
                                    <td>
                                        <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                                            <i className="fas fa-arrow-circle-right"></i> Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        } else{
            return <h1>Loading...</h1>
        }
        
    }
}