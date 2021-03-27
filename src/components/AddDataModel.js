import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {addNewData} from '../modules/home/action';

class AddDataModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  handleNewData = () => {
    const data = {
      title: this.state.title,
      body: this.state.description,
      userId: 1,
    };
    this.props.addNewData(data);
    this.props.setModalVisible(false);
  };

  render() {
    return (
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>This is adding new data</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter new Title"
            onChangeText={(text) => this.setState({title: text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter new Description"
            onChangeText={(text) => this.setState({description: text})}
          />
          <TouchableOpacity onPress={this.handleNewData}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    borderWidth: 0.5,
    width: 200,
    height: 50,
    marginVertical: 10,
    borderRadius: 10,
  },
});

const mapDispatchToProps = (dispatch) => ({
  addNewData: (data) => dispatch(addNewData(data)),
});

export default connect(null, mapDispatchToProps)(AddDataModel);
