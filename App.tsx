import React from 'react';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';
// import {ThemeProvider} from '@types/styled-components';
// import {theme} from './src/infrastructure/theme';
const App = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <RestaurantsScreen />
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
