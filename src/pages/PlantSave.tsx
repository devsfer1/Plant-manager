import React from 'react'
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { Button } from '../components/Button';

import waterdrop from '../assets/waterdrop.png';
import colors from '../styles/colors';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import fonts from '../styles/fonts';

export function PlantSave() {
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri
          uri=""
          height={150}
          width={150}
        />

        <Text style={styles.plantName}>
          Nome da Planta
        </Text>
        <Text style={styles.plantAbout}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, id. Dicta ducimus hic tempore fugiat numquam autem corporis ipsam quia reprehenderit voluptas totam.
        </Text>
      </View>

      <View style={StyleSheet.controller}>
        <View style={styles.tipContainer}>
          <Image
            source={waterdrop}
            style={styles.tipImage}
          />
            <Text style={styles.tipText}>
              Lorem ipsasdasdsaum dolor, sit amet consectetur adipisicing elit.
            </Text>
        </View>

        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        <Button 
          title="Cadastrar planta" 
          onPress={() => {}}
        />
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 20,
  },
  tipImage: {
    width: 80,
    height: 80,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: 'justify'
  }
});