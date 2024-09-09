import ReactDOM from 'react-dom'; // Importa ReactDOM para manipular el DOM.
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Importa componentes de enrutamiento de React Router.
import Explore from './Explore'; // Importa el componente Explore
import Notifications from './Notifications';
import MainContent from './MainContent';

  const AppTwiter = () => (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );


ReactDOM.render(<AppTwiter />, document.getElementById('root'));
export default AppTwiter
