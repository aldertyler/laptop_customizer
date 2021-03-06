import React from "react";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attribute
import slugify from "slugify";

export default class Part extends React.Component {
  render() {
    return (
      <fieldset key={this.props.featureHash} className="feature">
        <legend className="feature__name">
          <h3>{this.props.featureName}</h3>
        </legend>
        {this.props.features.map((name, idx) => (
          <div key={slugify(JSON.stringify(name))} className="feature__item">
            <input
              type="radio"
              id={slugify(JSON.stringify(name))}
              className="feature__option"
              name={slugify(this.props.featureName)}
              checked={
                name.name === this.props.selected[this.props.featureName].name
              }
              onChange={() => this.props.select(this.props.featureName, name)}
            />
            <label
              htmlFor={slugify(JSON.stringify(name))}
              className="feature__label"
            >
              {name.name} ({this.props.currency.format(name.cost)})
            </label>
          </div>
        ))}
      </fieldset>
    );
  }
}
