import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';
import Filter from './features/Filter';
import ListOfAvailableColorItems from './features/ListOfAvailableColorItems';
import AmountOfColorItems from './features/AmountOfColorItems';
import SelectedColors from './features/SelectedColors';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avaibleColors: [],
      displayedColors: [],
      selectedColors: [],
      searchQuery : ""
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
    this.addColor = this.addColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  filterSearch () {
    var searchQuery = this.state.searchQuery;
    var displayedColors = this.state.avaibleColors.filter(function(el) {
      var isFind = false;
      el.tags.forEach((el) => {
          if(el.indexOf(searchQuery) !== -1) {
            isFind = true;
          };
      });
      return isFind === true
    });

    this.setState({
      displayedColors: displayedColors
    });
  }

  handleSearch (event) {
    this.setState({
      searchQuery: event.target.value.toLowerCase()
    }, () => {
      this.filterSearch();
    })
  }

  addColor (color) {
    if(this.state.selectedColors.length < 10) {
      var avaibleColors = [...this.state.avaibleColors];
      var indexAvaible = avaibleColors.indexOf(color);
      avaibleColors.splice(indexAvaible, 1);
  
      this.setState({
        selectedColors: [...this.state.selectedColors, color],
        avaibleColors: avaibleColors,
      }, () => {
        this.filterSearch();
      })
    }
  }

  removeColor (color) {
    var selectedColors = [...this.state.selectedColors];
    var indexselected = selectedColors.indexOf(color);
    selectedColors.splice(indexselected, 1);

    var avaibleColors = [...this.state.avaibleColors, color];

    avaibleColors.sort(function(a, b) {
      return (a.id - b.id);
    });

    this.setState({
      selectedColors: selectedColors,
      avaibleColors: avaibleColors,
    }, () => {
      this.filterSearch();
    })
  }
  
  componentDidMount() {
    fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
      .then(response => response.json())
      .then(data => this.setState({avaibleColors: data, displayedColors: data}));
  }


  render() {
    return (
      <React.Fragment>
          <div className="header">
            <Filter handleSearch={this.handleSearch} />
            <SelectedColors colors={this.state.selectedColors.slice(
            this.state.selectedColors.length > 5 ? this.state.selectedColors.length-5 : 0 , 
            this.state.selectedColors.length)} removeColor={this.removeColor}/>
          </div>
        {this.state.avaibleColors.length > 0 ?
        <React.Fragment>
          <AmountOfColorItems amount={this.state.displayedColors.length}/>
          <ListOfAvailableColorItems colors={this.state.displayedColors} addColor={this.addColor} />
         </React.Fragment>
         :
         <div className="loader">
           <div className="spinner">
             <div className="bounce1"></div>
             <div className="bounce2"></div>
             <div className="bounce3"></div>
           </div>
         </div>
        }
      </React.Fragment>
    );
  }
}

// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);