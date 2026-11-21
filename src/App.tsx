import { Button } from './components/Button/Button';
import { randomIcon } from './components/Button/test-icons';
import { IconButton } from './components/IconButton/IconButton';

function App() {
  return (
    <>
      <section className='iconGroup'>
        <Button>primary m</Button>
        <Button leftIcon={randomIcon()}>primary m</Button>
        <IconButton icon={randomIcon()} />

        <Button variant='secondary' size='l'>
          secondary l
        </Button>
        <Button variant='secondary' size='l' rightIcon={randomIcon()}>
          secondary l
        </Button>
        <IconButton variant='secondary' size='l' icon={randomIcon()} />

        <Button variant='ghost' size='s'>
          ghost s
        </Button>
        <Button variant='ghost' size='s' leftIcon={randomIcon()} rightIcon={randomIcon()}>
          ghost s
        </Button>
        <IconButton variant='ghost' size='s' icon={randomIcon()} />
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
