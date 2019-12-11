import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import bundleRequest from '../../DataRequests/bundleRequest';
import SingleBundle from '../SingleBundle/SingleBundle';
import occasionRequest from '../../DataRequests/occasionRequest';

import { ButtonGroup, Button } from 'reactstrap';

class Shop extends React.Component {
  state = {
    bundles: [],
    filteredBundles: [],
    occasions: [],
  }

  getBundles = () => {
    bundleRequest.getAllBundles()
    .then(bundles => this.setState({ bundles, filteredBundles: bundles }))
    .catch(err => console.error('no bundles for you', err))
  }

  filterBundlesByCategory = (e) => {
    e.preventDefault();
    const buttonCategory = e.target.id;
    const { bundles } = this.state;
    this.setState({ filteredBundles: bundles });
    const filteredResults = this.state.bundles.filter(bundle => bundle.occasionId == buttonCategory);
    this.setState({ filteredBundles: filteredResults });
  }

  showAllBundles = (e) => {
    bundleRequest.getAllBundles()
      .then(bundles => this.setState({ bundles, filteredBundles: bundles }))
      .catch(err => console.error('unable to reset state', err));
  }

  componentDidMount(){
    this.getBundles();
    occasionRequest.getAllOccasions().then(data => {
      let allOccasions = [...data];
      this.setState({occasions: allOccasions});
    });
  }

  render() {

    const makeBundles = this.state.bundles.map(bundle => (
      <SingleBundle 
      key={bundle.id}
      flowerId={bundle.flowerId}
      puppyId={bundle.puppyId}
      occasionId={bundle.occasionId}
      description={bundle.description}
      image={bundle.productImageUrl}
      />
    ));
    const images = this.state.bundles.map(bundle => (
      console.error("bundle", bundle)
    ));
    return (
      <Container>
        <Row>
          <Col xs="3" id="shopProductCategoriesContainer">
          <ButtonGroup vertical>
            {makeOccasions}
            <Button id="showAllBtn" onClick={this.showAllBundles}>Show All</Button>
          </ButtonGroup>
          </Col>
          {makeBundles}
        </Row>
      </Container>
    )
  }
}

export default Shop;