import React, { useMemo, useState } from "react";
import { Image, Text, View, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { useSettings } from "../context/SettingsContext";
import { createMediaScrollStyles } from "../styles/MediaScrollScreenStyles";
import { features } from "../config/features";

type PostType = "text" | "image" | "video";

type Post = {
  id: string;
  userName: string;
  userHandle: string;
  userAvatar: string;
  type: PostType;
  content: string;
  mediaUrl?: string;
  videoThumbnail?: string;
};

const SAMPLE_POSTS: Post[] = [
  {
    id: "1",
    userName: "Jamie Rivera",
    userHandle: "@jamie",
    userAvatar: "https://i.pravatar.cc/100?img=12",
    type: "text",
    content: "Shipping the Media Scroll tab today. Feels smooth!",
  },
  {
    id: "2",
    userName: "Priya Patel",
    userHandle: "@priya",
    userAvatar: "https://i.pravatar.cc/100?img=47",
    type: "image",
    content: "Weekend hike highlights.",
    mediaUrl: "https://picsum.photos/600/400?random=11",
  },
  {
    id: "3",
    userName: "Alex Chen",
    userHandle: "@alex",
    userAvatar: "https://i.pravatar.cc/100?img=32",
    type: "video",
    content: "Quick studio tour.",
    mediaUrl: "https://example.com/video.mp4",
    videoThumbnail: "https://picsum.photos/600/400?random=19",
  },
  {
    id: "4",
    userName: "Riley Park",
    userHandle: "@riley",
    userAvatar: "https://i.pravatar.cc/100?img=18",
    type: "text",
    content: "Small changes add up. Keep the streak alive.",
  },
  {
    id: "5",
    userName: "Morgan Lee",
    userHandle: "@morgan",
    userAvatar: "https://i.pravatar.cc/100?img=8",
    type: "image",
    content: "Sketching a new layout.",
    mediaUrl: "https://picsum.photos/600/400?random=25",
  },
  {
    id: "6",
    userName: "Diego Santos",
    userHandle: "@diego",
    userAvatar: "https://i.pravatar.cc/100?img=5",
    type: "image",
    content: "Color study of the new UI.",
    mediaUrl: "https://picsum.photos/600/400?random=31",
  },
];

const renderMedia = (
  post: Post,
  styles: ReturnType<typeof createMediaScrollStyles>,
) => {
  if (post.type === "text") {
    return null;
  }

  if (post.type === "image") {
    return (
      <View style={styles.mediaWrapper}>
        <Image
          style={styles.media}
          source={{
            uri: post.mediaUrl ?? "https://picsum.photos/600/400?random=1",
          }}
          resizeMode="cover"
        />
      </View>
    );
  }

  const thumbnail =
    post.videoThumbnail ??
    post.mediaUrl ??
    "https://picsum.photos/600/400?random=2";

  return (
    <View style={styles.videoStub}>
      <View style={styles.mediaWrapper}>
        <Image
          style={styles.media}
          source={{ uri: thumbnail }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.videoOverlay}>
        <Text style={styles.videoLabel}>Play</Text>
      </View>
    </View>
  );
};

export function MediaScrollScreen() {
  const { size } = useSettings();
  const styles = useMemo(createMediaScrollStyles, [size]);
  const navigation = useNavigation<any>();
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((value) => value + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topNav}>
        <View style={styles.topNavLeft}>
          <Image
            style={styles.navAvatar}
            source={{ uri: "https://i.pravatar.cc/100?img=15" }}
          />
        </View>
        <View style={styles.topNavCenter}>
          <Text style={styles.navTitle}>Media Scroll</Text>
        </View>
        <View style={styles.topNavRight}>
          <Text style={styles.navAction}>Search</Text>
          <Text style={styles.navAction}>Create</Text>
        </View>
      </View>

      <FlatList
        key={`media-scroll-${refreshKey}`}
        testID="media-feed"
        data={SAMPLE_POSTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        extraData={refreshKey}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.header}>
              <Image style={styles.avatar} source={{ uri: item.userAvatar }} />
              <View style={styles.userMeta}>
                <Text style={styles.userName}>{item.userName}</Text>
                <Text style={styles.userHandle}>{item.userHandle}</Text>
              </View>
            </View>
            <Text style={styles.content}>{item.content}</Text>
            {renderMedia(item, styles)}
          </View>
        )}
      />

      <View style={styles.bottomNav}>
        <Pressable onPress={() => navigation.navigate("Main")}>
          <Text style={styles.bottomItem}>Home</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.bottomItemActive}>Media</Text>
        </Pressable>
        <Pressable onPress={handleRefresh}>
          <Text style={styles.bottomItem}>Alerts</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            features.enableProfileScreen
              ? navigation.navigate("Profile")
              : handleRefresh()
          }
        >
          <Text style={styles.bottomItem}>Profile</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
