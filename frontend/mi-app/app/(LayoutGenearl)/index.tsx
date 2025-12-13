import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Colors } from "@/theme/colors";

const IMAGE =
  "https://play-lh.googleusercontent.com/sFmWfYbYp_2ea7VRMTnwd3gjIBrPGXHj_d_ab1_k1q1p2OMk4riGMF1vqxdhONOtTYOt_BVpk7a4AYcKU68LNGQ";

const slides = [IMAGE, IMAGE, IMAGE];

const { width } = Dimensions.get("window");

export default function Home() {
  const scrollRef = useRef<ScrollView>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (current + 1) % slides.length;
      scrollRef.current?.scrollTo({
        x: next * width,
        animated: true,
      });
      setCurrent(next);
    }, 4500);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <ScrollView>
      <View style={styles.hero}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={scrollRef}
          onScroll={(e) => {
            const index = Math.round(
              e.nativeEvent.contentOffset.x / width
            );
            setCurrent(index);
          }}
        >
          {slides.map((img, i) => (
            <Image key={i} source={{ uri: img }} style={styles.heroImage} />
          ))}
        </ScrollView>

        <View style={styles.overlay}>
          <Text style={styles.title}>Aprende sin límites</Text>
          <Text style={styles.desc}>
            Cursos prácticos para crecer profesionalmente
          </Text>

          <Pressable style={styles.primaryBtn}>
            <Text style={styles.primaryText}>Explorar cursos</Text>
          </Pressable>
        </View>

        <View style={styles.dots}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                current === i && { backgroundColor: Colors.primary },
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.logos}>
        <Text style={styles.sectionTitle}>
          Empresas que confían
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Image key={i} source={{ uri: IMAGE }} style={styles.logo} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 420,
  },
  heroImage: {
    width,
    height: 420,
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#FFF",
    textAlign: "center",
  },
  desc: {
    color: "#E5E7EB",
    marginVertical: 10,
  },
  primaryBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  primaryText: {
    color: "#FFF",
    fontWeight: "700",
  },
  dots: {
    position: "absolute",
    bottom: 14,
    flexDirection: "row",
    alignSelf: "center",
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 99,
    backgroundColor: "#FFF",
    opacity: 0.6,
  },
  logos: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 14,
  },
  logo: {
    width: 100,
    height: 60,
    marginHorizontal: 14,
    resizeMode: "contain",
  },
});
