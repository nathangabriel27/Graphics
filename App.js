import React from 'react';
import { StyleSheet, View, Label } from 'react-native';
import { Text } from 'react-native-svg'
import { PieChart } from 'react-native-svg-charts'

export default function App() {

  const number1 = 10
  const number2 = 12
  const number3 = 31


  const data = [number1, number2, number3]
//  const data = [10, 21, 31, 52, 52]

  const pieData = data.map((value, index) => ({

    value,
    key: `${index} - ${value}`,
    svg: {
      fill: '#2d7a59'
      /* 
     Cores Randomicas

     fill: ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
      */
    }
  }))

  const Label = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice
      return (
        <Text
          key={`label - ${index}`}
          x={pieCentroid[0]} // eixo x 
          y={pieCentroid[1]} // eixo y 
          fill='#fff'// cor da letra 
          textAnchor={'middle'}// colocar o texto no centro 
          alingBaseLine={'middle'}
          fontSize={22}
        >
          {data.value}%
        </Text>
      )
    })
  }

  return (
    <View style={styles.container}>
      <PieChart style={styles.pieChart} data={pieData}>
        <Label />
      </PieChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  pieChart: {
    height: 400,
  }
});
