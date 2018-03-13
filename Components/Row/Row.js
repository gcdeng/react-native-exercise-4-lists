import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Row = props => (
    <View style={styles.row}>
        {/* <Text style={styles.keyRow}>{props.property}</Text> */}
        {
            typeof props.values !== 'string'
            ? props.values.map((val, i)=>{
                return <Text key={i} style={styles.valRow}>{val}</Text>
            })
            : <Text style={styles.valRow}>{props.values}</Text>
        }
        
    </View>
)

Row.propTypes = {
    values: PropTypes.any
}

export default Row;