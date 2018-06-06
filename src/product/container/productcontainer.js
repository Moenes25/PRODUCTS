import React from 'react';
import { allProduct } from '../graphql/query/allproduct';
import  Productlist  from '../composants/productlist';
import { removeProduct } from '../graphql/mutations/deleteproduct';
 import {updateProduct} from '../graphql/mutations/updateproduct';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
 import { productList } from '../composants/productlist';
import { getProducts, deleteProduct } from '../../redux/actions/productactions';

export class productContainer extends React.Component {
 
 componentDidMount() {
   console.log("liste product monaprix france");
   this.props.getProducts();
}

 render() {
   console.log('Product',this.props.products)
   return this.props.products.length > 0 &&
   (<Productlist
     productList={this.props.products}
     deleteproduct={this.props.deleteProduct}
    updateProduct={this.props.updateProduct}
   />);
 }
}

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
  visibility: state.visibility,
 });
 
 const mapDispatchStateToProps = (dispatch) => ({
  getProducts: () => {
    dispatch(getProducts());
  },
  deleteProduct: (idProduct) => {
    dispatch(deleteProduct(idProduct));
  },
 });

export default connect(mapStateToProps, mapDispatchStateToProps)(productContainer);


productContainer.propTypes = {
 products: PropTypes.arrayOf(PropTypes.object),
 getProducts: PropTypes.func,
 deleteProduct: PropTypes.func,
 visibility: PropTypes.bool,
};
