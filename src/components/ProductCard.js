import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import moment from 'moment';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offerDuration: moment.duration().add(this.props.offerDuration),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false,
    };
  }

  handleTimer = () => {
    const x = setInterval(() => {
      let {offerDuration} = this.state;

      if (offerDuration <= 0) {
        clearInterval(x);
        this.setState({expired: true});
      } else {
        offerDuration = offerDuration.subtract(1, 's');
        const days = offerDuration.days();
        const hours = offerDuration.hours();
        const minutes = offerDuration.minutes();
        const seconds = offerDuration.seconds();

        this.setState({
          offerDuration: offerDuration,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        });
      }
    }, 1000);
  };

  componentDidMount() {
    this.handleTimer();
  }

  render() {
    const {title, price} = this.props;
    const {days, hours, minutes, seconds, expired} = this.state;
    return (
      <View style={styles.itemContainer}>
        <Image source={require('../assets/1.jpeg')} style={styles.image} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}> {title} </Text>
          <View style={styles.priceTimerContainer}>
            <Text style={styles.title}> {price} </Text>
            <View style={styles.timer}>
              {expired ? (
                <Text>Expired</Text>
              ) : (
                <View>
                  <Text>Sale Ends In</Text>
                  <Text
                    style={
                      styles.timer
                    }>{`${days} : ${hours} : ${minutes} : ${seconds}`}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    elevation: 10,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    height: 100,
    borderRadius: 10,
  },
  title: {
    flex: 2,
  },
  descriptionContainer: {
    padding: 10,
  },
  priceTimerContainer: {
    flexDirection: 'row',
  },
});
