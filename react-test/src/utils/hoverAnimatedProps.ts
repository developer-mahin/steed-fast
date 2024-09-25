import { useSpring } from "@react-spring/web";

export const useHoverAnimatedProps = (toggle: boolean) => {
  return useSpring({
    to: {
      opacity: toggle ? 1 : 0.5,
      transform: toggle ? "scale(1.05)" : "scale(1)",
    },
    from: { opacity: 0.5, transform: "scale(1)" },
  });
};
