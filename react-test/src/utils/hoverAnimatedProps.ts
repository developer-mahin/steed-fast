import { useSpring } from "@react-spring/web";

export const useHoverAnimatedProps = (toggle: boolean) => {
  return useSpring({
    to: {
      transform: toggle ? "scale(1.05)" : "scale(1)",
    },
    from: { transform: "scale(1)" },
  });
};
