import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Appbar, TextInput} from 'react-native-paper';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  inputWrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'white',
  },
});

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  render() {
    return (
      <View style={styles.root}>
        <Appbar.Header style={{backgroundColor: 'blue'}}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content title="Add New Item" />
          <Appbar.Action
            icon="check"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </Appbar.Header>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            label="Name"
            mode="outlined"
            value={this.state.name}
            onChangeText={name => this.setState({name})}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            label="Description"
            mode="outlined"
            multiline
            textAlignVertical="top"
            value={this.state.description}
            onChangeText={description => this.setState({description})}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
});

const mapDispatchToProps = dispatch => ({});

AddItem.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
