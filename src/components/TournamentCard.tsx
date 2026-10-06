import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function PassBanner() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.topRow}>
          <View style={styles.shield}>
            <Text style={styles.shieldText}>♛</Text>
          </View>

          <Text style={styles.title}>CHESS PASS</Text>

          <View style={styles.timeWrap}>
            <View style={styles.timePill}>
              <Text style={styles.timeText}>◔ 25d 21h</Text>
            </View>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>4</Text>
            </View>
          </View>
        </View>

        <View style={styles.progressRow}>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <Text style={styles.progressText}>0/35</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 16,
  },
  banner: {
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#f3a83e',
    backgroundColor: '#983a6d',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shield: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#f0f3fb',
    borderWidth: 2,
    borderColor: '#f1d5a5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shieldText: {
    fontSize: 18,
    color: '#4d5a78',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '900',
    color: '#fffaf1',
    letterSpacing: 1,
    marginLeft: 8,
  },
  timeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timePill: {
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 2,
    borderColor: '#f4d98d',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  timeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#fdf5d8',
  },
  levelBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f3b526',
    borderWidth: 2,
    borderColor: '#f7d268',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#58350a',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 8,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: 'rgba(236,230,221,0.16)',
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressFill: {
    width: '0%',
    height: '100%',
    backgroundColor: '#f7d768',
    borderRadius: 8,
  },
  progressText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#fff5de',
  },
});
