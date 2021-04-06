import React, {Component} from 'react';
import {Text, StyleSheet, View, Switch, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getSortedData} from '../modules/Home';

class SwitchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      releasesEnabled: false,
      oldEnabled: false,
      mostPopularEnabled: false,
      lessPopularEnabled: false,
      highRevenueEnabled: false,
      lowRevenueEnabled: false,
    };
  }

  handleClick = () => {
    var sortType;
    var type;
    if (this.state.releasesEnabled) {
      sortType = 'release_date.desc';
      type = 'Relases';
    } else if (this.state.oldEnabled) {
      sortType = 'release_date.asc';
      type = 'Old';
    } else if (this.state.mostPopularEnabled) {
      sortType = 'popularity.desc';
      type = 'Most Popular';
    } else if (this.state.lessPopularEnabled) {
      sortType = 'popularity.asc';
      type = 'Less Popular';
    } else if (this.state.highRevenueEnabled) {
      sortType = 'revenue.desc';
      type = 'Higher Revenue';
    } else if (this.state.lowRevenueEnabled) {
      sortType = 'revenue.asc';
      type = 'Lower Revenue';
    }

    this.props.getSortedData(1, sortType, type);
    this.props.setModalVisible(false);
  };

  render() {
    const {
      releasesEnabled,
      oldEnabled,
      mostPopularEnabled,
      lessPopularEnabled,
      highRevenueEnabled,
      lowRevenueEnabled,
    } = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.transparentView} />
        <View style={styles.mainBody}>
          <Text style={styles.filterText}> Filter </Text>
          <Text style={styles.filterText2}>Date</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.filterText3}>Releases</Text>
            <Switch
              value={releasesEnabled}
              onValueChange={() =>
                this.setState({
                  releasesEnabled: !releasesEnabled,
                  oldEnabled: false,
                  mostPopularEnabled: false,
                  lessPopularEnabled: false,
                  highRevenueEnabled: false,
                  lowRevenueEnabled: false,
                })
              }
            />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.filterText3}>Old</Text>
            <Switch
              value={oldEnabled}
              onValueChange={() =>
                this.setState({
                  oldEnabled: !oldEnabled,
                  releasesEnabled: false,
                  mostPopularEnabled: false,
                  lessPopularEnabled: false,
                  highRevenueEnabled: false,
                  lowRevenueEnabled: false,
                })
              }
            />
          </View>
          <Text style={styles.filterText2}>Popularity</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.filterText3}>Most popular</Text>
            <Switch
              value={mostPopularEnabled}
              onValueChange={() =>
                this.setState({
                  mostPopularEnabled: !mostPopularEnabled,
                  oldEnabled: false,
                  releasesEnabled: false,
                  lessPopularEnabled: false,
                  highRevenueEnabled: false,
                  lowRevenueEnabled: false,
                })
              }
            />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.filterText3}>Less popular</Text>
            <Switch
              value={lessPopularEnabled}
              onValueChange={() =>
                this.setState({
                  lessPopularEnabled: !lessPopularEnabled,
                  oldEnabled: false,
                  releasesEnabled: false,
                  mostPopularEnabled: false,
                  highRevenueEnabled: false,
                  lowRevenueEnabled: false,
                })
              }
            />
          </View>
          <Text style={styles.filterText2}>Date</Text>
          <View style={styles.switchContainer}>
            <Text style={styles.filterText3}>Higher revenue</Text>
            <Switch
              value={highRevenueEnabled}
              onValueChange={() =>
                this.setState({
                  highRevenueEnabled: !highRevenueEnabled,
                  oldEnabled: false,
                  releasesEnabled: false,
                  mostPopularEnabled: false,
                  lessPopularEnabled: false,
                  lowRevenueEnabled: false,
                })
              }
            />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.filterText3}>Lowest revenue</Text>
            <Switch
              value={lowRevenueEnabled}
              onValueChange={() =>
                this.setState({
                  lowRevenueEnabled: !lowRevenueEnabled,
                  oldEnabled: false,
                  releasesEnabled: false,
                  mostPopularEnabled: false,
                  lessPopularEnabled: false,
                  highRevenueEnabled: false,
                })
              }
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.handleClick()}>
            <Text style={styles.btnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  transparentView: {
    flex: 2,
  },
  mainBody: {
    flex: 5,
    backgroundColor: '#202121',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  filterText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  filterText2: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 20,
  },
  filterText3: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  btn: {
    backgroundColor: '#5a6363',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 25,
  },
  btnText: {
    color: '#fff',
  },
});

const mapDispatchToProps = (dispatch) => ({
  getSortedData: (page, sortType, type) =>
    dispatch(getSortedData(page, sortType, type)),
});

export default connect(null, mapDispatchToProps)(SwitchModal);
