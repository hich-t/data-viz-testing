import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    marque: "Levis",
    type: "Jeans",
    Purchased: 1,
    "Not Purchased" : 1
  },
  {
    marque: "Gap",
    type: "Jeans",
    Purchased: 2,
    "Not Purchased" : 1
  },
  {
    marque: "Diesel",
    type: "Jeans",
    Purchased: 2,
    "Not Purchased" : 1
  }
];

const colors = ['#45dcc3', '#3f00d0'];
const theme = {
  fontFamily: 'Basier Circle',
  fontSize: 13,
};

const ArticlesPurchasedStackedBar = () => (
  <div style={{height:"400px", width:"700px"}}>


  <ResponsiveBar
    data={data}
    keys={["Purchased", "Not Purchased"]}
    indexBy="marque"
    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
    padding={0.3}
    groupMode="grouped"
    layout="vertical"
    colors={colors}
  
    theme={theme}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#374064",
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#9ec6be",
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: "Purchased"
        },
        id: "dots"
      },
      {
        match: {
          id: "Not Purchased"
        },
        id: "lines"
      }
    ]}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Marque",
      legendPosition: "middle",
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 2,
      tickRotation: 0,
      legend: "Number of articles",
      legendPosition: "middle",
      legendOffset: -40,
      tickValues: [0, 1, 2, 3, 4, 5, 6, 7, 8],

    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
  </div>
);


export default ArticlesPurchasedStackedBar 