import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const data = [
  {
    id: '1001',
    label: 'Levis 501',
    brand: 'Levis',
    type: 'Jeans',
    price: "80 $",
    time: 57,
    purchased: true,
  },
  {
    id: '1002',
    label: 'Levis 511',
    brand: 'Levis',
    type: 'Jeans',
    price: "90 $",
    time: 56,
    purchased: false,
  },
  {
    id: '2001',
    label: 'Gap Slim natural',
    brand: 'Gap',
    type: 'Jeans',
    price: "50 $",
    time: 31,
    purchased: true,
  },
  {
    id: '2002',
    label: 'Gap Skinny',
    brand: 'Gap',
    type: 'Jeans',
    price: "60 $",
    time: 64,
    purchased: false,
  },
  {
    id: '2003',
    label: 'Gap Droit',
    brand: 'Gap',
    type: 'Jeans',
    price: "45 $",
    time: 27,
    purchased: true,
  },
  {
    id: '3001',
    label: 'Diesel Skinny',
    brand: 'Diesel',
    type: 'Jeans',
    price: "120 $",
    time: 42,
    purchased: true,
  },
  {
    id: '3002',
    label: 'Diesel Slim',
    brand: 'Diesel',
    type: 'Jeans',
    price: "110 $",
    time: 21,
    purchased: false,
  },
];

  const theme = {
    fontFamily: 'Basier Circle',
    fontSize: 13,
  };

const TimeSpentPieChart = () => {
  return (
    <div style={{height:"300px"}}>

    <ResponsivePie
      data={data}
      id="label"
      theme={theme}
      value="time"
      colors={(d) => d.data?.purchased ? '#45dcc3' : '#3f00d0'}
      innerRadius={0.6}
      padAngle={0.7}
      cornerRadius={3}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      radialLabelsLinkOffset={10}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}

      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#45dcc3"
      radialLabelsLinkDiagonalLength={20}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={2}
      radialLabelsLinkColor={{ from: 'color' }}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      sliceLabel={(d) => `${d.label}: ${d.data.price}`}
      arcLabelsTextColor= {(d) => (d.data?.purchased ? 'black' : 'white')}

      
  tooltip={(d) => (     

  <div style={{ 
    padding: '8px' ,
    backgroundColor: '#9ec6be',
    fontFamily : "Basier Circle"
  }}>
    <div><strong>{d.datum.label}</strong></div>
    <div>Price: {d.datum.data.price}</div>
    <div>Time spent by customers : {d.datum.value}sec.</div>
  </div>
)}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
    </div>
  );
};

export default TimeSpentPieChart;
