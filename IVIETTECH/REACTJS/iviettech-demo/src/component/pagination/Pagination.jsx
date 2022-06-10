import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    const {totalPage, currentPage} = this.props

    let arrPage = [];
    for (let i = 1; i <= totalPage; i++) {
      arrPage.push(i);
    }
    return (
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" aria-label="Previous" name='previous' onClick={this.props.handlePagination}>
            «
          </a>
        </li>
        {
          (totalPage > 5)? 
          ""
          :
          (currentPage) && arrPage.map((val,index) => (
            <li className="page-item" key={index}>
              <a className="page-link" id={val} name='choose' style={(val==currentPage)?{backgroundColor: 'yellowgreen'}:{backgroundColor:''}}
              onClick={this.props.handlePagination}
              >{val}</a>
            </li>
          ))
        }

        <li className="page-item">
          <a className="page-link" aria-label="Next" name='next' onClick={this.props.handlePagination}>
            »
          </a>
        </li>
      </ul>
    );
  }
}
