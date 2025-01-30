import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';

const ProfilePic = () => {
  return (
    <View style={styles.ImageContainer}>
      <Image
        style={styles.Image}
        source={require('../assets/app_images/avatar.png')}
      />
    </View>
  );
};

export default ProfilePic;

const styles = StyleSheet.create({
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SPACING.space_12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
  },
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});
