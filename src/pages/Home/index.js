import React from 'react';
import {StatusBar, Text, FlatList, View} from 'react-native';

import {
  HomeContainer,
  HeaderAddUser,
  InputAddUser,
  ButtonAddUser,
  AddIcon,
  UsersList,
  AvatarImage,
  LoadingIcon,
  ViewInput,
  CardUser,
  SeeUserData,
  SeeUserDataButton,
  UserBio,
} from './style';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      usersList: [],
      UserNotFound: null,
      loading: false,
    };
  }

  componentDidUpdate() {}

  handleClickAddUserButton = () => {
    if (this.state.loading === false) {
      const {textInput} = this.state;
      if (textInput.length > 0) {
        this.setState({loading: true});
        fetch(`https://api.github.com/users/${textInput}`)
          .then((response) => response.json())
          .then((json) => {
            if (json.message === 'Not Found') {
              return this.setState({
                UserNotFound: (
                  <Text style={{color: 'red'}}>USUARIO NAO EXISTE</Text>
                ),
                loading: false,
              });
            } else {
              return this.setState({
                UserNotFound: null,
                loading: false,
                textInput: '',
                usersList: [...this.state.usersList, json],
              });
            }
          });
      } else {
        return this.setState({
          UserNotFound: <Text style={{color: 'green'}}>Digite Algo</Text>,
        });
      }
    }
  };

  handleText = (text) => {
    this.setState({textInput: text});
  };

  handleClickSeeProfile = (item) => {
    this.props.navigation.navigate('details', {
      item,
    });
  };

  render() {
    const {loading} = this.state;
    return (
      <>
        <StatusBar backgroundColor="#6a3cc0" barStyle="light-content" />
        <HomeContainer>
          <HeaderAddUser>
            <ViewInput>
              <InputAddUser
                value={this.state.textInput}
                onChangeText={(text) => this.handleText(text)}
              />
              {this.state.UserNotFound}
            </ViewInput>
            <ButtonAddUser onPress={this.handleClickAddUserButton}>
              {loading ? <LoadingIcon /> : <AddIcon />}
            </ButtonAddUser>
          </HeaderAddUser>
          <UsersList
            data={this.state.usersList}
            renderItem={({item}) => {
              return (
                <CardUser>
                  <AvatarImage source={{uri: item.avatar_url}} />
                  <Text style={{fontSize: 20}}>{item.name}</Text>
                  {item.bio === null ? null : <UserBio>{item.bio}</UserBio>}
                  <SeeUserData onPress={() => this.handleClickSeeProfile(item)}>
                    <SeeUserDataButton>Ver perfil</SeeUserDataButton>
                  </SeeUserData>
                </CardUser>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </HomeContainer>
      </>
    );
  }
}

export default Home;
