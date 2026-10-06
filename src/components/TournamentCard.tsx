import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function TournamentCard({ tournament }: { tournament: any }) {
  const backgroundColor =
    tournament.tone === 'pink'
      ? '#a95ae4'
      : tournament.tone === 'red'
        ? '#d94a4a'
        : tournament.tone === 'crimson'
          ? '#c44444'
          : '#a95ae4';

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <View style={styles.headerWrap}>
        <View style={styles.logoWrap}>
          <Text style={styles.logoText}>♛</Text>
        </View>
        <View style={styles.cityWrap}>
          <Text style={styles.cityText}>{tournament.city}</Text>
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
          <View style={styles.coinBadge}><Text style={styles.coinText}>◉</Text></View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Players online: {tournament.players} ◔</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Entry fee: {tournament.entry} ◉</Text>
        </View>

        <View style={styles.infoBoxRow}>
          <Text style={styles.infoText}>Rules: {tournament.rules}</Text>
          <View style={styles.helpPill}><Text style={styles.helpText}>i</Text></View>
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
  },
  headerWrap: {
    alignItems: 'center',
    marginTop: 10,
  },
  logoWrap: {
    width: 70,
    height: 70,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: '#efb32a',
    backgroundColor: '#f4d366',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    color: '#4d5a78',
  },
  cityWrap: {
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: '#efb32a',
    backgroundColor: '#f4d366',
  },
  cityText: {
    fontSize: 28,
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
    backgroundColor: 'rgba(57, 49, 88, 0.18)',
    borderRadius: 18,
    borderWidth: 3,
    borderColor: '#f7d36b',
    padding: 12,
  },
  prizeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ae7135',
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#d8c27a',
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  prizeText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#fff7ec',
  },
  coinBadge: {
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
    marginTop: 12,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#d9d4ba',
    backgroundColor: '#0a428f',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#f8f8ff',
    textAlign: 'center',
  },
  infoBoxRow: {
    marginTop: 12,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#d9d4ba',
    backgroundColor: '#0c478f',
    paddingVertical: 12,
    paddingHorizontal: 12,
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
