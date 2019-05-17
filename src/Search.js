import React from "react";
import { View, Text } from "react-native";
import { Header, Item, Icon, Input, Button } from "native-base";
import axios from "axios";

import PokeLoader from "./PokeLoader";
import SearchBody from "./SearchBody";

class Search extends React.Component {
  state = {
    pokeSearch: "",
    onCall: true,
    data: {}
  };

  searchPokemon = () => {
    this.setState({ onCall: true });
    var self = this;
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${this.state.pokeSearch.toLowerCase()}`
      )
      .then(response => {
        self.setState({ data: response.data });
        self.setState({ onCall: false });
        self.setState({ pokeSearch: "" });
      })
      .catch(error => console.log(error));
  };

  renderBody = () => {
    if (this.state.onCall) {
      return <PokeLoader />;
    } else {
      return <SearchBody data={this.state.data} />;
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" onPress={this.searchPokemon} />
            <Input
              value={this.state.pokeSearch}
              placeholder="Search Pokemon"
              onChangeText={pokeSearch => this.setState({ pokeSearch })}
            />
          </Item>
        </Header>
        {this.renderBody()}
      </View>
    );
  }
}

export default Search;
