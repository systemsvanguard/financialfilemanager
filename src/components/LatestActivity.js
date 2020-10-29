// src/components/LatestActivity.js
import React from 'react'
import axios from 'axios';
// import { NavLink } from 'react-router-dom'

export default class LatestActivity extends React.Component {
  state = {
    customers: []
  }

  componentDidMount() {
    axios.get(`https://financialfileapi.openode.io/apidb` ,{ params: { _limit: 5 }}  )
      .then(res => {
        const customers = res.data;
        this.setState({ customers });
      })
  }

  render() {
    return (
      <div style={{overFlowX: "auto"}}>
        <h3 className="is-size-5 has-text-weight-bold myheadings">Latest Activity</h3>
	      <table className="bbcptable">
          <thead><tr><th>Customer Name</th><th>Last Action</th><th> </th><th>Status</th></tr></thead>
          <tbody>
              {
            this.state.customers.map(
              customer => <tr>
              <td>{customer.clientname}</td>
              <td>{customer.last_action}</td>
              <td>{customer.notification_badge}</td>
              <td>{customer.status}</td>
            </tr>
            )
          }
          </tbody>
       </table>
	   </div>
    )
  }
}
