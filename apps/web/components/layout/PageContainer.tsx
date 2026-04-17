// components/layout/PageContainer.tsx

export function PageContainer({ children }: any) {
  return (
    <div className="container space-y-8">
      {children}
    </div>
  );
}