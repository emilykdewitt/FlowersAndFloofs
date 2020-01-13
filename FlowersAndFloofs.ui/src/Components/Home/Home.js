import React from 'react';
import Shop from '../Shop/Shop';

class Home extends React.Component {
    render (){
        return (
            <div className="Home">
                <header className="App-header">
                    <Shop 
                    currentCustomer={this.props.currentCustomer}
                    customerPersonalData={this.props.currentCustomerPersonal}
                    handleAddToCart = {this.props.handleAddToCart} addQuantityToCart={this.props.addQuantityToCart} getPrice={this.props.getPrice}/>
                </header>
            </div>
        )
    }
}

export default Home;
