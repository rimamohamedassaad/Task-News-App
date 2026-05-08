import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { FlatList, Platform, StyleSheet, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { fetchTopNews , searchNews} from '../../services/newsService';
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
    const [loading, setLoading] = useState(false);
    const testApi = async () => {
    const data = await fetchTopNews(5);
    setArticles(data);

    console.log(data);

  };
  const loadNews = async (query?: string) => {
  try {
    setLoading(true);

    let data;

    if (query && query.trim().length > 0) {
      data = await searchNews(query);
    } else {
      data = await fetchTopNews(10);
    }

    setArticles(data);
  } catch (err) {
    console.log("Error loading news:", err);
  } finally {
    setLoading(false);
  }
};
   const [selected, setSelected] = useState("Top Stories");
   const [articles, setArticles] =
    useState<any[]>([]);
   useEffect(() => {
  const delay = setTimeout(() => {
    if (search.length > 2 || search.length === 0) {
      loadNews(search);
    }
  }, 800); // 800ms debounce

  return () => clearTimeout(delay);
}, [search]);
  
  const featured = articles?.length > 0 ? articles[0] : null;
  const rest =  articles?.length > 1 ? articles?.slice(1) : null;
  
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
