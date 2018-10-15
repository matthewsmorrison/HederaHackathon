import React from 'react';

export class Vehicle extends React.Component {

  render() {
    return (
      <section id="wrapper" >
        <header>
            <div className="inner">
                <h2>Vehicle Details</h2>
            </div>
        </header>

        {/* Content */}
        <div className="wrapper">
          <div className="inner">

            <h3 className="major">Key details about your vehicle</h3>

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
