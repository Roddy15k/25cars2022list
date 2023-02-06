const Comps = () => {
  return (
    <div className="comps-box">
      <div className="most-units">
        <h4>The top two companies of vehicle sales will be compared.</h4>
        <p>Which Company sold the most vehicles in 2022?</p>
        <button
          onClick={() => {
            const number = '1'
            alert('Ford sold 999,000 units for second place.Incorrect', number)
          }}
        >
          Ford
        </button>
        <button
          onClick={() => {
            const number = '2'
            alert('Correct! Toyota sold 1,377,486 units.', number)
          }}
        >
          Toyota
        </button>
      </div>
      <div className="first-year">
        <p>Which vehicle came out in 1997?</p>
        <button
          onClick={() => {
            const number = '1'
            alert('The Ford Explorer debuted in 1997. Correct!', number)
          }}
        >
          Ford Explorer
        </button>
        <button
          onClick={() => {
            const number = '2'
            alert(
              'The Rav4 debuted 3 years earlier than the Explorer in 1994.',
              number
            )
          }}
        >
          Toyota Rav4
        </button>
      </div>
      <div className="horsepower">
        <p>Which small SUV has can have the most factory horsepower?</p>
        <button
          onClick={() => {
            const number = '4'
            alert(
              'The Ford Escape comes with 250hp on Titanium trim. Correct!',
              number
            )
          }}
        >
          Ford Escape
        </button>
        <button
          onClick={() => {
            const number = '5'
            alert('The Rav4 comes with 203hp on all models.', number)
          }}
        >
          Toyota Rav4
        </button>
      </div>
    </div>
  )
}
export default Comps
