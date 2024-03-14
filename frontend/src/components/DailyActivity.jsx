import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function DailyActivity(props) {
  /**
   * @description This function is used to map the data from the API to the bar chart
   * @returns {Object}
   */
  const activitiesForBarChart = () => {
    const activitiesToDisplay = props.activities.map((activity, index) => ({
      day: index + 1,
      kilogram: activity.kilogram,
      calories: activity.calories,
    }));
    const activitiesSort = activitiesToDisplay.sort(
      (a, b) => a.index - b.index
    );
    return activitiesSort;
  };

  /**
   * @description return an array of kilograms
   * @returns {Array}
   */
  const kilograms = () => {
    return activitiesForBarChart().map((item) => item.kilogram);
  };

  // min and max values for the Y axis
  const minKg = Math.min(...kilograms()) - 1;
  const maxKg = Math.max(...kilograms()) + 1;

  // average ticks for the Y axis
  const averageTicks = (min, max) => {
    const mid = (min + max) / 2;
    return [min, mid, max];
  };

  // ticks for the Y axis
  const yAxisTicks = averageTicks(minKg, maxKg);

  // Custom tooltip for the bar chart
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip-container">
          <p className="tooltip-text">{payload[0].value}kg</p>
          <p className="tooltip-text">{payload[1].value}kcal</p>
        </div>
      );
    }
  };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
      })
    ),
  };

  return (
    <div className="daily-activity">
      <ResponsiveContainer
        width="95%"
        height="80%"
        style={{ margin: "0 auto" }}
      >
        <p className="daily-activity__text">Activité quotidienne</p>
        <BarChart width={400} height={400} data={activitiesForBarChart()}>
          <Legend
            iconType="circle"
            verticalAlign="top"
            align="right"
            iconSize={8}
          />
          <CartesianGrid
            vertical={false}
            stroke="#dedede"
            strokeDasharray="2 2"
          />
          <XAxis dataKey="day" tickLine={false} />
          <YAxis yAxisId="left" orientation="left" hide={true} tickCount={3} />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#282D30"
            domain={[minKg, maxKg]}
            ticks={yAxisTicks}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            name="Poids (kg)"
            radius={[3.5, 3.5, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            name="Calories brûlées (kCal)"
            radius={[3.5, 3.5, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

DailyActivity.propTypes = {
  activities: PropTypes.array.isRequired,
};

export default DailyActivity;
