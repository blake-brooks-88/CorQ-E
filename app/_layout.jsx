import { Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { verifyInstallation } from 'nativewind';

import "../global.css"

const RootLayer = () => {
    verifyInstallation();
    return (
    
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
    </Stack>
  )
}

export default RootLayer