import React from 'react';
import ReactDOM from 'react-dom';

class Booking extends React.Component {
    state = {
        package:[],
        waybillNumber: '',
        pickupTime: ''
      };

    waybillNumber = (e) => {
        this.setState({
            waybillNumber: e.target.value
        })
    };

    pickupTime = (e) => {
        this.setState({
            pickupTime: e.target.value
        })
    }

    waybillNum = this.state.waybillNumber;
    pickupTime = this.state.pickupTime;

    onSubmit = (e) =>{
        if(waybillNum != null && pickupTime != null){

        }
        
    }
  render(){
    return(
        <div className="Booking">
            <header className="Booking Header">
                <h1>Book a Pickup</h1>
                <div>
                    <span>Waybill Number:    </span>
                    <input type="text" onChange={this.waybillNumber} value={this.state.waybillNumber}></input>
                </div>
                <div>
                    <span>Pick-up Time:    </span>
                    <input type="text" onChange={this.pickupTime} value={this.state.pickupTime}></input>
                </div>
                <div>
                    <button type="submit">Confirm</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            </header>
        </div>
    );
  }
}

export default Booking;