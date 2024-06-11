import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import CardComponent from './CardComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <MyComponent /> */}
      <CardComponent title="Email" content="First Card Content" />
      <CardComponent title="Sms" content="Second Card Content" />
      
    </div>
  );
}

export default App;
