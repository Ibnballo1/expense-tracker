interface Props {
  expenseList: any;
  total: number;
}

function Category(props: Props) {
  return (
    <div>
      <select>
        <option>Choose a Category</option>
        <option>All</option>
        <option>Electricity</option>
        <option>Utility</option>
      </select>
      <table>
        <th>Description</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Delete</th>
        {props.expenseList}
        <tr>
          <td>Total</td>
          <td>{props.total}</td>
        </tr>
      </table>
    </div>
  );
}

export default Category;
