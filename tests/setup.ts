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
  const Image = createHost("Image");
  const Keyboard = {
    dismiss: () => {},
    addListener: () => ({ remove: () => {} }),
    removeListener: () => {},
  };

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
  const I18nManager = {
    allowRTL: () => {},
    forceRTL: () => {},
    isRTL: false,
    getConstants: () => ({
      isRTL: false,
      doLeftAndRightSwapInRTL: false,
    }),
  };
  const Easing = {
    linear: (t: number) => t,
    ease: (t: number) => t,
    quad: (t: number) => t,
    cubic: (t: number) => t,
    poly: (n: number) => (t: number) => t ** n,
    sin: (t: number) => t,
    circle: (t: number) => t,
    exp: (t: number) => t,
    elastic: () => (t: number) => t,
    back: () => (t: number) => t,
    bounce: (t: number) => t,
    in: (fn: any) => fn,
    out: (fn: any) => fn,
    inOut: (fn: any) => fn,
  };
  const PixelRatio = {
    get: () => 2,
    getFontScale: () => 1,
    getPixelSizeForLayoutSize: (size: number) => size,
    roundToNearestPixel: (size: number) => size,
  };
  const Animated = {
    View: ({ children, ...props }: any) =>
      React.createElement("AnimatedView", props, children),
    Text: ({ children, ...props }: any) =>
      React.createElement("AnimatedText", props, children),
    Image: ({ children, ...props }: any) =>
      React.createElement("AnimatedImage", props, children),
    createAnimatedComponent: (Component: any) => Component,
    timing: () => ({ start: (cb?: any) => cb?.() }),
    spring: () => ({ start: (cb?: any) => cb?.() }),
    Value: function Value(this: any, val: number) {
      this._value = val;
      this.setValue = (next: number) => {
        this._value = next;
      };
    },
  };

  return {
    View,
    Text,
    TextInput,
    Pressable,
    FlatList,
    StatusBar,
    SafeAreaView,
    Image,
    Keyboard,
    StyleSheet,
    Platform,
    I18nManager,
    Easing,
    Animated,
    PixelRatio,

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
    SafeAreaInsetsContext: {
      Consumer: ({ children }: any) =>
        typeof children === "function"
          ? children({ top: 0, bottom: 0, left: 0, right: 0 })
          : children,
      Provider: createComponent("SafeAreaInsetsProvider"),
    },
    useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
    initialWindowMetrics: {
      insets: { top: 0, bottom: 0, left: 0, right: 0 },
      frame: { x: 0, y: 0, width: 390, height: 844 },
    },
  };
});
