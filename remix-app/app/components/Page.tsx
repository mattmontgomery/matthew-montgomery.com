import React from "react";

export default function Page({
  renderLeadImage,
  children,
}: React.PropsWithChildren<{
  renderLeadImage?: () => React.ReactElement;
}>) {
  return (
    <main className="mx-auto grid gap-4 px-4 sm:grid sm:items-center md:container md:px-0">
      {renderLeadImage && renderLeadImage()}
      {children}
    </main>
  );
}
