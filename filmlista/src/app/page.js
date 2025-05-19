import Select from '@/components/Select/index'
import InputField from '@/components/InputField';

import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <div>
      <h1 className="text-center mt-5">Min filmlista</h1>
      <form className="container">
        <fieldset>
          <legend>Lägg till en film</legend>
          <hr />
          <InputField 
            id = {'title-field'}
            labelText={'Titel: '}
            placeholderText={'Titel här...'}
            onChange ={''}
          />
          <Select
            id={'rating'}
            listName={'rating-field'}
            options={[1, 2, 3, 4, 5]}
            labelText={'Betyg:'}
          />
        </fieldset>
      </form>

    </div>
  );
}
