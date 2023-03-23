import { Items } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ removeContact, contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Items key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => {
                removeContact(id);
              }}
            >
              Delete
            </button>
          </Items>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};