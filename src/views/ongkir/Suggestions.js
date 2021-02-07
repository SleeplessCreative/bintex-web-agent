import React from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";

var City = [];

axios
  .get("https://staging.bintex.id/api/delivery/city")
  .then(function (response) {
    //console.log(response.data.rajaongkir.results);
    City = response.data.rajaongkir.results;
  })
  .catch(function (error) {
    console.log(error);
  });

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return City.filter((City) => regex.test(City.city_name));
}

function getSuggestionValue(suggestion) {
  //console.log(suggestion.city_name);
  return suggestion.city_name;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.city_name}</span>;
}

class Suggestions extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onSuggestionSelected = (event, { suggestion }) => {
    this.props.parentCallback(suggestion.city_name);
    event.preventDefault();
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: this.props.inputHolder,
      value,
      onChange: this.onChange,
    };
    const theme = {
      container: { position: "relative" },
      input: {
        display: "block",
        width: "100%",
        height: "calc(1.5em+0.75rem+2px)",
        padding: "0.375rem 0.75rem",
        fontSize: "0.875rem",
        fontWeight: "400",
        lineHeight: "1.5",
        backgroundClip: "padding-box",
        border: "1px solid",
        color: "#5c6873",
        backgroundColor: "#fff",
        borderColor: "#e4e7ea",
        borderRadius: "0.25rem",
        transition:
          "borderColor 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
      },
      suggestionsContainerOpen: {
        position: "absolute",
        width: "100%",
        maxHeight: "120px",
        overflowY: "auto",
        zIndex: "50",
        border: "1px solid",
        borderColor: "#e4e7ea",
      },
      suggestion: {
        backgroundColor: "#fff",
        cursor: "pointer",
        padding: "10px 0px 10px 20px",
        margin: "0px 0px 0px -40px",
        listStyleType: "none",
      },
      suggestionHighlighted: {
        backgroundColor: "#e4e7ea",
      },
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
        theme={theme}
        className="max-w-xl mx-auto"
      />
    );
  }
}

export default Suggestions;
