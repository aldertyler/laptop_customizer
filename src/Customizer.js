import React from "react";
import CustomPart from "./CustomPart";

export default class Customize extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Customize Your Laptop</h2>
        {Object.keys(this.props.features).map((feature, idx) => (
          <CustomPart
            featureHash={feature + "-" + idx}
            selected={this.props.selected}
            currency={this.props.currency}
            key={idx}
            featureName={feature}
            features={this.props.features[feature]}
            select={this.props.select}
          />
        ))}
      </div>
    );
  }
}
