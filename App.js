import React from 'react';
import {Font} from 'expo'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import Reducer from './src/reducer'
import Holder from './src/component/HolderComponent'
import ClassifyContainer from './src/container/ClassifyContainer'

const middleware = applyMiddleware(thunk)
const store = createStore(Reducer, middleware)

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { fontLoaded: false }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'sf-regular': require('./assets/fonts/SFProText-Regular.ttf'),
      'sf-light': require('./assets/fonts/SFProText-Light.ttf'),
      'sf-medium': require('./assets/fonts/SFProText-Medium.ttf'),
      'sf-bold': require('./assets/fonts/SFProText-Bold.ttf'),
    });
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <Provider store={store}>
        <Holder isLoading={!this.state.fontLoaded}>
          <ClassifyContainer />
        </Holder>
      </Provider>
    );
  }
}