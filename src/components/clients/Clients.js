import React, { Component } from 'react';

export default class Clients extends Component{
    render(){
        const clients = [{
            id: '234343',
            firstName: 'Kevin',
            lastName: 'Johnson',
            email: 'kevin@gmail.com',
            phone: '444-4444-444',
            balance: 30
        }]
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
                </div>
            )
        } else{
            return <h1>Loading...</h1>
        }
        
    }
}