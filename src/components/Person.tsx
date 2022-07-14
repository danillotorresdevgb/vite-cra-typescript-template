type PersonItemListProps = {
  name: string;
  age: number;
  status: boolean;
  onClick: () => void;
};

export const PersonItemList = ({ age, name, onClick, status }: PersonItemListProps) => {
  console.log('PersonItemList Renderizado', name);
  return (
    <li
      style={{
        padding: '5px',
        border: '1px solid #ccc',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        backgroundColor: !status ? '#ccc' : '#fff',
      }}
    >
      <span
        style={{
          textDecoration: status ? 'none' : 'line-through',
          fontWeight: status ? 'normal' : 'bold',
        }}
      >
        {name}
      </span>
      <span>{age} </span>
      <span>{status ? 'true' : 'false'}</span>
      <button
        style={{
          backgroundColor: status ? 'green' : 'red',
          color: 'white',
          padding: '5px',
          borderRadius: '10px',
          textAlign: 'center',
        }}
        onClick={onClick}
      >
        Change
      </button>
    </li>
  );
};
