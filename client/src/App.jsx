import React from 'react';
import StaffForm from './components/StaffForm';
import ScheduleForm from './components/ScheduleForm';
import StaffList from './components/StaffList';
import ScheduleList from './components/ScheduleList';


function App() {
  

  return (
    <>
   <div className="App">
      <h1>Shipping System</h1>
      <div>
        <StaffForm />
        <StaffList />
      </div>
      <div>
        <ScheduleForm />
        <ScheduleList />
      </div>
      

    </div>

    </>
  )
}

export default App
