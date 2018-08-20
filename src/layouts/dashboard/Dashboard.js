import React, { Component } from 'react'
import { Table, Button, Grid } from 'semantic-ui-react'
import UserDetailedModal from 'components/common/UserDetailedModal'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props

    this.state = {};
    this.state.datas = [{
      name: 'aaa',
      email: 'email1.e.com',
      address: 'address1',
      userType: 'Buyer',
      userState: 'Pending'
    }, {
      name: '21433214',
      email: 'email2.e.com',
      address: 'address1',
      userType: 'Seller',
      userState: 'Pending'
    }, {
      name: '334354654',
      email: 'email3.e.com',
      address: 'address1',
      userType: 'Owner',
      userState: 'Approved'
    }];
    
    this.state.contactInfo = {
      address: "adskflasjdf",
      abi: "klsdjflksdf",
      balance: "0.1 ETH",
      stores: 97,
      sellers: 98,
      admins: 99,
    }
  }

  //{Pending, Approved}
  showState(state) {
    if (state == 'Pending')
      return (<Table.Cell negative>{state}</Table.Cell>);
    else
      return (<Table.Cell positive>{state}</Table.Cell>);
  }

  showTypeBtn(curType, tgtType, title, email) {
    if (curType == tgtType)
      return (<Button>{tgtType}</Button>);
    else
      return (<Button positive onClick={() => this.onClickUserType(tgtType, email)}>{tgtType}</Button>);
  }
  showTypeBtns(type, email) {
    return (
      <Table.Cell>
        <Button.Group>
          {this.showTypeBtn(type, 'Buyer', 'Buyer', email)}
          <Button.Or />
          {this.showTypeBtn(type, 'Seller', 'Seller', email)}
          <Button.Or />
          {this.showTypeBtn(type, 'Owner', 'Owner', email)}
        </Button.Group>
      </Table.Cell>);
  }

  showStateBtns(state, email) {
    if (state == 'Approved') {
      return (
        <Table.Cell>
          <Button.Group>
            <Button onClick={() => this.onClickUserState('Pending', email)}>Pending</Button>
            <Button.Or />
            <Button positive>Approve</Button>
          </Button.Group>
        </Table.Cell>);
    } else {
      return (
        <Table.Cell>
          <Button.Group>
            <Button negative>Pending</Button>
            <Button.Or />
            <Button onClick={() => this.onClickUserState('Approved', email)}>Approve</Button>
          </Button.Group>
        </Table.Cell>);
    }
  }

  onClickUserType(type, email) {
    alert(type + "   " + email);
  }

  onClickUserState(state, email) {
    alert(state + "   " + email);
  }

  render() {
    return(
      <main className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Contact Info</h3>
            <Grid>
              {Object.keys(this.state.contactInfo).map((key) => 
                <Grid.Column width={2} key={key}>
                  <p as='h5' >{key}: {this.state.contactInfo[key]}</p>
                </Grid.Column>)}
            </Grid>
          </div>
          <hr/>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>User Information</h3>
            <Table celled structured>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell rowSpan='2'>No</Table.HeaderCell>
                  <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
                  <Table.HeaderCell rowSpan='2'>email</Table.HeaderCell>
                  <Table.HeaderCell rowSpan='2'>address</Table.HeaderCell>
                  <Table.HeaderCell rowSpan='2'>User type</Table.HeaderCell>
                  <Table.HeaderCell rowSpan='2'>User state</Table.HeaderCell>
                  <Table.HeaderCell rowSpan='2'>Details</Table.HeaderCell>
                  <Table.HeaderCell colSpan='2'>Action</Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell>Change user type</Table.HeaderCell>
                  <Table.HeaderCell>Change user state</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
              {this.state.datas.map((item, index) => {
                return ( <Table.Row key={item.email}>
                          <Table.Cell>{index + 1}</Table.Cell>
                          <Table.Cell>{item.name}</Table.Cell>
                          <Table.Cell>{item.email}</Table.Cell>
                          <Table.Cell>{item.address}</Table.Cell>
                          <Table.Cell>{item.userType}</Table.Cell>
                          {this.showState(item.userState)}

                          {this.showTypeBtns(item.userType, item.email)}
                          {this.showStateBtns(item.userState, item.email)}
                          <Table.Cell><UserDetailedModal info={item}/></Table.Cell>
                        </Table.Row> )})
              }
                
              </Table.Body>
            </Table>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
