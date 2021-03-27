import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {updateData} from '../modules/home';

class EditDataModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      userId: '',
      title: '',
      description: '',
    };
  }

  handleUpdatedData = () => {
    const data = {
      id: parseInt(this.state.id, 10),
      userId: parseInt(this.state.userId, 10),
      title: this.state.title,
      body: this.state.description,
    };
    console.log(data);
    this.props.updateData(data);
    this.props.setModalVisible(false);
  };

  render() {
    return (
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>This is Updating Existing data</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Updated ID"
            onChangeText={(text) => this.setState({id: text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Updated userId"
            onChangeText={(text) => this.setState({userId: text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Updated Title"
            onChangeText={(text) => this.setState({title: text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Updated Description"
            onChangeText={(text) => this.setState({description: text})}
          />
          <TouchableOpacity onPress={this.handleUpdatedData}>
            <Text>Update</Text>
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
  updateData: (data) => dispatch(updateData(data)),
});

export default connect(null, mapDispatchToProps)(EditDataModel);
