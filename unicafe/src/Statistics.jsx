import StatisticLine from "./StatisticLine"

const Statistics = ({ good, bad, neutral }) => {
    let sumAll = good + neutral + bad
    let average = (good + neutral*0 + bad*(-1)) / sumAll
    let positivePercentage = good * 100 / sumAll

    if (sumAll === 0) {
        return (
          <div>
            No feedback given
          </div>
        )
    }

    return(
      <table>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={sumAll} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positivePercentage + "%"} />
      </table>
    )
}

export default Statistics