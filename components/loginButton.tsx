import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function LoginButton( props: { altLogin: String } ) {
    let imageSource

    switch (props.altLogin) {
        case "Steam":
            imageSource = require('../assets/images/Steam.png')
            break;

        case "Google":
            imageSource = require('../assets/images/Google.png')
    }

    return (
        <TouchableOpacity style={styles.main_container} onPress={() => alert('Se clicou, tenho certeza que é gay')}>
            <Image
                source={imageSource}
                style={styles.icon}
            />
            <Text>Login com {props.altLogin}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main_container: {
        display: 'flex',
        flexDirection: 'row',
        paddingRight: 18,
        paddingLeft: 18,
        paddingTop: 12,
        paddingBottom: 12,
        gap: 20,
        borderRadius: 400,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    }
})