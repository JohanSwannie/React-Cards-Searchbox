import Card from './Card';
import './styles.css';
/* eslint react/prop-types: 0 */

const CardList = ({ people }) => (
  <div className='card-list'>
    {people.map((person) => {
      return <Card key={person.id} person={person} />;
    })}
  </div>
);

export default CardList;
