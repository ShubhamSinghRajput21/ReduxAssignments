import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {connect} from 'react-redux';
import {getData, deleteData} from '../modules/home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AddDataModel from '../components/AddDataModel';
import EditDataModel from '../components/EditDataModel';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isEditDataModalVisible: false,
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  setAddDataModalVisible = (visible) => {
    this.setState({isModalVisible: visible});
  };

  setEditDataModalVisible = (visible) => {
    this.setState({isEditDataModalVisible: visible});
  };

  handledeleteData = (id) => {
    this.props.deleteData(id);
  };

  render() {
    const {data} = this.props;
    console.log('Length of current Data Array ' + data.length);
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.header}>
          <Text>Fetch API</Text>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => this.setAddDataModalVisible(true)}>
            <AntDesign name="pluscircle" size={24} color="grey" />
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.flatlist}
          data={data}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <View style={styles.listItemTitle}>
                <Text style={styles.listTitle}>{item.title}</Text>
              </View>
              <View style={styles.listItemIcons}>
                <TouchableOpacity
                  onPress={() => this.setEditDataModalVisible(true)}>
                  <AntDesign name="edit" color="blue" size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.handledeleteData(item.id)}>
                  <AntDesign name="delete" color="blue" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

        <Modal
          animationType="slide"
          visible={this.state.isModalVisible}
          transparent={true}>
          <AddDataModel setModalVisible={this.setAddDataModalVisible} />
        </Modal>
        <Modal
          animationType="slide"
          visible={this.state.isEditDataModalVisible}
          transparent={true}>
          <EditDataModel setModalVisible={this.setEditDataModalVisible} />
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#42f5c8',
  },
  header: {
    position: 'relative',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcon: {
    position: 'absolute',
    right: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 0.5,
  },
  listTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  listItemTitle: {
    flex: 3,
  },
  listItemIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  flatlist: {
    marginBottom: '10%',
  },
});

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
  deleteData: (id) => dispatch(deleteData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
