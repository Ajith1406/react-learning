import './App.css';
import { ClassComp1, ClassComp2 } from './componenents/ClassComp';
import { Click } from './componenents/Click';
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <ClassComp1/>
      <ClassComp2/>
      <Click/>
    </div>
  );
}

export default App;
