import React from 'react';
import CartItem from './components/CartItem.jsx';
import Comp from './components/Comp.jsx';

// export default class App extends React.Component {
//
//   render() {
//     return (
//       <div>
//         <Comp />
//         <CartItem {...this.props} />
//       </div>
//     );
//   }
// }

// todo: write your own components
// todo: combine your components here
const App = function App(props) {
  return (
    <div>
      <Comp />
      <CartItem {...props} />
    </div>
  );
};

export default App;
