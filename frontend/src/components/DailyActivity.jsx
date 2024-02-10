import { getUserActivities } from "../services/mockDataServices.js";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
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

function DailyActivity() {
  const { id } = useParams();
  const activitiesData = getUserActivities(id);

  const activitiesForBarChart = () => {
    const activitiesToDisplay = activitiesData.sessions.map(
      (activity, index) => ({
        day: index + 1,
        kilogram: activity.kilogram,
        calories: activity.calories,
      })
    );
    const activitiesSort = activitiesToDisplay.sort(
      (a, b) => a.index - b.index
    );
    return activitiesSort;
  };

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
        <p>Activité quotidienne</p>
        <BarChart width={400} height={400} data={activitiesForBarChart()}>
          <CartesianGrid strokeDasharray="2 2" />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType="circle"
            verticalAlign="top"
            align="right"
            iconSize={8}
            style={{ marginRight: "10px" }}
          />
          <XAxis dataKey="day" />
          <YAxis dataKey="kilogram" orientation="right" />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            name="Poids (kg)"
            radius={[3.5, 3.5, 0, 0]}
            barSize={7}
          />
          <Bar
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

export default DailyActivity;
