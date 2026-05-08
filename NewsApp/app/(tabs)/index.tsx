import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { FlatList, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

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
export const MOCK_NEWS = [
  {
    title: "Apple Announces New AI Features for iPhone",
    description:
      "Apple revealed a new set of AI-powered tools coming to iOS this year.",
    content:
      "During the annual keynote, Apple introduced advanced AI features including smart summaries, voice improvements, and image generation.",
    url: "https://example.com/apple-ai",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    publishedAt: "2026-05-08T09:30:00Z",
    source: {
      name: "TechCrunch",
    },
  },

  {
    title: "Tesla Opens New Gigafactory in Europe",
    description:
      "Tesla expands its manufacturing footprint with a new European plant.",
    content:
      "The new factory is expected to produce over 500,000 vehicles annually.",
    url: "https://example.com/tesla-factory",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
    publishedAt: "2026-05-07T14:20:00Z",
    source: {
      name: "Reuters",
    },
  },

  {
    title: "Champions League Final Ends in Dramatic Penalties",
    description:
      "An unforgettable night as the final was decided by penalties.",
    content:
      "Fans around the world watched one of the most exciting finals in recent years.",
    url: "https://example.com/champions-league",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
    publishedAt: "2026-05-06T21:00:00Z",
    source: {
      name: "ESPN",
    },
  },

  {
    title: "New Study Shows Benefits of Daily Walking",
    description:
      "Researchers found that walking 30 minutes daily improves heart health.",
    content:
      "Health experts encourage simple daily activity to reduce stress and improve fitness.",
    url: "https://example.com/walking-health",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    publishedAt: "2026-05-05T11:15:00Z",
    source: {
      name: "Healthline",
    },
  },

  {
    title: "Google Introduces Faster Android Updates",
    description:
      "Google promises quicker rollout of Android security patches.",
    content:
      "The company says the new system architecture will reduce delays for manufacturers.",
    url: "https://example.com/android-updates",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    publishedAt: "2026-05-04T08:45:00Z",
    source: {
      name: "The Verge",
    },
  },
];
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
    const [filter, setFilter] = useState<'keyword' | 'title' | 'author'>('keyword');
    const testApi = async () => {
    const data = MOCK_NEWS;
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
      // data = await fetchTopNews(10);
    data  = MOCK_NEWS

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
     <ThemedView style={{ flex: 1, backgroundColor: '#f7f2f2' }}>
      
      {/* FIXED CONTENT */}
      <View style={styles.fixedContainer}>
         <Header />

          <SearchBar
            value={search}
            onChange={setSearch}
            filter={filter}
             onFilterChange={function (value: any): void {
              throw new Error('Function not implemented.');
            } }          />
          <Categories
        categories={categories}
        selected={selected}
        onSelect={setSelected}
      />
      </View>
    <FlatList
      data={rest}

      keyExtractor={(_, index) =>
        index.toString()
      }
      contentContainerStyle={{
      backgroundColor:'#e4dada',
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 24,
    }}

      ListHeaderComponent={
        <>
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
    </ThemedView>

    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
   fixedContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#e4dbdb',
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
