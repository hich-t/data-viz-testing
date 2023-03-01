import React from 'react';
import { ResponsiveWaffle } from '@nivo/waffle';
import { visitors } from "../Data/Visitors"

const PercentagePurchasedWaffle = () => {
  const totalVisitors = visitors.length;
  const notPurchasedVisitors = visitors.filter(visitor => visitor['Déjà acheté ?'] === 'Non').length;

  const purchasedVisitors = visitors.filter(visitor => visitor['Déjà acheté ?'] === 'Oui').length;

  const data = [
    {
      id: 'Déjà acheté',
      label: 'Déjà acheté',
      value: purchasedVisitors
    },
    {
      id: 'Pas encore acheté',
      label: 'Pas encore acheté',
      value: notPurchasedVisitors
    }
  ];

  const colors = ['#45dcc3', '#3f00d0'];
  const theme = {
    fontFamily: 'Basier Circle',
    fontSize: 13,
  };
  

  return (
    <div style={{height:"400px"}}>

    <ResponsiveWaffle   
      data={data}
      total={totalVisitors}
      rows={10}
      columns={10}
      fillDirection="left"
      padding={2}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      colors={colors}
      theme={theme}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: -15,
          translateY: 40,
          itemsSpacing: 10,
          spacing: 10,
          itemWidth: 100,
          itemHeight: 18,
          itemDirection: 'left-to-right',
          itemOpacity: 0.9,
          itemTextColor: '#333',
          symbolSize: 18,
          symbolShape: 'square',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />
    </div>
  );
};

export default PercentagePurchasedWaffle;
