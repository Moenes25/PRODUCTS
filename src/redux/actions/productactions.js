import { allProduct } from '../../product/graphql/query/allproduct';
import { removeProduct } from '../../product/graphql/mutations/deleteproduct';
import {client} from '../../index';

export const deleteProduct = (idProduct) => (dispatch) => {
 client.mutate({
  mutations: removeProduct(idProduct),
 }).then(() => {
   dispatch({
     type: 'DELETE_Product',
     payload: idProduct,
   });
 });
};


export const getProducts = () => (dispatch) => {
 client
   .query({
     query:allProduct,
   }).then((data) => dispatch({
     type:"GET_PRODUCTS",
     payload: data.data.Products,
   }));
};