import { MotionDiv } from "./Motion/MotionDiv";

type Props = {
  children: React.ReactNode
}

export const FadeIn = ({children}: Props) => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "100% 0px -100px 0px" }}
    >
      {children}
    </MotionDiv>
  );
};