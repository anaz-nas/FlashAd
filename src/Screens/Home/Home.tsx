import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { ArrowBackWhite } from '../../Assets/svg';

const tabs = ['Dining', 'Bars/Happy Hour', 'Storefront', 'Entertainment'];

const dataByTab: Record<string, any[]> = {
  Dining: [
    {
      id: '1',
      title: 'Alfredo Pasta $8.99 Early bird 4 to 6pm',
      subtitle: 'Ends in: 15m',
      image: 'https://via.placeholder.com/150',
      tag: '🔥 Hot Sale',
    },
    {
      id: '2',
      title: 'Bucket of Ponies $6.00 (10 at the desk)',
      subtitle: 'Duration: 6h',
      image: 'https://via.placeholder.com/150',
    },
  ],
  'Bars/Happy Hour': [
    {
      id: '3',
      title: 'Happy Hour Margarita $5',
      subtitle: 'Ends in: 1h',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '4',
      title: '2 for 1 Beer Pitchers',
      subtitle: 'Duration: 3h',
      image: 'https://via.placeholder.com/150',
    },
  ],
  Storefront: [
    {
      id: '5',
      title: 'Summer Super Sale 50% off Sunglasses',
      subtitle: 'Ends in: 2h',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '6',
      title: 'Designer Shoes 30% Off',
      subtitle: 'Ends in: 5h',
      image: 'https://via.placeholder.com/150',
    },
  ],
  Entertainment: [
    {
      id: '7',
      title: 'Indie Events Tickets selling fast!',
      subtitle: 'Ends in: 2h',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '8',
      title: 'Standup Comedy Night',
      subtitle: 'Tonight 8pm',
      image: 'https://via.placeholder.com/150',
    },
  ],
};

const ScrollableTabs = ({ selectedTab, setSelectedTab }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabContainer}
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackWhite width={17} height={17} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </ImageBackground>
      S{' '}
      <ScrollableTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <FlatList
        data={currentData}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            {item.tag && (
              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.tag}</Text>
              </View>
            )}
            <Text style={styles.cardTitle} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
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
  },
  headerTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tabContainer: { paddingHorizontal: 10 },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
  },
  activeTab: { backgroundColor: '#BA181B' },
  tabText: { color: '#333' },
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
  cardImage: { width: '100%', height: 100, borderRadius: 10 },
  tag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF0000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: { color: '#fff', fontSize: 10 },
  cardTitle: { fontSize: 14, fontWeight: '600', marginTop: 8 },
  cardSubtitle: { fontSize: 12, color: '#777', marginTop: 4 },
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
