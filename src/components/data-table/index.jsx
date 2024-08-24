import { Table, Thead, Tbody, Tr, Th, Td } from "../table";
import { tableNavigation } from "@mocks/table-navigation";

const index = ({ data, deleteItem, changeStatus }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          {tableNavigation.length &&
            tableNavigation.map((item) => {
              return <Th key={item.id}>{item.title}</Th>;
            })}
        </Tr>
      </Thead>
      <Tbody> 
        {data.length &&
          data.map((item, index) => {
            return (
              <Tr key={index}>
                <Td>{index+1}</Td>
                <Td><p className={item.status ? `line-through` : 'null'}>{item.customer}</p></Td>
                <Td>{item.email}</Td>
                <Td>{item.phone}</Td>
                <Td>
                    <button style={item.status ? {backgroundColor: '#FFEADD'} : null} disabled={item.status} onClick={()=>changeStatus(item.id)} className="mr-3 duration-75 active:bg-blue-600 p-1 px-4 bg-blue-400 text-white rounded-md hover:bg-blue-500">
                        Completed
                    </button>
                    <button onClick={(id)=>deleteItem(item.id)} className="duration-75 active:bg-red-600 p-1 px-4 bg-red-400 text-white rounded-md hover:bg-red-500">
                        Del
                    </button>
                </Td>
              </Tr>
            );
          })}
      </Tbody>
    </Table>
  );
};

export default index;
