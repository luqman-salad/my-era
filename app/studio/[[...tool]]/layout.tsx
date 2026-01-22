// app/studio/[[...tool]]/layout.tsx

export const metadata = {
  title: 'Sanity Studio',
  description: 'Content Management System',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* We do NOT include Header or Footer here */}
        {children}
      </body>
    </html>
  )
}