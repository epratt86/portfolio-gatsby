import React from "react"
import {
  FaUsers,
  FaCodeBranch,
  FaAward,
  FaHourglass,
  FaHourglassStart,
} from "react-icons/fa"
import statsStyle from "./stats.module.scss"

const Stats = () => {
  const { stats, statsTitle, statsNumber } = statsStyle

  return (
    <section className="text-center">
      <div className={stats}>
        <div>
          <ul>
            <li>
              <FaUsers />
            </li>
            <li className={statsTitle}>Clients</li>
            <li className={statsNumber}>16</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <FaAward />
            </li>
            <li className={statsTitle}>Certifications</li>
            <li className={statsNumber}>11</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <FaHourglassStart />
            </li>
            <li className={statsTitle}>Hours Worked</li>
            <li className={statsNumber}>1500</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <FaCodeBranch />
            </li>
            <li className={statsTitle}>Projects Completed</li>
            <li className={statsNumber}>32</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Stats
