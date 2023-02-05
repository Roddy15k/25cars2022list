const List = (props) => {
  const olstyle = { backgroundColor: 'eggshell' }
  return (
    <div className="listpage">
      <ol>
        {props.carArray.map((list) => (
          <li key={list.id} className="list">
            <h3>{list.id}</h3>
            <img src={list.picture_path} alt={list.car} width="150" />
            <h4> {list.brand}</h4>
            <h4>{list.car}</h4>
            <p>Units Sold:{list.units_sold}</p>
            <p>Country of Origin:{list.country_hq}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
export default List
