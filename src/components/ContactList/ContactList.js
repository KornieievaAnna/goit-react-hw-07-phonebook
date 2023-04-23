import { useEffect, useRef } from 'react';
import { Contacts, ButtonDelete } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact, fetchContacts } from 'redux/operations';
import { selectAllContacts } from 'redux/selector';

export default function ContactList() {
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(fetchContacts());
    }
    isFirstRender.current = false;
    return;
  }, [dispatch]);

  const contacts = useSelector(selectAllContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contacts key={id}>
          {name}: {number}
          <ButtonDelete onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ButtonDelete>
        </Contacts>
      ))}
    </ul>
  );
}
