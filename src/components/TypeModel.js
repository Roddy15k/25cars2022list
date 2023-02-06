// const Style = () => {

//   return (
//     <div className="dialog-box">
//       <h1>Top 25 cars sold in 2022</h1>
//       <h2>
//         We will review thhe best selling vehicles of 2022. Some vehicles that
//         made the list will be surprising.
//       </h2>
//     </div>
//   )
// }
// export default Dialog

const Suvbutton = (props) => {
  return (
    <button
      onClick={() => {
        const number = '13'
        alert('13 total 2022 SUVs made the list.', number)
      }}
    >
      click me now
    </button>
  )
}
export default Suvbutton
