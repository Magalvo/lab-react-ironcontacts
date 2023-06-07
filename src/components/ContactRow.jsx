const ContactRow = ({ contact, deleteContact }) => {
  return (
    <>
      <tr key={contact.id} className='contact'>
        <td style={{ width: '20%' }}>
          {' '}
          <img
            src={contact.pictureUrl}
            alt={contact.name}
            style={{
              width: '30%',
              height: '100%',
              borderRadius: '200px'
            }}
          />{' '}
        </td>
        <td>
          <b>{contact.name}</b>
        </td>
        <td>{contact.popularity}</td>
        <td>{contact.wonOscar && <p>🏆</p>}</td>
        <td>{contact.wonEmmy && <p>🏆</p>}</td>
        <td>
          <button onClick={() => deleteContact(contact.id)}>
            Delete Contact
          </button>
        </td>
      </tr>
    </>
  );
};

export default ContactRow;
