import Datalist from '../components/Datalist/index'

export default function Home() {
  return (
    <div>
      <Datalist
        id={'rating'}
        listName={'ratings'}
        options={[1, 2, 3, 4, 5]}
        labelText={'Betyg:'}
      />

    </div>
  );
}
