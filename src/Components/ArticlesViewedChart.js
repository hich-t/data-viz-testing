import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    user: 'Gabriel Martin',
    "Produits Achetés": 2,
    "Produits Non-Achetés": 2,
  },
  {
    user: 'Marie Petit',
    "Produits Achetés": 1,
    "Produits Non-Achetés": 4,
  },
  {
    user: 'Luc Robert',
    "Produits Achetés": 5,
    "Produits Non-Achetés": 2,
  },
  {
    user: 'Stéphanie Richard',
    "Produits Achetés": 0,
    "Produits Non-Achetés": 2,
  },
];

const colors = ['#45dcc3', '#3f00d0'];
const theme = {
  fontFamily: 'Basier Circle',
  fontSize: 13,
};

const getLabelTextColor = (d) => {
  return d.data.Purchased ? 'black' : 'white';
};

const ArticlesViewedChart = () => (
  <div style={{height:"600px", width:"700px"}}>

    <ResponsiveBar
      data={data}
      keys={["Produits Achetés","Produits Non-Achetés"]}
      indexBy="user"
      margin={{ top: 100, right: 50, bottom: 100, left: 50 }}
      padding={0.3}
      colors={colors}
      theme={theme}
      labelTextColor={getLabelTextColor}

      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Utilisateurs',
        legendPosition: 'middle',
        legendOffset: 40,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Nombre de produits consultés',
        legendPosition: 'middle',
        legendOffset: -40,
        tickValues: [0, 1, 2, 3, 4, 5, 6, 7, 8],

      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom',
          direction: 'column',
          justify: false,
          translateX: 0,
          translateY: 100,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
    </div>
);

export default ArticlesViewedChart;
