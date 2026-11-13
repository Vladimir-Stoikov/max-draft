import Button from './components/Button/Button';

function App() {
  return (
    <>
      <Button>primary m</Button>
      <Button variant='secondary' size='l'>
        secondary l
      </Button>
      <Button variant='ghost' size='s'>
        ghost s
      </Button>
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
