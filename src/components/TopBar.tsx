import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function TopBar() {
  return (
    <View style={styles.container}>
      <View style={styles.leftGroup}>
        <View style={styles.chip}>
          <Text style={styles.chipText}>15</Text>
        </View>
        <View style={styles.iconBox}>
          <Text style={styles.iconText}>⚙</Text>
        </View>
        <View style={styles.iconBox}>
          <Text style={styles.iconText}>▣</Text>
        </View>
      </View>

      <View style={styles.rightGroup}>
        <StatPill type="gem" value="32" />
        <StatPill type="plus" value="＋" />
        <StatPill type="gold" value="4 800" />
        <StatPill type="plus" value="＋" />
      </View>
    </View>
  );
}

function StatPill({ type, value }: { type: 'gem' | 'plus' | 'gold'; value: string }) {
  const styleMap = {
    gem: styles.gem,
    gold: styles.gold,
    plus: styles.plus,
  };

  return (
    <View style={[styles.pill, styleMap[type]]}>
      <Text style={[styles.pillText, type === 'gold' || type === 'plus' ? styles.darkText : null]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#d08742',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 4,
    borderBottomColor: '#7d3d17',
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  chip: {
    width: 62,
    height: 34,
    borderRadius: 18,
    backgroundColor: '#f8de9c',
    borderWidth: 3,
    borderColor: '#d89f36',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#4b250a',
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#d6dcd6',
    borderWidth: 3,
    borderColor: '#7d7d7d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
    color: '#303030',
  },
  rightGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pill: {
    minWidth: 70,
    height: 36,
    borderRadius: 18,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  gem: {
    backgroundColor: '#4bc0ff',
    borderColor: '#2477f3',
  },
  gold: {
    backgroundColor: '#ffd74d',
    borderColor: '#f5b62d',
  },
  plus: {
    width: 30,
    minWidth: 30,
    backgroundColor: '#ffdb7d',
    borderColor: '#f9c050',
    paddingHorizontal: 0,
  },
  pillText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#ffffff',
  },
  darkText: {
    color: '#4b2908',
  },
});
