import React from 'react';
import {Text, Image, View, ScrollView} from 'react-native';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.route.params.item,
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitle: this.state.item.login,
    });
  }

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          padding: 20,
        }}>
        <ScrollView>
          <Image
            source={{uri: this.state.item.avatar_url}}
            style={{
              width: 180,
              height: 180,
              borderRadius: 160,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginVertical: 10,
              color: '#4e2b91',
              textAlign: 'center',
            }}>
            {this.state.item.name}
          </Text>
          <Text style={{fontSize: 18, textAlign: 'center', color: '#00000070'}}>
            {this.state.item.bio}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default Details;
