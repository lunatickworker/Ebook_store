import Image from 'next/image';
import Link from 'next/link';
import styles from './BookCard.module.css';

interface BookCardProps {
  id: string | number;
  title: string;
  author: string;
  coverImage: string;
  price: number;
  rating: number;
  description: string;
}

const BookCard = ({ title, coverImage, author, id }: BookCardProps) => {
  return (
    <div className={styles.card}>
      <Link href={`/books/${id}`} passHref>
        <a className={styles.link}>
          <div className={styles.imageWrapper}>
            <Image
              src={coverImage}
              alt={`${title} 표지`}
              width={200}
              height={300}
              className={styles.image}
              priority
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.author}>{author}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BookCard;
