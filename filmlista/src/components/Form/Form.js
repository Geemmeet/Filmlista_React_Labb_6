import Select from '@/components/Form/Select'
import InputField from '@/components/Form/InputField';

export default function Form({addMovie}) {
    function HandleSubmit (e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title-field');
        const rating = formData.get('rating-field');
        console.log(title, rating);

        if (!title || title.trim() === "") {
        alert("Titel får inte lämnas tom")

        } else {
          const id = function() {
          console.log("Welcome to ", str);
        };

          addMovie(id, title, rating);
          e.target.reset();  
        }
    }

    return (
    <form onSubmit={HandleSubmit}>
        <fieldset>
          <legend>Lägg till en film</legend>
          <hr />
          <InputField 
            id = {'title'}
            name = {'title-field'}
            labelText={'Titel: '}
            placeholderText={'Titel här...'}
          />
          <Select
            id={'rating'}
            name={'rating-field'}
            options={[1, 2, 3, 4, 5]}
            labelText={'Betyg:'}
          />
        </fieldset>
        <button type="submit" className='btn btn-success mt-3'>Spara</button>
      </form>
      )
}


function generateId() {


}