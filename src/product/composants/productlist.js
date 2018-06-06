import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';


const Productlist = () => ({

  render() {
    console.log('product', this.props);

    return (
      <div>

        <h1>Liste des Products </h1>
        <ReactTable
          data={this.props.productList}
          columns={[
            {
              columns: [
                {
                  Header: 'product name',
                  accessor: 'product_name',
                },
                {
                  Header: 'price',
                  accessor: 'price',
                },
              ],
            },
            {
              columns: [
                {
                  Header: 'picture',
                  accessor: 'picture',
                },
               
                {
                  Header: 'Actions',
                  accessor: 'dateCreation',

                  Cell: (a) => (
                    <div>
                     
                      <button className="ui red button" onClick={() => this.props.deleteProduct(a.original._id)}>Delete</button>
                      <button className="ui orange button" onClick={() => this.props.updateProduct(a.original._id)}>Update</button>
                      

                    </div>
                  ),


                },
              ],
            },
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />
      </div>




    );
  },
});

export default Productlist;