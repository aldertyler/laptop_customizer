import React from "react";
import CartContents from "./CartContents";

export default class Cart extends React.Component {
  render() {
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {Object.keys(this.props.selected).map((feature, idx) => {
          const featureHash = feature + "-" + idx;
          const selectedOption = this.props.selected[feature];
          return (
            <CartContents
              key={featureHash}
              selected={selectedOption}
              currency={this.props.currency}
              feature={feature}
            />
          );
        })}

        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {this.props.currency.format(total)}
          </div>
        </div>
      </section>
    );
  }
}
