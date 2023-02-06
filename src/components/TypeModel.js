const Suvbutton = (props) => {
  return (
    <div className="suvcount">
      <h4>Total Vehicle Classes Sold 2022</h4>
      <button
        onClick={() => {
          const number = '13'
          alert('13 total 2022 SUVs made the lists.', number)
        }}
      >
        Total 2022 SUVs
      </button>

      <button
        onClick={() => {
          const numbers = '7'
          alert('7 total 2022 Sedans made the list.', numbers)
        }}
      >
        Total 2022 Sedans
      </button>
      <button
        onClick={() => {
          const numbers = '5'
          alert('5 total 2022 Trucks made the list.', numbers)
        }}
      >
        Total 2022 Trucks
      </button>
    </div>
  )
}
export default Suvbutton
