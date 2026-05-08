import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { FlatList, Platform, StyleSheet, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { fetchTopNews } from '../../services/newsService';
import Header from '../../components/header'
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/categories';
import NewsItem from '../../components/newsItem';
import FeaturedNews from '@/components/ImportantNew';
import SectionHeader from '@/components/sectionHeader';
const categories = [
  "Top Stories",
  "Trending",
  "Business",
  "Sports",
  "Tech",
  "Health",
];
export default function HomeScreen() {
    const [search, setSearch] = useState('');
    const testApi = async () => {
    const data = await fetchTopNews(5);
    setArticles(data);

    console.log(data);

  };
   const [selected, setSelected] = useState("Top Stories");
   const [articles, setArticles] =
    useState<any[]>([]);
    useEffect(() => {
    testApi();
  }, []);
  
  const featured = articles[0];
  const rest = articles.slice(1);
  const renderItem = ({ item }: any) => {
  return (
    <NewsItem
      item={item}
      onPress={() => {
        console.log("Open article:", item.url);
      }}
    />
  );
};
  return (
    <FlatList
      data={rest}

      keyExtractor={(_, index) =>
        index.toString()
      }
      contentContainerStyle={{
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 24,
    }}

      ListHeaderComponent={
        <>
          <Header />

          <SearchBar
            value={search}
            onChange={setSearch}
          />
          <Categories
        categories={categories}
        selected={selected}
        onSelect={setSelected}
      />
       {featured && (
            <FeaturedNews
             item={featured}
             onSavePress={() => console.log("save featured")}
             onPress={() => console.log("open featured")}
        />
          )}
          <SectionHeader
           title="News For You"
           onPressAction={() => console.log("See all pressed")}
          />
        </>
      }

      renderItem={renderItem}
    />

    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
