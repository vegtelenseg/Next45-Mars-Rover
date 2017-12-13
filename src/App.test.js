import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Grid from './components/Grid';


Enzyme.configure({ adapter: new Adapter() });
const app = Enzyme.mount(<App/>);

const gridProps = {
  sizeX:8,
  sizeY:8,
  roverX:5,
  roverY:4,
  roverFace: '',
  commands: 'm'
}

const appState = {
  gridSizeX: 8,
  gridSizeY: 8,
  roverX: 4,
  roverY: 5,
  roverFace: 'N',
  commands: "m"
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders Grid without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Grid
      sizeX={gridProps.sizeX}
      sizeY={gridProps.sizeY}
      roverX={gridProps.roverX}
      roverY={gridProps.roverY}
      roverFace={gridProps.roverFace}
      commands={gridProps.commands}
    />, div)
})

it('should test if Grid is defined in App', () => {
  expect(app.find(<Grid {...gridProps}/>)).toBeDefined()
});

it('should test if State is set in App', () => {
  app.setState({
    ...appState
  })
  expect(app.state()).toEqual(appState)
});

it('should test if the rover can move', () => {
  setTimeout(() => {
    console.log('Times up -- stop!');
    expect(app.state('roverX')).toEqual(4);
    app.find('input[type="submit"]').simulate('click');
    expect(app.state('roverX')).toEqual(3);
  }, 4000);

});

it('should test if the rover can turn left', () => {
    app.setState({
      ...appState,
      commands: 'l'
    })
    setTimeout(() => {
      expect(app.state('roverFace')).toEqual('N');
      app.find('input[type="submit"]').simulate('click');
      expect(app.state('roverFace')).toEqual('W');
    }, 4000)

});

it('should test if the rover can turn right', () => {
    app.setState({
      ...appState,
      commands: 'r'
    })
    setTimeout(() => {
      expect(app.state('roverFace')).toEqual('N');
      app.find('input[type="submit"]').simulate('click');
      expect(app.state('roverFace')).toEqual('E');
    }, 4000)

});

it('should test if the rover can move and turn right', () => {
    app.setState({
      ...appState,
      commands: 'mr'
    })
    setTimeout(() => {
      expect(app.state('roverFace')).toEqual('N');
      expect(app.state('roverX')).toEqual(4);
      app.find('input[type="submit"]').simulate('click');
      expect(app.state('roverFace')).toEqual('E');
      expect(app.state('roverX')).toEqual(3);
    }, 4000)

});
