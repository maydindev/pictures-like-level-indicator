"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [images, setImages] = useState([]);

  // Resim eklemek için fonksiyon
  const handleAddImage = () => {
    const newImageUrl = `https://picsum.photos/seed/${crypto.randomUUID()}/200/300`;
    setImages([...images, { url: newImageUrl, likeCount: 0, sizeStep: 0 }]);
  };

  // Like sayısını artırmak için fonksiyon
  const handleLike = (index) => {
    const updatedImages = [...images];
    updatedImages[index].sizeStep = (updatedImages[index].sizeStep + 1) % 3;
    setImages(updatedImages);
  };

  // Emoji boyutunu değiştirmek için fonksiyon
  const getEmojiSize = (sizeStep) => {
    switch (sizeStep) {
      case 0:
        return "2rem";
      case 1:
        return "4rem";
      case 2:
        return "6rem";
      default:
        return "2rem";
    }
  };

  const emojiStyle = {
    fontSize: "2rem",
    transition: "font-size 0.3s ease",
    textDecoration: "none",
    cursor: "pointer",
  };

  const buttonStyle = {
    backgroundColor: "white",
    fontSize: 16,
    color: "black",
    padding: "15px",
    margin: "15px",
    borderRadius: "10px",
    width: "150px",
    cursor: "pointer",
  }

  return (
    <>
      <button style={buttonStyle} onClick={handleAddImage}>Resim Ekle</button>
      <div>
        {images.map((image, index) => (
          <span key={index}>
            <input type="image" alt="LoremPicsum" src={image.url} />
            <a href="#" onClick={() => handleLike(index)} style={{ ...emojiStyle, fontSize: getEmojiSize(image.sizeStep) }}>
              👍🏻
            </a>
          </span>
        ))}
      </div>
    </>
  );
}



//new nextjs file template code
/*
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
    */
