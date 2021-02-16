import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const HomeContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
`;

export const HeaderAddUser = styled.View`
  width: 100%;
  height: 110px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  position: relative;
`;

export const InputAddUser = styled.TextInput.attrs({
  returnKeyType: 'search',
  placeholder: 'Digite o nome do usuario',
  placeholderTextColor: '#858585',
})`
  font-size: 18px;
  background-color: #dfdfdf;
  border-radius: 4px;
  height: 100%;
  width: 100%;
  padding: 0 10px;
`;

export const ViewInput = styled.View`
  height: 60px;
  flex: 1;
`;

export const ButtonAddUser = styled(RectButton)`
  width: 60px;
  height: 60px;
  background-color: #6a3cc0;
  border-radius: 4px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
`;

export const AddIcon = styled(Icon).attrs({
  name: 'add',
  size: 24,
  color: '#fff',
})``;

export const UsersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const AvatarImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin: 5px 0;
`;

export const LoadingIcon = styled.ActivityIndicator.attrs({
  size: 26,
  color: '#fff',
})``;

export const CardUser = styled.View`
  width: 100%;
  align-items: center;
  padding: 30px;
`;

export const SeeUserData = styled(RectButton)`
  width: 100%;
  height: 50px;
  background-color: #14ba7c;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const SeeUserDataButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const UserBio = styled.Text`
  font-size: 18px;
  text-align: center;
  margin: 0 0 10px 0;
`;
