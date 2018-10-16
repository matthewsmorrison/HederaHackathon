import React from 'react';
import axios from 'axios'

export class Government extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 0,
      api: 'https://pure-hamlet-28523.herokuapp.com/government/balance'
    };
  }

  componentDidMount() {

    this.interval = setInterval(() =>
    axios.get(this.state.api)
    .then(response =>
      this.setState({
        balance: response.data
      })
    ), 2000);
  }

  render() {
    return (
      <section id="wrapper" >
        <header>
            <div className="inner">
                <h2>Government View</h2>
            </div>
        </header>

        {/* Content */}
        <div className="wrapper">
          <div className="inner">

            <h3 className="major">Statistics from the government smart contract</h3>

            <div className="table-wrapper">
              <table>
                <thead>
                </thead>

                <tbody>

                  <tr>
                    <td>
                      Government Balance (HBAR)
                    </td>
                    <td style={{textAlign: "center"}}>
                      {this.state.balance.toFixed(20)}
                    </td>

                  </tr>

                </tbody>

              </table>
            </div>
          </div>

          <div className="inner">

            <h3 className="major">Pothole Locations</h3>

            <div className="table-wrapper">
              <table>
                <thead>

                  <tr>
                    <td style={{textAlign:"center"}}>Longitude</td>
                    <td style={{textAlign:"center"}}>Latitude</td>
                    <td style={{textAlign:"center"}}>Avg. Gyro Reading</td>
                    <td style={{textAlign:"center"}}>No. Of Readings</td>
                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td style={{textAlign:"center"}}>51.51867709999999789261</td>
                    <td style={{textAlign:"center"}}>-0.07843719999999999859</td>
                    <td style={{textAlign:"center", backgroundColor:"#E3A9AD", color:"black"}}>9.7</td>
                    <td style={{textAlign:"center"}}>28</td>
                  </tr>

                  <tr>
                    <td style={{textAlign:"center"}}>41.51867787769999997892</td>
                    <td style={{textAlign:"center"}}>-0.08843719999999999859</td>
                    <td style={{textAlign:"center", backgroundColor:"#F8CBAD", color:"black"}}>6.4</td>
                    <td style={{textAlign:"center"}}>32</td>
                  </tr>

                  <tr>
                    <td style={{textAlign:"center"}}>17.51867709999999789261</td>
                    <td style={{textAlign:"center"}}>-0.07843719999999999859</td>
                    <td style={{textAlign:"center", backgroundColor:"#E2F0D9", color:"black"}}>1.2</td>
                    <td style={{textAlign:"center"}}>41</td>
                  </tr>

                  <tr>
                    <td style={{textAlign:"center"}}>11.51867709999999789261</td>
                    <td style={{textAlign:"center"}}>-0.07843719999999999859</td>
                    <td style={{textAlign:"center", backgroundColor:"#C5E0B4", color:"black"}}>2.3</td>
                    <td style={{textAlign:"center"}}>12</td>
                  </tr>

                  <tr>
                    <td style={{textAlign:"center"}}>50.51867709999999789261</td>
                    <td style={{textAlign:"center"}}>-0.09843719999999999859</td>
                    <td style={{textAlign:"center", backgroundColor:"#E3A9AD", color:"black"}}>8.8</td>
                    <td style={{textAlign:"center"}}>63</td>
                  </tr>


                </tbody>

              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
