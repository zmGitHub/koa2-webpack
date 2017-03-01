import React from 'react';
import Echarts from 'components/Echarts';


const EachrtInit = (props) => {
  // const { data } = this.props;
  const option = {
    tooltip: {},
    legend: {
      data: ['上次测试', '本次测试'],
      left: 'left',
    },
    grid: {
      top: 80,
      bottom: '4%',
    },
    radar: {
        // shape: 'circle',
      indicator: [
           { name: '心肺能力', max: 10 },
           { name: '速度', max: 10 },
           { name: '协调性', max: 10 },
           { name: '耐力', max: 10 },
           { name: '功率', max: 10 },
           { name: '平衡能力', max: 10 },
           { name: '力量', max: 10 },
           { name: '敏捷能力', max: 10 },
           { name: '柔韧性', max: 10 },
           { name: '身体控制能力', max: 10 },
      ],
    },
    series: [{
      name: '上次 vs 本次',
      type: 'radar',
      label: {
        normal: {
          show: true,
        },
      },
        // areaStyle: {normal: {}},
      data: [
        {
          value: [2, 4, 1, 5, 7, 5, 5, 8, 4, 9],
          name: '上次测试',
        },
        {
          value: [2, 4, 5, 3, 6, 7, 8, 3, 9, 10],
          name: '本次测试',
        },
      ],
    }],
  };
  return (
    <Echarts
      type="radar"
      options={option}
      height="300px"
    />
  );
};
export default EachrtInit;
