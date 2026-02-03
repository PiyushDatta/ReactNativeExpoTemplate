import React from "react";
import { View, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { features } from "../config/features";
import { SearchBar } from "../components/SearchBar";
import styles from "../styles/HomeScreenStyles";

type SampleItem = {
    id: string;
    title: string;
};

const SAMPLE_ITEMS: SampleItem[] = [
    { id: "1", title: "First item" },
    { id: "2", title: "Second item" },
    { id: "3", title: "Third item" },
];

export function HomeScreen() {
    const showSearch = features.enableSearchBar;
    const showList = features.enableSampleList;
    const showOnlyMain = !showSearch && !showList;

    return (
        <SafeAreaView style={styles.container}>
            <View style={showOnlyMain ? styles.mainOnly : styles.mainHeader}>
                <Text style={styles.mainTitle}>MainScreen</Text>
            </View>

            {showSearch ? (
                <SearchBar placeholder="Search..." onChangeText={() => {}} />
            ) : null}

            {showList ? (
                <FlatList
                    testID="sample-list"
                    data={SAMPLE_ITEMS}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Text style={styles.listItemText}>
                                {item.title}
                            </Text>
                        </View>
                    )}
                    contentContainerStyle={styles.list}
                />
            ) : null}
        </SafeAreaView>
    );
}
