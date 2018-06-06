import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Icon,  } from 'semantic-ui-react'



class Home extends Component {
  state = { visible: false,activeItem: '' }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { visible } = this.state;
    const { activeItem } = this.state;
    console.log(activeItem);

    return (
      <div>
            <Button onClick={this.toggleVisibility}>Menu</Button>
           
        <hr/>
       
          <Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='products'active={activeItem === 'products'} href="/products" onClick={this.handleItemClick}>
              <Icon name='product' />
         Liste des Products
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
         
            <Segment basic>
            
              </Segment>
                 </Sidebar.Pusher>
             
       
      </div>
    )
  }
}

export default Home
