import React, {useEffect} from 'react';
import viewDashboard from '../screens/dashboard';
import {connect} from 'react-redux';
import {getAllDecks} from '../store/middleware';
import {ActivityIndicator, Text} from 'react-native';
import * as colors from '../utils/colors';

const Dashboard = ({status, loadDecks, navigation}) => {

    useEffect(() => {
        loadDecks();
    }, [])

    return (
        status === "failed"
        ?
        <Text> Could not load decks. Please check your internet connection and try again </Text>
        :
        <>
            {
                status === "success"
                ?
                viewDashboard(navigation)
                :
                <ActivityIndicator color={colors.secondary} />
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
      status: state.decks.payload.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadDecks: () => dispatch(getAllDecks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);