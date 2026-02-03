import { mock } from "bun:test";

/**
 * React 18+/19 act() support
 */
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

/**
 * Allow tests to switch platforms:
 *   globalThis.__TEST_PLATFORM__ = "web" | "ios" | "android"
 */
const getPlatform = () =>
  (globalThis as any).__TEST_PLATFORM__ ?? "web";

/**
 * react-native mock
 */
mock.module("react-native", () => {
  const React = require("react");

  const createHost =
    (name: string) =>
    ({ children, ...props }: any) =>
      React.createElement(name, props, children);

  const View = createHost("View");
  const Text = createHost("Text");
  const TextInput = createHost("TextInput");
  const Pressable = createHost("Pressable");
  const StatusBar = createHost("StatusBar");
  const SafeAreaView = createHost("SafeAreaView");

  const FlatList = ({ data = [], renderItem, keyExtractor, ...rest }: any) =>
    React.createElement(
      "FlatList",
      rest,
      data.map((item: any, index: number) =>
        React.createElement(
          React.Fragment,
          { key: keyExtractor?.(item) ?? index },
          renderItem({ item, index })
        )
      )
    );

  const StyleSheet = {
    create: (styles: Record<string, any>) => styles,
    flatten: (style: any) => {
      if (Array.isArray(style)) {
        return Object.assign({}, ...style);
      }
      return style ?? {};
    },
  };

  const Platform = {
    get OS() {
      return getPlatform();
    },
    select: (spec: Record<string, any>) =>
      spec[getPlatform()] ?? spec.default,
  };

  return {
    View,
    Text,
    TextInput,
    Pressable,
    FlatList,
    StatusBar,
    SafeAreaView,
    StyleSheet,
    Platform,

    Dimensions: {
      get: () => ({ width: 390, height: 844 }),
    },
  };
});

/**
 * react-native-safe-area-context mock
 */
mock.module("react-native-safe-area-context", () => {
  const React = require("react");

  const createComponent =
    (name: string) =>
    ({ children, ...props }: any) =>
      React.createElement(name, props, children);

  return {
    SafeAreaProvider: createComponent("SafeAreaProvider"),
    SafeAreaView: createComponent("SafeAreaView"),
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  };
});
