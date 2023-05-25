import { Dimensions } from 'react-native';

export interface Colors {
  originalWhite: string;
  originalBlack: string;
  originalGrey: string;
  lightTransWhite: string;
  lightTransBlack: string;
  middleLightTransBlack: string;
  middleTransBlack: string;
  specialTransRed: string;
  specialGold: string;
  specialTranslucid: string;
  specialRed: string;
  lightRed: string;
}

export interface Size {
  bFont: number;
  mFont: number;
  sFont: number;
  s1Font: number;
  bIcon: number;
  mIcon: number;
  m2Icon: number;
  s1Icon: number;
  sIcon: number;
  s2Icon: number;
}

export interface Text {
  minPassLength: string;
  emailNotExist: string;
  emailAlreadyExists: string;
  wrongEmail: string;
  wrongPass: string;
  questionLeaving: string;
  differentPass: string;
  passHaveDifferentLengths: string;
  startRegistration: string;
  saveRecord: string;
  successfullyRegistered: string;
  fillingSuggestion: string;
  emailValidationRegex: RegExp;
  enterDifferentEmail: string;
}

export const colors: Colors = {
  originalWhite: '#ffffff',
  originalBlack: '#000000',
  originalGrey: '#99999999',
  lightTransWhite: '#ffffffbb',
  lightTransBlack: '#00000022',
  middleLightTransBlack: '#00000066',
  middleTransBlack: '#00000099',
  specialTransRed: '#8d0a2299',
  specialGold: '#dfc691',
  specialTranslucid: '#88888822',
  specialRed: '#8d0a22',
  lightRed: '#F60C0C',
};

export const size: Size = {
  bFont: 32,
  mFont: 22,
  sFont: 18,
  s1Font: 20,
  bIcon: 46,
  mIcon: 34,
  m2Icon: 38,
  s1Icon: 28,
  sIcon: 22,
  s2Icon: 32,
};

export const text: Text = {
  minPassLength: 'A senha deve ter no mínimo 8 caracteres',
  emailNotExist: 'O Email informado não é cadastrado',
  emailAlreadyExists: 'O email informado já existe!',
  wrongEmail: 'Por favor preencha o email corretamente',
  enterDifferentEmail: 'Por favor insira um email diferente',
  wrongPass: 'A senha está incorreta',
  questionLeaving: 'Deseja sair da conta?',
  differentPass: 'As senhas são diferentes',
  passHaveDifferentLengths: 'As senhas têm comprimento diferente',
  startRegistration: 'Clique para iniciar um novo cadastro',
  saveRecord: 'Salvar o cadastro',
  successfullyRegistered: 'Cadastro efetuado com sucesso',
  fillingSuggestion: 'Use como senha, letras Maiusc., minusc., números e caracteres especiais',
  emailValidationRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

export const { width, height } = Dimensions.get('window');
