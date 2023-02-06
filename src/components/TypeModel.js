const Suvbutton = (props) => {
  return (
    <div className="suvcount">
      <div className="suv">
        <button
          onClick={() => {
            const number = '13'
            alert('13 total 2022 SUVs made the lists.', number)
          }}
        >
          Total 2022 SUVs
        </button>
      </div>

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
