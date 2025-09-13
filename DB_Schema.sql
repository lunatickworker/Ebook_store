-- 사용자 정보 테이블
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    username VARCHAR(100),
    social_provider VARCHAR(50), -- 'google', 'apple' 등
    social_id VARCHAR(255),
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 도서 정보 테이블
CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    publisher VARCHAR(100),
    description TEXT,
    cover_image_url VARCHAR(255),
    publication_date DATE,
    genre VARCHAR(50),
    tags TEXT[], -- ['판타지', '성장'] 형태의 배열
    price NUMERIC(10, 2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'KRW',
    preview_file_url VARCHAR(255), -- 미리보기 파일 경로
    ebook_file_url VARCHAR(255) NOT NULL, -- 실제 전자책 파일 경로
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 도서 리뷰 및 평점 테이블
CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    book_id INT REFERENCES books(book_id) ON DELETE CASCADE,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    rating SMALLINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 주문 정보 테이블
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE SET NULL,
    total_amount NUMERIC(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'completed', -- 'pending', 'failed' 등
    ordered_at TIMESTAMPTZ DEFAULT NOW()
);

-- 개별 주문 항목 테이블 (한 주문에 여러 권의 책이 포함될 수 있음)
CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id) ON DELETE CASCADE,
    book_id INT REFERENCES books(book_id),
    price_at_purchase NUMERIC(10, 2) NOT NULL
);

-- 사용자가 구매한 책 목록 (내 서재)
CREATE TABLE library (
    library_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    book_id INT REFERENCES books(book_id) ON DELETE CASCADE,
    added_at TIMESTAMPTZ DEFAULT NOW(),
    last_read_at TIMESTAMPTZ,
    UNIQUE(user_id, book_id) -- 한 사용자가 같은 책을 여러 번 추가할 수 없음
);

-- 북마크 및 메모 테이블
CREATE TABLE bookmarks (
    bookmark_id SERIAL PRIMARY KEY,
    library_id INT REFERENCES library(library_id) ON DELETE CASCADE,
    page_number INT,
    note TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
