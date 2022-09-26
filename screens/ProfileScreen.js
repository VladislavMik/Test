import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Icon } from "react-native-elements";
import TextInputComponent from "../components/TextInputComponent";
import IconLock from "../components/LockIconComponent";



const Profile = ({ navigation }) => {

    const goLogin = () => {
        navigation.navigate('Login')
    }

    const goHome = () => {
        navigation.navigate('BotNavigation')
    }

    return ( 
        <View style={styles.Boss}>
            <View style={[{paddingBottom: 40 }, styles.View]}>
                <TouchableOpacity onPress={goLogin}>
                    <Icon 
                    name='arrow-back-ios'
                    type='material-icons'
                    color='white'
                    size={26}
                    />
                    
                </TouchableOpacity>
                <Text style={styles.myProfileText} >My Profile</Text>
                <TouchableOpacity style={styles.roundedButton} onPress={goHome}>
                    <Icon
                        name='check'
                        type='ant-design'
                        color='#5278c1'
                        size={18}
                    />
                    <Text style={styles.textButton}>DONE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.View}>
                    <Text style={[{ paddingRight: 130, paddingLeft: 70}, styles.color]}>Adhar No</Text>
                    <Text style={[{ paddingRight: 140, paddingLeft: 10}, styles.color]}>Academic Year</Text>
                </View>
                <View style={styles.View}>
                    <TextInputComponent
                        style={styles.inputWithoutLock}
                    />

                    <Text>     </Text>
                    <TextInputComponent
                        style={styles.inputWithoutLock}
                    />
                </View>
                <View style={styles.View}>
                    <Text style={[{ paddingRight: 100}, styles.color]}>Admission Class</Text>
                    <Text style={[{ paddingRight: 50}, styles.color]}>Old Admission No</Text>
                </View>
                <View style={styles.View}>

                    <TextInputComponent style={styles.inputWithLock} />
                    <IconLock style={styles.doubleIconLock}/>
                    <Text>    </Text>
                    <TextInputComponent style={styles.inputWithLock} />
                    <IconLock style={styles.doubleIconLock}/>
                </View>
                <View style={styles.View}>
                    <Text style={[{ paddingRight: 80}, styles.color]}>Date of Admission</Text>
                    <Text style={[{ paddingRight: 90}, styles.color]}>Date of Birth</Text>
                </View>
                <View style={styles.View}>
                    <TextInputComponent style={styles.inputWithLock} />
                    <IconLock style={styles.doubleIconLock}/>
                    <Text>    </Text>
                    <TextInputComponent style={styles.inputWithLock} />
                    <IconLock style={styles.doubleIconLock}/>
                </View>
                <View style={styles.View}>
                    <View>
                    <Text style={styles.color}>Parent Mail ID</Text>
                    <TextInputComponent style={styles.otherInputs} />
                    </View>
                    <IconLock style={styles.iconLock}/>
                </View>
                <View style={styles.View}>
                    <View>
                    <Text style={styles.color}>Mother Name</Text>
                    <TextInputComponent style={styles.otherInputs} />
                    </View>
                    <IconLock style={styles.iconLock}/>
                </View>
                <View style={styles.View}>
                    <View>
                    <Text style={styles.color}>Father Name</Text>
                    <TextInputComponent style={styles.otherInputs} />
                    </View>
                    <IconLock style={styles.iconLock}/>
                </View>
                <View style={styles.View}>
                    <View>
                    <Text style={styles.color}>Parmanent Add.</Text>
                    <TextInputComponent style={styles.otherInputs} />
                    </View>
                    <IconLock style={styles.iconLock}/>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    View: {
        display: 'flex',
        flexDirection: 'row',
    },
    color: {
        color: 'grey'
    },
    myProfileText: {
        paddingRight: 200, 
        color: 'white', 
        fontSize: 16
    },
    inputWithoutLock: {

        width: 180,
        height: 45,
    },
    inputWithLock: {
        height: 30,
        width: 170
    },
    otherInputs: {

        width: 365,
        height: 45
    },
    container: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 50,
        height: 1000
    },
    doubleIconLock: {
        paddingBottom: 7
    },
    iconLock: {
        paddingTop: 30,
        paddingBottom: 9
    },
    Boss: {

        backgroundColor: '#5278c1',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 150,

    },
    roundedButton: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 13,
        borderRadius: 100,

    },
    textButton: {
        color: '#5278c1',
        fontSize: 16,
        paddingLeft: 7,
        
    }
})

export default Profile