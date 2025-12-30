export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    // min-h-screen으로 변경해야함
    <div className="max-w-[1440px] mx-auto relative h-[2000px]">{children}</div>
  );
}
