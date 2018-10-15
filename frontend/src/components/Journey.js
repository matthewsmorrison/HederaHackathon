import React from 'react';

export class Journey extends React.Component {



  componentDidMount() {
    function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

var options = {
  enableHighAccuracy: true,
  timeout: 60000,
  maximumAge: 0
};
    navigator.geolocation.watchPosition(success, error, options);

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
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
