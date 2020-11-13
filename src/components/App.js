import '../css/App.css';

import AddApointments from  './AddApointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';

function App() {
  return (
    <main className="page bg-white" id="petratings">
    <div className="container">
      <div className="row">
        <div className="col-md-12 bg-white">
          <div className="container">
            <div><AddApointments /></div>
            <div><SearchAppointments /></div>
            <div><ListAppointments /></div>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default App;
