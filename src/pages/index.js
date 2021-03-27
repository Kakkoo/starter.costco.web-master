import React, { Component } from 'react';
import classes from '../components/layout.css'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { BootstrapTable, TableHeaderColumn, InsertModalHeader, InsertButton, SearchField } from 'react-bootstrap-table';
import paginationFactory from "react-bootstrap-table2-paginator"
class Home extends Component {
  state = {
    addTagPopUp: false,
    tabledata: [
      {
        id: "1",
        orderinfo: "Addidas Shoes",
        price: "50$ usd",
        description:
          "They're soft, they're bouncy and they form the core of an innovative new cushioning system designed to help make all the ways you move feel easy—even running.",
      },
      {
        id: "2",
        orderinfo: "Nike jordon",
        price: "50$ usd",
        description:
          "Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike",
      },
      {
        id: "3",
        orderinfo: "Addidas Shoes",
        price: "50$ usd",
        description:
          "They're soft, they're bouncy and they form the core of an innovative new cushioning system designed to help make all the ways you move feel easy—even running.",
      },
      {
        id: "4",
        orderinfo: "Nike jordon",
        price: "50$ usd",
        description:
          "Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike",
      },
      {
        id: "5",
        orderinfo: "Addidas Shoes",
        price: "50$ usd",
        description:
          "They're soft, they're bouncy and they form the core of an innovative new cushioning system designed to help make all the ways you move feel easy—even running.",
      },
      {
        id: "6",
        orderinfo: "Nike jordon",
        price: "50$ usd",
        description:
          "Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike",
      },
      {
        id: "1",
        orderinfo: "Addidas Shoes",
        price: "50$ usd",
        description:
          "They're soft, they're bouncy and they form the core of an innovative new cushioning system designed to help make all the ways you move feel easy—even running.",
      },
      {
        id: "2",
        orderinfo: "Nike jordon",
        price: "50$ usd",
        description:
          "Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike",
      },
      {
        id: "3",
        orderinfo: "Addidas Shoes",
        price: "50$ usd",
        description:
          "They're soft, they're bouncy and they form the core of an innovative new cushioning system designed to help make all the ways you move feel easy—even running.",
      },
      {
        id: "4",
        orderinfo: "Nike jordon",
        price: "50$ usd",
        description:
          "Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike",
      },
      {
        id: "5",
        orderinfo: "Addidas Shoes",
        price: "50$ usd",
        description:
          "They're soft, they're bouncy and they form the core of an innovative new cushioning system designed to help make all the ways you move feel easy—even running.",
      },
      {
        id: "6",
        orderinfo: "Nike jordon",
        price: "50$ usd",
        description:
          "Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike",
      },
    ],
  }

  onAddRow = (row, cell, cellValue) => {
    var newdata = this.state.tabledata
    newdata.splice(0, 0, row)
    this.setState({ tabledata: newdata })
  }
  addTagPopUpOpener = () => {
    this.setState({ addTagPopUp: true })
  }
  addTagPopHandle = () => {
    this.setState(prevState => {
      return {
        addTagPopUp: !prevState.addTagPopUp,
      }
    })
  }
  beforeClose(e) {
    alert(`[Custom Event]: Before modal close event triggered!`)
  }

  handleModalClose(closeModal) {
    closeModal()
  }

  createCustomModalHeader = (closeModal, save) => {
    return (
      <InsertModalHeader
        className="my-custom-class"
        title="Welcome to your new Gatsby site."
        beforeClose={this.beforeClose}
        onModalClose={() => this.handleModalClose(closeModal)}
      />
    )
  }
  demo(row, cell) {
    return (
      <input
        type="radio"
        name="profile"
        id={row}
        onClick={e => this.EditProduct(cell)}
      />
    )
  }
  EditProduct(cell) {
    setTimeout(
      function () {
        this.setState({ showdata: cell })
      }.bind(this),
      2000
    )
    this.setState({ showdata: "lazy" })
  }
  profile(row, cell) {
    var st = classes["bg"]
    return (
      <div>
        <div className={[classes.pname, st].join(" ")}>{cell.name}</div>
        {cell.orderinfo}
        <br />
        <small>{cell.email}</small>
      </div>
    )
  }
  render() {
    const options = {
      onAddRow: this.onAddRow.bind(this),
    }
    return (
      <div className="container">
        <div className="m-4">
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>

          <div className="row mt-4">
            <div className="col-md-6 col-sm-12">
              <BootstrapTable
                data={this.state.tabledata}
                options={options}
                search
                tableStyle={{ borderRadius: "0", border: 0 }}
                containerStyle={classes.containerStyle}
                headerStyle={classes.headerStyle}
                bodyStyle={classes.bodyStyle}
                pagination={paginationFactory({ sizePerPage: 5 })}
                insertRow
              >
                <TableHeaderColumn
                  dataField="id"
                  hiddenOnInsert={true}
                  isKey={true}
                  width="8%"
                  dataSort={true}
                  dataFormat={this.demo.bind(this)}
                ></TableHeaderColumn>
                <TableHeaderColumn
                  dataField="orderinfo"
                  dataSort={true}
                  dataFormat={this.profile.bind(this)}
                >
                  Product Info
                </TableHeaderColumn>
                <TableHeaderColumn dataField="price" dataSort={true}>
                  Price Info
                </TableHeaderColumn>
                <TableHeaderColumn
                  dataField="description"
                  hiddenOnShow={true}
                  dataSort={true}
                >
                  Description
                </TableHeaderColumn>
              </BootstrapTable>
            </div>
            <div className="col-md-6 col-sm-12 mt-sm-4">
              {this.state.showdata != "lazy" && this.state.showdata ? (
                <div className="card bg-gray border-0 p-4 bgcolor">
                  <div className="container text-center  p-4">
                    <h4>
                      <b>{this.state.showdata.orderinfo}</b>
                    </h4>
                    <p>{this.state.showdata.price}</p>
                  </div>
                  <table class="table border-0">
                    <tbody>
                      <tr>
                        <td>Product Info</td>
                        <td>{this.state.showdata.orderinfo}</td>
                      </tr>

                      <tr>
                        <td>Price Info</td>
                        <td>{this.state.showdata.price}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>{this.state.showdata.description}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : this.state.showdata == "lazy" ? (
                <h4 className="card-title">
                  <Skeleton circle={true} height={50} width={50} />
                  <Skeleton height={36} width={`80%`} />
                </h4>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;