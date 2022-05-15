import React, { useState } from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const PercentageBar = ({
    navigation,
    percentage,
    height,
    backgroundColor,
    completedColor,
}) => {
    const [getPercentage, setPercentage] = useState(percentage);
    const [getheight, setHeight] = useState(height);
    const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
    const [getCompletedColor, setCompletedColor] = useState(completedColor);
    return (
        <View>
            <View style={{ justifyContent: 'center' }}>
                <View
                    style={{
                        width: '100%',
                        height: getheight,
                        marginVertical: 10,
                        borderRadius: 10,
                        borderColor: getBackgroundColor,
                        borderWidth: 1,
                    }}
                />
                <View
                    style={{
                        width: getPercentage ? getPercentage : 0,
                        height: getheight,
                        marginVertical: 10,
                        borderRadius: 10,
                        backgroundColor: getCompletedColor,
                        position: 'absolute',
                        bottom: 15
                    }}
                />
                <View
                    style={{
                        width: getPercentage ? getPercentage : 0,
                        height: getheight,
                        bottom: 10
                    }}>
                    <Text style={{ textAlign: 'right' }}>{getPercentage}</Text>
                </View>
            </View>
        </View>
    );
};
export default PercentageBar;