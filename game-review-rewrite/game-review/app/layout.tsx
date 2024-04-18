"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReviewsProvider } from "./state/reviewsContext";
import { useReviews } from "./state/reviewsContext";

import Header from "./components/header";
import AddReviewModal from "./components/addReviewModal";
import { Suspense } from "react";
import ModalOverlay from "./components/modalOverlay";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Loading = () => {
    return "LOading...";
  };

  const LayoutContent: React.FC = () => {
    const { isAddReviewModalOpen } = useReviews();
    return (
      <>
        {isAddReviewModalOpen && (
          <ModalOverlay>
            <AddReviewModal />
          </ModalOverlay>
        )}
        <Header />
        <Suspense fallback={Loading()}>
          <div className="wrapper">{children}</div>
        </Suspense>
      </>
    );
  };

  return (
    <ReviewsProvider>
      <html lang="en">
        <body className={inter.className}>
          <LayoutContent />
        </body>
      </html>
    </ReviewsProvider>
  );
}
