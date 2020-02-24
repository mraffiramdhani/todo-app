import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {Appbar, List} from 'react-native-paper';
import {withNavigationFocus} from 'react-navigation';
import {connect} from 'react-redux';
import {getItem} from '../../redux/action/item';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});

class HomeBase extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getItem();
    this.props.navigation.addListener('didFocus', () => this.onFocus());
  }

  onFocus() {
    this.props.getItem();
  }

  onDone() {
    Alert.alert('To Do Message', 'Check this item ?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Confirm', onPress: () => console.log('confirmed')},
    ]);
  }

  render() {
    return (
      <View style={styles.root}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.item.isLoading}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}>
            <ActivityIndicator color="white" size="large" />
          </View>
        </Modal>
        <Appbar.Header style={{backgroundColor: 'blue'}}>
          <Appbar.Content title="To Do" />
          <Appbar.Action
            icon="plus-circle"
            onPress={() => this.props.navigation.navigate('AddItem')}
          />
        </Appbar.Header>
        <View>
          <ScrollView>
            {this.props.item.data.map((l, i) => (
              <List.Item
                key={i}
                title={l.name}
                description={l.localName}
                left={props => <List.Icon {...props} icon="calendar" />}
                onPress={this.onDone}
                right={props => {
                  if (l.done) {
                    return <List.Icon {...props} icon="check" />;
                  }
                }}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    item: state.item,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItem: () => dispatch(getItem()),
  };
};

const Home = withNavigationFocus(HomeBase);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
