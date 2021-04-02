import Imageshow from './components/Slidershow'
import images from './images';

import { Container } from './styles.js';

function App() {
  return (
    <div>
      <h1>Slidershow</h1>
      <Container>
        <Imageshow images={images} />
      </Container>
    </div>
  );
}

export default App;
