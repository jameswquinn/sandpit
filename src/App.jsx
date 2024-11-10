import { h } from 'preact';
import { Router } from 'preact-router';
import InvitationPage from './components/InvitationPage';
import PageContent from './components/PageContent';
import ArtGallery from './components/ArtGallery';

const App = () => (
  <Router>
    <InvitationPage path="/" />
    <PageContent path="/reflections" pageName="reflections" />
    <PageContent path="/poetry" pageName="poetry" />
    <ArtGallery path="/art-gallery" />
  </Router>
);

export default App;
