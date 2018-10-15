import React from 'react';

export class Journey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      longitude: 0,
      latitude: 0,
      distance: 0,
      type: 'Diesel',
      cost: 0.00000014,
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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {

          var newDistance = calculateDistance(this.state.latitude, this.state.longitude, position.coords.latitude, position.coords.longitude);

          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            distance: this.state.distance + newDistance
          })
        }
      )
    } else {
      error => console.log(error)
    }
  }

  componentWillUpdate () {
    this.getGeoLocation();
  }

  componentDidMount() {
    this.getGeoLocation();
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

            <h3 className="major">Key statistics about your current journey</h3>

            <div className="table-wrapper">
              <table>
                <thead>
                </thead>

                <tbody>

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
                    <td>Cost Per Metre (Hadera Token)</td>
                    <td style={{textAlign:"center"}}>{this.state.cost.toFixed(20)}</td>
                  </tr>

                  <tr>
                    <td>Total Cost (Hadera Token)</td>
                    <td style={{textAlign:"center"}}>{(this.state.distance * this.state.cost).toFixed(20)}</td>
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
