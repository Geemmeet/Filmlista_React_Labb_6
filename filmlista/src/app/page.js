import Select from '@/components/Select/index'
import InputField from '@/components/InputField';

import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <div>
      <form className="container">

        <InputField />
        <Select
          id={'rating'}
          listName={'ratings'}
          options={[1, 2, 3, 4, 5]}
          labelText={'Betyg:'}
        />
      </form>

    </div>
  );
}
