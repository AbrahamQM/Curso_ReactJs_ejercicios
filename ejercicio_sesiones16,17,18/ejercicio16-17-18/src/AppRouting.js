import './App.css';
import { TaskListComponent } from './components/container/task_list';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Loginformik from './components/pure/forms/loginFormik';
import { useEffect } from 'react';


function AppRouting() {
  const [logged, setLogged] = useState(false)

  function changeLogged(){
    setLogged(!logged);
    console.log('changeLogged, ahora logged es:', logged)
  }

  useEffect( () =>{
    console.log('Logged ha cambiado, ahora es:', logged)
  }, [logged])

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {
            logged ? 
            <TaskListComponent setLogged={changeLogged}/>
            :
            <Loginformik setLogged={changeLogged} logged={logged}/>
          }
        </Route>
      </Switch>
    </Router>
      
        
  );
}

export default AppRouting;
