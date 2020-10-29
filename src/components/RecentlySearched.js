// src/components/RecentlySearched.js
import React from 'react'
import axios from 'axios';
// import { NavLink } from 'react-router-dom'

export default class RecentlySearched extends React.Component {
  state = {
    clients: []
  }

  componentDidMount() {
    axios.get(`https://financialfileapi.openode.io/apidb` ,{ params: { _limit: 5 }}  )
      .then(res => {
        const clients = res.data;
        this.setState({ clients });
      })
  }

  render() {
    return (
      <div style={{overFlowX: "auto"}}>
        <h3 className="is-size-5 has-text-weight-bold myheadings">Recently Searched</h3>
	      <table className="bbcptable">
          <thead><tr><th>Client Name</th><th>Type</th><th>Mailing Street</th><th>City</th></tr></thead>
          <tbody>
              {
            this.state.clients.map(
              client => <tr>
              <td>{client.clientname}</td>
              <td>{client.type}</td>
              <td>{client.mailing_street}</td>
              <td>{client.mailing_city}</td>
            </tr>
            )
          }
          </tbody>
       </table>
	   </div>
    )
  }
}
