import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {getData, getSortedData} from '../modules/Home';
import SwitchModal from '../components/SwitchModal';

const FlatListItem = ({item, genreArray}) => {
  const genre = item.genre_ids.map((genreId) => {
    return genreArray.filter((genreItem) => {
      if (genreItem.id === genreId) {
        return genreItem.name;
      }
    });
  });
  return (
    <View style={styles.listItemContainer}>
      {item.poster_path ? (
        <Image
          style={styles.listItemImage}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
        />
      ) : (
        <View style={styles.listItemImage}>
          <Image
            style={styles.listItemImage2}
            source={require('../assets/icons8-no-camera-50.png')}
          />
        </View>
      )}
      <View style={styles.listItemDescriptionContainer}>
        <View>
          <Text style={styles.listItemTitle}>{item.title}</Text>
          <Text style={styles.listItemYear}>
            {item.release_date.slice(0, 4)} | English
          </Text>
          <View style={styles.genre}>
            {genre.map((text, index) => {
              if (index < 2) {
                return (
                  <Text key={index} style={styles.listItemYear}>
                    {text[0].name}{' '}
                  </Text>
                );
              }
            })}
          </View>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingTxt}>{item.vote_average}</Text>
        </View>
      </View>
    </View>
  );
};

const SecondFlatList = ({item}) => {
  return (
    <View style={styles.secondListItem}>
      {item.poster_path ? (
        <Image
          style={styles.secondlistItemImage}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
        />
      ) : (
        <View style={styles.secondlistItemImage}>
          <Image
            style={styles.listItemImage2}
            source={require('../assets/icons8-no-camera-50.png')}
          />
        </View>
      )}
      <Text style={styles.secondTitle}>{item.title}</Text>
    </View>
  );
};

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: false,
      modalVisible: false,
    };
  }

  LoadMorePages = () =>
    this.props.getSortedData(
      this.props.page + 1,
      this.props.sortType,
      this.props.type,
    );

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  componentDidMount() {
    this.props.getSortedData(1, 'popularity.desc', 'Most Popular');
  }
  render() {
    const {moviesArray, genreArray} = this.props;
    console.log('Length of current moviesArray Array ' + moviesArray.length);
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <SafeAreaView style={styles.upperContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.header}>
              <Text style={styles.homeText}>Home</Text>
              <TouchableOpacity
                onPress={() =>
                  this.setState({modalVisible: !this.state.modalVisible})
                }>
                <AntDesign name="filter" color="#fff" size={20} />
              </TouchableOpacity>
            </View>
            <View style={styles.belowHeader}>
              <Text style={styles.belowHeaderText}>{this.props.type}</Text>
              <TouchableOpacity
                onPress={() => this.setState({grid: !this.state.grid})}>
                <Feather name="grid" color="#fff" size={20} />
              </TouchableOpacity>
            </View>
            {this.state.grid ? (
              <FlatList
                data={moviesArray}
                renderItem={({item}) => <SecondFlatList item={item} />}
                key={'_'}
                keyExtractor={(item) => '_' + item.id.toString()}
                numColumns={2}
                onEndReachedThreshold={0}
                onEndReached={this.LoadMorePages}
              />
            ) : (
              <FlatList
                data={moviesArray}
                renderItem={({item}) => (
                  <FlatListItem item={item} genreArray={genreArray} />
                )}
                key={'#'}
                keyExtractor={(item) => '#' + item.id.toString()}
                onEndReachedThreshold={0}
                onEndReached={this.LoadMorePages}
              />
            )}
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}>
            <SwitchModal
              setModalVisible={(visible) => this.setModalVisible(visible)}
            />
          </Modal>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#111112',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  homeText: {
    color: '#fff',
    fontSize: 16,
  },
  belowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
  belowHeaderText: {
    color: '#fff',
    fontSize: 18,
  },
  listItemContainer: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  listItemImage: {
    width: 140,
    height: 190,
    marginLeft: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemImage2: {
    width: 100,
    height: 100,
    marginLeft: 25,
    borderRadius: 5,
  },
  listItemDescriptionContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 25,
  },
  listItemTitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'left',
  },
  listItemYear: {
    color: '#fff',
  },
  rating: {
    color: '#fff',
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  ratingTxt: {
    color: '#fff',
  },
  genre: {
    flexDirection: 'row',
  },
  secondListItem: {flex: 1, alignItems: 'center'},
  secondlistItemImage: {
    width: 140,
    height: 190,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondTitle: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    moviesArray: state.moviesArray,
    genreArray: state.genreArray,
    type: state.type,
    sortType: state.sortType,
    page: state.page,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSortedData: (page, sortType, type) =>
    dispatch(getSortedData(page, sortType, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
