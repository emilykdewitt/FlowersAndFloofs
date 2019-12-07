import React from 'react';
import  ShoppingCartIcon from './Icons/ShoppingCartIcon';
import SearchBarIcon from './Icons/SearchBarIcon';
import HomeIcon from './Icons/HomeIcon';
import LockIcon from './Icons/LogOutIcon';
import productRequest from '../../DataRequests/productRequest';
import {Input} from 'reactstrap';
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

const style = {
display:'flex'
};

// remember to replace hrefs with react link
class NavBar extends React.Component {

    state = {
        allProducts: [],
        singleSearchResult: {}
    }

    componentDidMount() {
        productRequest.getAllProducts().then(data => {
            this.setState({searchResults: data})
            console.error("all products: ",this.state.searchResults);
          })
    }

    // getSearchResults = (e) => {
    //     e.preventDefault();
    //     productRequest.getAllProducts().then(data => {
    //         this.setState({searchResults: data})
    //         console.error("all products: ",this.state.searchResults);
    //       })
    // }

    searchInput = (e) => {
    e.preventDefault();
    const allProducts = this.state.allProducts;
    const searchTerm = e.target.value;
    allProducts.forEach((result) => {
        const title = result.title.toLowerCase();
        if (searchTerm.includes(title)) {
            console.error("result", title)
        }
    });
    }

    render() {
        return (
            <div className="NavBar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-fuchsia">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">LOGO</a>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0" >
                            <li className="nav-item active">
                                <a className="nav-link ml-3" href="#" style={style}>
                                    <HomeIcon />Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ml-3" href="#">About <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ml-3" href="#">My Orders</a>
                            </li>
                        </ul>
                        <button className = "btn btn-success btn-sm ml-3" style={style}>
                            <ShoppingCartIcon /> Your Cart
                        </button>
                        <form className="form-inline my-2 my-lg-0" >
                        {/* <Search /> */}
                            <Input className="form-control mr-sm-2 ml-3" type="search" placeholder="Search" aria-label="Search" onChange={this.searchInput} />
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" style={style} onClick={this.getSearchResults}>
                                <SearchBarIcon /> Search
                            </button>
                        </form>
                        
                        <button className="btn btn-outline-danger my-2 my-sm-0 ml-3" style={style}>
                            <LockIcon />Log Out
                        </button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
