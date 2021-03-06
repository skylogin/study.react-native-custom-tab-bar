import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';

import Tab from './Tab';
import SearchBar from './SearchBar';

type Route = {
  key: string;
  name: string;
  params?: object | undefined;
};

const Container = styled.View`
  margin-top: 16px;
`;

const TabWrapper = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding-left: 4px;
`;

const BottomLine = styled.View`
  background-color: #5d004a;
  height: 2px;
  width: 100%;
`;

export default function TabBar({state, navigation}: MaterialTopTabBarProps) {
  const [translateValue] = useState(new Animated.Value(0));
  const [width, setWidth] = useState(0);
  const [toValue, setToValue] = useState(0);

  useEffect(() => {
    Animated.spring(translateValue, {
      toValue,
      damping: 10,
      mass: 1,
      stiffness: 100,
      overshootClamping: true,
      restDisplacementThreshold: 0.001,
      restSpeedThreshold: 0.001,
      useNativeDriver: true,
    }).start();
  }, [state, translateValue, toValue]);

  return (
    <Container>
      <SearchBar />
      <TabWrapper>
        {state.routes.map((route: Route, index: number) => {
          // const {options} = descriptors[route.key];
          // const label = options.tabBarLabel;
          const label = route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <Tab
              isFocused={isFocused}
              key={`tab_${index}`}
              label={label}
              onPress={onPress}
              setToValue={setToValue}
              setWidth={setWidth}
            />
          );
        })}
      </TabWrapper>
      <BottomLine
        as={Animated.View}
        style={{
          transform: [{translateX: translateValue}],
          width,
        }}
      />
    </Container>
  );
}
