import './App.css';
import { TaskListComponent } from './components/container/task_list';

function AppRouting() {
  let loged = false;


  return (
    <div className="App">
      
        {/* Componente de Listado de Tareas */}
        <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default AppRouting;
