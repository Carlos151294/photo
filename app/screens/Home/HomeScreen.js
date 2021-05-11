import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import colors from '../../config/colors';
import Button from '../../components/Button';
import {getDesigns} from '../../services/designs';
import {AppScreens} from '../../navigation/Screens';

const HomeScreen = ({navigation}) => {
  const [designsList, setDesignsList] = useState({latest: [], all: []});

  const handleLoadMore = async () => {
    try {
      const data = await getDesigns(2);
      setDesignsList((prevList) => ({
        ...prevList,
        all: [...prevList.all, ...data],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDesigns = async () => {
    try {
      const data = await getDesigns(1);
      setDesignsList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDesigns();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.safearea}>
        <Text style={styles.header}>Discover</Text>
        <Text style={styles.subheader}>WHAT'S NEW TODAY</Text>
        <ScrollView style={styles.scrollViewContainer} horizontal>
          {designsList.latest.map((image, index) => (
            <View key={image.id} style={styles.designRecord}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate(AppScreens.Display)}>
                <Image
                  source={image.uri}
                  style={styles.lg}
                  resizeMode="cover"
                />
              </TouchableWithoutFeedback>
              <View style={styles.imageCaption}>
                <Image style={styles.avatar} source={image.avatar.uri} />
                <View style={styles.avatarInfo}>
                  <Text style={styles.avatarName}>
                    {image.avatar.name} {index}
                  </Text>
                  <Text style={styles.avatarUser}>{image.avatar.user}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <Text style={styles.subheader}>BROWSE ALL</Text>
        <View style={styles.browseList}>
          <View style={styles.browseLeftColumn}>
            {designsList.all
              .filter((image, index) => index % 2 === 0)
              .map(({uri, size}, index) => (
                <Image
                  key={index.toString()}
                  style={size === 'sm' ? styles.smSize : styles.mdSize}
                  resizeMode="cover"
                  source={uri}
                />
              ))}
          </View>
          <View style={styles.browseRightColumn}>
            {designsList.all
              .filter((image, index) => index % 2 !== 0)
              .map(({uri, size}, index) => (
                <Image
                  key={index}
                  style={size === 'sm' ? styles.smSize : styles.mdSize}
                  resizeMode="cover"
                  source={uri}
                />
              ))}
          </View>
        </View>
        <Button title="See more" onPress={handleLoadMore} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: colors.white,
  },
  safearea: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 15,
    paddingBottom: 100,
  },
  header: {
    fontSize: 36,
    fontFamily: 'Comfortaa-Light',
    fontWeight: '400',
    // marginBottom: 20,
  },
  subheader: {
    fontSize: 13,
    fontWeight: '900',
    marginTop: 30,
    marginBottom: 25,
  },
  scrollViewContainer: {
    flexDirection: 'row',
    maxHeight: 415,
    // backgroundColor: 'yellow',
  },
  designRecord: {
    margin: 5,
    padding: 2,
    width: 375,
    // backgroundColor: 'red',
    justifyContent: 'flex-start',
  },
  imageCaption: {
    height: 50,
    // backgroundColor: 'blue',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 35,
    width: 35,
    height: 35,
    paddingRight: 10,
  },
  avatarInfo: {
    marginLeft: 10,
  },
  avatarName: {
    fontWeight: '900',
  },
  avatarUser: {
    color: colors.black,
  },
  browseList: {
    padding: 2,
    flexDirection: 'row',
    marginBottom: 10,
  },
  browseLeftColumn: {
    width: '50%',
    paddingRight: 5,
  },
  browseRightColumn: {
    width: '50%',
    paddingLeft: 5,
  },
  smSize: {
    width: '100%',
    height: 220,
    marginBottom: 10,
  },
  mdSize: {
    width: '100%',
    height: 310,
    marginBottom: 10,
  },
  lg: {
    width: '100%',
    height: 343,
  },
});

export default HomeScreen;
