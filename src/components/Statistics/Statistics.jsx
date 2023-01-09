import PropTypes from 'prop-types';
import{Item,ItemPercentage,StatisticsTitle,Title,StatList,} from './Statistics.styled'

function getRandomColor() {
  return '#' + (Math.random().toString(16) + "000000").substring(2, 8);
}

export const Statistics = ({title, stats}) => {

  const staticsList = stats.map((item) => {

    return (
      <Item color={getRandomColor()} key={item.id}>
        <span>{item.label}</span>
        <ItemPercentage>{item.percentage}%</ItemPercentage>
      </Item>
    )
  })
  
  return (
    <StatisticsTitle>
      {title && (
          <Title>{title}</Title>
      )}

      <StatList>
        {staticsList}
      </StatList>
    </StatisticsTitle>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired,
}
