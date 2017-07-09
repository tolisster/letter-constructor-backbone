import './styles/application.css';
import 'bootstrap';
import 'jquery-ui-bundle';
import App from 'components/App';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start();
});
