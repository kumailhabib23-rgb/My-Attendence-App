import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = any;

import type { ComponentProps } from 'react';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

const ICONS: Record<string, IconName> = {
  index: 'home',
  profile: 'account',
  settings: 'cog',
};

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: Props) {
  const activeIndex = state.index;

  return (
    <SafeAreaView edges={['bottom']} style={styles.safe}>
      <View style={styles.wrapper}>
        <LinearGradient
          colors={['#ffffff', '#f3f7ff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.container}
        >
          {state.routes.map((route: any, idx: number) => {
            const focused = idx === activeIndex;

            const label =
              descriptors[route.key]?.options?.title ?? route.name;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!focused && !event.defaultPrevented) {
                navigation.navigate({
                  name: route.name,
                  merge: true,
                });
              }
            };

            return (
              <Pressable
                key={route.key}
                onPress={onPress}
                style={styles.button}
              >
                <View
                  style={[
                    styles.activeBackground,
                    focused && styles.activeBackgroundFocused,
                  ]}
                >
                  {focused && (
                    <LinearGradient
                      colors={['#0ea5e9', '#2563eb']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.gradientCircle}
                    >
                      <MaterialCommunityIcons
                        name={ICONS[route.name] ?? 'circle-outline'}
                        size={24}
                        color="#fff"
                      />
                    </LinearGradient>
                  )}

                  {!focused && (
                    <MaterialCommunityIcons
                      name={ICONS[route.name] ?? 'circle-outline'}
                      size={24}
                      color="#7B8794"
                    />
                  )}
                </View>

                <Text
                  style={[
                    styles.label,
                    focused && styles.labelFocused,
                  ]}
                >
                  {label}
                </Text>

                {focused && <View style={styles.dot} />}
              </Pressable>
            );
          })}
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },

  container: {
    flexDirection: 'row',
    width: '92%',
    height: 74,

    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 8,
    paddingVertical: 0,

    borderRadius: 30,

    backgroundColor: '#fff',

    shadowColor: '#2563eb',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 10,
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  activeBackground: {
    width: 56,
    height: 56,
    borderRadius: 28,

    alignItems: 'center',
    justifyContent: 'center',
  },

  activeBackgroundFocused: {
    marginTop: -24,
  },

  gradientCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,

    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    marginTop: 4,
    fontSize: 11,
    color: '#7B8794',
  },

  labelFocused: {
    color: '#2563eb',
    fontWeight: '700',
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#2563eb',
    marginTop: 3,
  },
});