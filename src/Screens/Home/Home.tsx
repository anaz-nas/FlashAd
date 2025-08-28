/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Acceblity, Filter, Logo, Search } from '../../Assets/svg';

const tabs = ['Dining', 'Bars/Happy Hour', 'Storefront', 'Entertainment'];

const dataByTab: Record<string, any[]> = {
  Dining: [
    {
      id: '1',
      title: 'Alfredo Pasta $8.99',
      titledesc: 'Early bird 4 to 6 pm',
      subtitle: '15m',
      image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
      tag: 'Maybay',
      claimed: '10/30 claimed',
    },
    {
      id: '2',
      title: 'Bucket of Ponies $6.00 ',
      titledesc: '10 at the desk',
      subtitle: 'Duration: 6h',
      image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
      tag: 'Fasttrack',
      claimed: '20 claimed',
    },
  ],
  'Bars/Happy Hour': [
    {
      id: '3',
      title: 'Happy Hour Margarita $5',
      subtitle: '1h',
      image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
      tag: 'Indie Events',
    },
    {
      id: '4',
      title: '2 for 1 Beer Pitchers',
      subtitle: 'Duration: 3h',
      image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
      tag: 'Hot Sale',
    },
  ],
  Storefront: [
    {
      id: '5',
      title: 'Summer Super Sale 50% off Sunglasses',
      subtitle: '2h',
      image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
      tag: 'Hot Sale',
    },
    {
      id: '6',
      title: 'Designer Shoes 30% Off',
      subtitle: '5h',
      image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
      tag: 'Hot Sale',
    },
  ],
  Entertainment: [
    {
      id: '7',
      title: 'Indie Events Tickets selling fast!',
      subtitle: '2h',
      image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
      tag: 'Hot Sale',
    },
    {
      id: '8',
      title: 'Standup Comedy Night',
      subtitle: 'Tonight 8pm',
      image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
      tag: 'Hot Sale',
    },
  ],
};

type ScrollableTabsProps = {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
};

const ScrollableTabs: React.FC<ScrollableTabsProps> = ({
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabContainer}
      // style={{ height: 50, backgroundColor: 'red' }}
    >
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, selectedTab === tab && styles.activeTab]}
          onPress={() => setSelectedTab(tab)}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === tab && styles.activeTabText,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const HomeScreen = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const currentData = dataByTab[selectedTab] || [];

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={require('../../Assets/PNG/BlurBg.jpg')}
      >
        <TouchableOpacity>
          <Filter width={28} height={28} />
        </TouchableOpacity>

        <Logo width={80} height={31} />
        <TouchableOpacity>
          <Search width={18} height={18} />
        </TouchableOpacity>
      </ImageBackground>
      {/* <ScrollableTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      /> */}
      <FlatList
        data={currentData}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.cardImage}
            >
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  padding: 4,
                  position: 'absolute',
                  bottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                }}
              >
                <Acceblity width={12} height={12} />
                <Text
                  style={{ color: '##161A1D', fontSize: 12, marginLeft: 5 }}
                >
                  {item?.claimed}
                </Text>
              </View>
            </ImageBackground>
            <Text style={styles.tagText}>{item.tag}</Text>
            <Text style={styles.cardTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.cardTitledesc} numberOfLines={2}>
              {item?.titledesc}
            </Text>
            <Text style={styles.cardSubtitle}>
              Ends in:{' '}
              <Text style={styles.cardSubtitleValue}>{item.subtitle}</Text>
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  headerTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tabContainer: {
    paddingHorizontal: 10,
    marginTop: 15,
    height: 45,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
    height: 45,
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#BA181B',
    height: 45,
    justifyContent: 'center',
  },
  tabText: { color: '#989898', fontSize: 12 },
  activeTabText: { color: '#fff', fontWeight: '600' },
  grid: { padding: 10 },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 5,
    padding: 10,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 138,
    borderRadius: 10,
    alignItems: 'center',
  },
  tag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF0000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: { color: '#4E565B', fontSize: 12, fontWeight: 'bold', marginTop: 8 },
  cardTitle: { fontSize: 14, fontWeight: 'bold', marginTop: 4 },
  cardTitledesc: { fontSize: 14, fontWeight: 'bold', marginTop: 0 },
  cardSubtitle: { fontSize: 13, color: '#161A1D', marginTop: 4 },
  cardSubtitleValue: {
    fontSize: 12,
    color: '#565050',
    fontWeight: 'bold',
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: { fontSize: 20 },
  addBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#BA181B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30, // lift it above nav
  },
  addText: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
});
