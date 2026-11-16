import Button from './components/Button/Button';
import { randomIcon } from './components/Button/test-icons';

function App() {
  return (
    <>
      <section className='iconGroup'>
        <Button>primary m</Button>
        <Button leftIcon={randomIcon()}>primary m</Button>
        <Button variant='secondary' size='l'>
          secondary l
        </Button>

        <Button variant='secondary' size='l' rightIcon={randomIcon()}>
          secondary l
        </Button>
        <Button variant='ghost' size='s'>
          ghost s
        </Button>
        <Button variant='ghost' size='s' leftIcon={randomIcon()} rightIcon={randomIcon()}>
          ghost s
        </Button>
      </section>
      <label>
        <input
          type='checkbox'
          onChange={event => {
            document.documentElement.classList.toggle('dark', event.target.checked);
          }}
        />
        Dark mode
      </label>
    </>
  );
}

export default App;
