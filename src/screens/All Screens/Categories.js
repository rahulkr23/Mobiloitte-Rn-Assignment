import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import {View, Text} from 'react-native'

const Categories = () => {
  const [checked, setChecked] = React.useState(false);

  return (
      <>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <View>
        <Text>Text</Text>
    </View>
    </>
  );
};

export default Categories;