import React from 'react'
import { withStyles, Typography } from '@material-ui/core'
import Color from '../styles/colors'

const Label = (props) => {
    let { text, classes, styles } = props
    return <>
        <Typography className={classes.label} style={styles}>{text}</Typography>
    </>
}
const STYLES = {
    label: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: Color.labels,
        textAlign: 'center',
    }
}
export default withStyles(STYLES)(Label)
