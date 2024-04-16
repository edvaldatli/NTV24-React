"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReviewsProvider } from "./state/reviewsContext";
import { useReviews } from "./state/reviewsContext";

import Header from "./components/header";
import AddReviewModal from "./components/addReviewModal";
import { ReactNode } from "react";
import ModalOverlay from "./components/modalOverlay";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const LayoutContent: React.FC = () => {
    const { isModalOpen, closeModal } = useReviews();
    return (
      <>
        {isModalOpen && (
          <ModalOverlay>
            <AddReviewModal />
          </ModalOverlay>
        )}
        <Header />
        <div className="wrapper">{children}</div>
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
