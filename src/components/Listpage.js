const List = (props) => {
  return (
    <div className="listpage">
      <ol>
        {props.carArray.map((list) => (
          <li key={list.id} className="list">
            <h3>{list.id}</h3>
            <img src={list.picture_path} alt={list.car} width="100" />
            <h5> {list.brand}</h5>
            <h5>{list.car}</h5>
            <p>Units Sold:{list.units_sold}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
export default List
