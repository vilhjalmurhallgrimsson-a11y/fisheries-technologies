type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
      {children}
    </span>
  );
}