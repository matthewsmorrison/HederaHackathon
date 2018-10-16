import React from 'react';
import axios from 'axios'

export class Journey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 100,
      maxJourney: 0,
      longitude: 51.51867709999999789261,
      latitude: -0.07843719999999999859,
      distance: 0,
      type: 'Diesel',
      cost: 0.14,
      api: 'https://pure-hamlet-28523.herokuapp.com/user/balance',
      exchangeRate: 8.33333333,
    };
  }


  getGeoLocation = () => {

    function toRad(Value) {
      /** Converts numeric degrees to radians */
      return Value * Math.PI / 180;
    }

      function calculateDistance(oldLat, oldLon, newLat,newLon) {

        if(oldLat === 0) {
          return 0;
        }


        var R = 6371e3; // metres
        var φ1 = toRad(newLat);
        var φ2 = toRad(oldLat);
        var Δφ = toRad(newLat - oldLat);
        var Δλ = toRad(newLon - oldLon);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        var d = R * c;
        return d;
      }

    var latChange = 0.00001
    var lonChange = 0.000001

    var newDistance = calculateDistance(this.state.latitude, this.state.longitude, this.state.latitude + latChange,this.state.longitude + lonChange);
    var newMaxJourney = (this.state.balance / this.state.cost)/1000;

    axios.get(this.state.api, { crossdomain: true })
    .then(response =>
      this.setState({
        balance: response.data
      })
    )


    var url = 'https://pure-hamlet-28523.herokuapp.com/transfer?amount=' + (newDistance * this.state.cost);

    axios.get('https://pure-hamlet-28523.herokuapp.com/transfer?amount=1', { crossdomain: true })
    .then(response =>
      console.log('success')
    )

    this.setState({
      maxJourney: newMaxJourney,
      latitude: this.state.latitude - latChange,
      longitude: this.state.longitude + lonChange,
      distance: this.state.distance + newDistance
    })
  }


  componentDidMount() {
    axios.get(this.state.api, { crossdomain: true })
    .then(response =>
      this.setState({
        balance: response.data
      })
    )
    this.interval = setInterval(() => this.getGeoLocation(), 2000);
  }

componentWillUnmount() {
  clearInterval(this.interval);
}

  render() {
    return (
      <section id="wrapper" >
        <header>
            <div className="inner">
                <h2>Journey Details</h2>
            </div>
        </header>

        {/* Content */}
        <div className="wrapper">
          <div className="inner">

            <h3 className="major">Key Statistics</h3>

            <div className="table-wrapper">
              <table>
                <thead>
                </thead>

                <tbody>

                  <tr>
                    <td>Current Balance (HBAR)</td>
                    <td style={{textAlign:"center"}}>{this.state.balance.toFixed(20)}</td>
                  </tr>

                  <tr>
                    <td>Current Balance (USD)</td>
                    <td style={{textAlign:"center"}}>{(this.state.balance / this.state.exchangeRate).toFixed(20)}</td>
                  </tr>

                  <tr>
                    <td>Max Journey (km)</td>
                    <td style={{textAlign:"center"}}>{this.state.maxJourney.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                  </tr>

                  <tr>
                    <td>Latitude</td>
                    <td style={{textAlign:"center"}}>{this.state.latitude.toFixed(20)}</td>
                  </tr>

                  <tr>
                    <td>Longitude</td>
                    <td style={{textAlign:"center"}}>{this.state.longitude.toFixed(20)}</td>
                  </tr>

                  <tr>
                    <td>Distance Travelled (m)</td>
                    <td style={{textAlign:"center"}}>{this.state.distance.toFixed(20)}</td>
                  </tr>

                  <tr>
                    <td>Vehicle Type</td>
                    <td style={{textAlign:"center"}}>{this.state.type}</td>
                  </tr>

                  <tr>
                    <td>Cost Per Metre (HBAR)</td>
                    <td style={{textAlign:"center"}}>{this.state.cost.toFixed(20)}</td>
                  </tr>

                  <tr>
                    <td>Total Cost (HBAR)</td>
                    <td style={{textAlign:"center"}}>{(this.state.distance * this.state.cost).toFixed(20)}</td>
                  </tr>

                  <tr>
                    <td>Total Cost (USD)</td>
                    <td style={{textAlign:"center"}}>{((this.state.distance * this.state.cost)/this.state.exchangeRate).toFixed(20)}</td>
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
