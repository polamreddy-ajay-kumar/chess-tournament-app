import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TopBar } from './components/TopBar';
import { PassBanner } from './components/PassBanner';
import { TournamentCard } from './components/TournamentCard';
import { BottomNav } from './components/BottomNav';
import { TournamentCity } from './types';

const tournaments: TournamentCity[] = [
  {
    id: 'delhi',
    city: 'DELHI',
    badge: '♛',
    accent: '#a95ae4',
    prize: '1 000',
    players: 62,
    entry: '500',
    cp: 120,
    cpBonus: 140,
    rules: 'Rules: 10 min + 5 sec/move',
    building: 'delhi',
    tone: 'violet',
  },
  {
    id: 'newyork',
    city: 'NEW YORK',
    badge: '♛',
    accent: '#d474c9',
    prize: '5 000',
    players: 226,
    entry: '2 600',
    cp: 140,
    cpBonus: 160,
    rules: 'Rules: 10 min + 10 sec/move',
    building: 'newyork',
    tone: 'pink',
  },
  {
    id: 'berlin',
    city: 'BERLIN',
    badge: '♛',
    accent: '#d94a4a',
    prize: '10 000',
    players: 128,
    entry: '5 500',
    cp: 160,
    cpBonus: 180,
    rules: 'Rules: 10 min + 15 sec/move',
    building: 'berlin',
    tone: 'red',
  },
  {
    id: 'london',
    city: 'LONDON',
    badge: '♛',
    accent: '#c44444',
    prize: '20 000',
    players: 138,
    entry: '11 000',
    cp: 180,
    cpBonus: 200,
    rules: 'Rules: 10 min + 5 sec/move',
    building: 'london',
    tone: 'crimson',
  },
];

export default function App() {
  const [selectedId, setSelectedId] = useState('delhi');
  const [activeTab, setActiveTab] = useState('home');

  const selectedTournament = useMemo(
    () => tournaments.find((item) => item.id === selectedId) ?? tournaments[0],
    [selectedId],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2b100d" />

      <View style={styles.shell}>
        <TopBar />
        <PassBanner />

        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <TournamentCard tournament={selectedTournament} />

          <View style={styles.cityList}>
            {tournaments.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.9}
                onPress={() => setSelectedId(item.id)}
                style={[
                  styles.cityItem,
                  item.id === selectedId && styles.cityItemSelected,
                ]}
              >
                <Text style={styles.cityBadge}>{item.badge}</Text>
                <Text style={styles.cityName}>{item.city}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b100d',
  },
  shell: {
    flex: 1,
    backgroundColor: 'linear-gradient(180deg, #5a1c11 0%, #2b0f0d 100%)',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  cityList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
    marginBottom: 18,
  },
  cityItem: {
    width: '23%',
    height: 72,
    borderRadius: 16,
    backgroundColor: 'rgba(154, 93, 58, 0.9)',
    borderWidth: 3,
    borderColor: '#d3803c',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  cityItemSelected: {
    backgroundColor: 'rgba(120, 57, 36, 0.95)',
    borderColor: '#f4c35d',
  },
  cityBadge: {
    fontSize: 22,
    color: '#f5d58d',
  },
  cityName: {
    fontSize: 8,
    fontWeight: '900',
    color: '#fff6da',
    letterSpacing: 0.4,
    marginTop: 4,
  },
});
