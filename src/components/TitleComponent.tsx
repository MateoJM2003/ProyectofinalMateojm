import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

//interface - props
interface Props {
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <View>
        <Text style={{
            ...styles.globalTitle,
            height: height * 0.12
            
        }}>{title}</Text>
        
        </View>
     
    
    )
}
