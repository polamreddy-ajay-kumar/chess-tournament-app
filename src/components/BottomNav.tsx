import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TournamentCity } from '../types';

interface Props {
  tournament: TournamentCity;
}

export function TournamentCard({ tournament }: Props) {
  const getPanelColor = () => {
    switch (tournament.tone) {
      case 'pink':
        return '#a95ae4';
      case 'red':
        return '#d94a4a';
      case 'crimson':
        return '#c44444';
      default:
        return '#a95ae4';
    }
  };

  return (
    <View style={[styles.card, { backgroundColor: getPanelColor() }]}>
      <View style={styles.glow} />

      <View style={styles.headerBlock}>
        <View style={styles.cityBadgeWrap}>
          <View style={styles.cityBadgeOuter}>
            <Text style={styles.cityBadgeText}>{tournament.badge}</Text>
          </View>
        </View>

        <View style={styles.cityTitleWrap}>
          <Text style={styles.cityTitle}>{tournament.city}</Text>
        </View>
      </View>

      <View style={styles.cpRow}>
        <View style={styles.cpPill}>
          <Text style={styles.cpText}>+{tournament.cp} CP</Text>
        </View>
        <View style={styles.cpPill}>
          <Text style={styles.cpText}>+{tournament.cpBonus}</Text>
        </View>
      </View>

      <View style={styles.infoPanel}>
        <View style={styles.prizeRow}>
          <Text style={styles.prizeText}>Prize: {tournament.prize}</Text>
          <View style={styles.coinPill}>
            <Text style={styles.coinText}>◉</Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Players online: {tournament.players} ◔</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Entry fee: {tournament.entry} ◉</Text>
        </View>

        <View style={styles.infoBoxRow}>
          <Text style={styles.infoText}>Rules: {tournament.rules.replace('Rules: ', '')}</Text>
          <View style={styles.helpPill}>
            <Text style={styles.helpText}>i</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    borderWidth: 4,
    borderColor: '#d18137',
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginTop: 14,
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    top: 0,
    left: '20%',
    right: '20%',
    height: 110,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 230, 120, 0.15)',
  },
  headerBlock: {
    position: 'relative',
    marginTop: 6,
    alignItems: 'center',
  },
  cityBadgeWrap: {
    marginBottom: 8,
  },
  cityBadgeOuter: {
    width: 68,
    height: 68,
    borderRadius: 18,
    backgroundColor: '#f4d366',
    borderWidth: 4,
    borderColor: '#efb32a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityBadgeText: {
    fontSize: 28,
    color: '#4d5a78',
  },
  cityTitleWrap: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: '#efb32a',
    backgroundColor: '#f4d366',
  },
  cityTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#f7d20d',
    textAlign: 'center',
    letterSpacing: 1,
  },
  cpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 18,
  },
  cpPill: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: '#f29f1f',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#f9d76a',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  cpText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#4d2908',
  },
  infoPanel: {
    backgroundColor: 'rgba(57,49,88,0.18)',
    borderRadius: 18,
    padding: 12,
    borderWidth: 3,
    borderColor: '#f7d36b',
  },
  prizeRow: {
    backgroundColor: '#ae7135',
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#d8c27a',
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  prizeText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#fff7ec',
  },
  coinPill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f2ae24',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#f4d169',
  },
  coinText: {
    fontSize: 12,
    color: '#fff',
  },
  infoBox: {
    backgroundColor: '#0a428f',
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#d9d4ba',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 12,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#f8f8ff',
    textAlign: 'center',
  },
  infoBoxRow: {
    backgroundColor: '#0c478f',
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#d9d4ba',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  helpPill: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#0f9ce4',
    borderWidth: 2,
    borderColor: '#7ab7ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#fff',
  },
});
