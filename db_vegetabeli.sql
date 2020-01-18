-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Jan 2020 pada 05.13
-- Versi server: 10.4.8-MariaDB
-- Versi PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_vegetabeli`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cart`
--

CREATE TABLE `cart` (
  `id_cart` varchar(11) NOT NULL,
  `products` varchar(100) DEFAULT NULL,
  `id_user` varchar(255) DEFAULT NULL,
  `id_market` varchar(255) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `date_transaction` datetime DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `cart`
--

INSERT INTO `cart` (`id_cart`, `products`, `id_user`, `id_market`, `total`, `date_transaction`, `date_updated`) VALUES
('fa99d0e7', NULL, '39d6be43', '14bc2bfe', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `id_category` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`id_category`, `name`) VALUES
(2, 'sayuran'),
(4, 'bumbu'),
(5, 'lauk pauk'),
(6, 'seafood'),
(7, 'sembako'),
(8, 'jajanan'),
(9, 'buah');

-- --------------------------------------------------------

--
-- Struktur dari tabel `forgot_code`
--

CREATE TABLE `forgot_code` (
  `No` int(11) NOT NULL,
  `Code` varchar(255) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `Type` enum('OTP','Email') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `market`
--

CREATE TABLE `market` (
  `id_market` varchar(255) NOT NULL,
  `id_user` varchar(255) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `location` varchar(100) NOT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `market`
--

INSERT INTO `market` (`id_market`, `id_user`, `name`, `photo`, `location`, `date_created`, `date_updated`) VALUES
('02acccfb', 'efdw23', 'Pasar Mampang', 'photo-1579068589107.jpg', 'Lampung', '2020-01-15 13:09:49', '2020-01-15 13:09:49'),
('14bc2bfe', '975e6805', 'Pasar Utomo', 'photo-1579168294699.jpg', 'Surabaya', '2020-01-16 16:51:34', '2020-01-16 16:51:34'),
('82cd852c', '4213s', 'Pasar Kembang', 'photo-1579066575872.jpg', 'Jogja', '2020-01-15 11:23:50', '2020-01-15 12:36:15'),
('9s8ad7sadbj', '3123sdqw', 'Pasar Sidayur', 'photo-1579066532420.jpg', 'Malang', '2020-01-15 00:00:00', '2020-01-15 12:35:32');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id_product` varchar(255) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `sold` int(11) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_updated` int(11) DEFAULT NULL,
  `id_market` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id_product`, `name`, `description`, `price`, `image`, `category`, `stock`, `sold`, `date_created`, `date_updated`, `id_market`) VALUES
('0', 'Kerang Merah', 'Kerang dari Tulungagung', 1000, 'image-1579233802997.jpg', 'seafood', 1213, NULL, '2020-01-17 11:03:23', 2020, '02acccfb'),
('1', 'Kerang Dara', 'Asli Kerajaan Majapahit', 12000, 'image-1579077574786.jpg', 'seafood', 842, 0, '2020-01-15 15:39:34', 2020, 'ewrew21'),
('72', 'Maggi Saos Tiram', 'Rasa Ayam Bawang', 3000, 'image-1579075030732.jpg', 'bumbu', 1002, 0, '2020-01-15 14:47:56', 2020, '8767das'),
('952', 'Tomat', 'Tomat segar berasal dari bukit Marwa', 12000, 'image-1579074708389.jpg', 'sayuran', 123, 0, '2020-01-15 14:51:48', 2020, '8767das');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product_taken`
--

CREATE TABLE `product_taken` (
  `id_product_taken` varchar(255) NOT NULL,
  `id_product` varchar(255) NOT NULL,
  `id_cart` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product_taken`
--

INSERT INTO `product_taken` (`id_product_taken`, `id_product`, `id_cart`, `quantity`) VALUES
('4d246efc', '1233', '312', 0),
('69285163', '1', 'fa99d0e7', 0),
('b0b3f506', '952', 'fa99d0e7', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` varchar(255) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `name`, `photo`, `phone`, `email`, `password`, `role`, `date_created`, `date_updated`) VALUES
('39d6be43', NULL, NULL, NULL, 'keppler@abc.com', '$2a$10$kC/ex0C7.SUOOmmu4x79Xe6n/.ZKuSdTNxRJ0waTgUoMbzVSQvGp2', 'buyer', '2020-01-16 16:52:42', NULL),
('975e6805', NULL, NULL, NULL, 'satrio@abc.com', '$2a$10$jIij2LX4.5nm94ORU0kh1e4A5g6Hygyoz.Y75DOitr9.FhZaPacS6', 'seller', '2020-01-16 15:45:26', NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_cart`);

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indeks untuk tabel `forgot_code`
--
ALTER TABLE `forgot_code`
  ADD PRIMARY KEY (`No`);

--
-- Indeks untuk tabel `market`
--
ALTER TABLE `market`
  ADD PRIMARY KEY (`id_market`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`);

--
-- Indeks untuk tabel `product_taken`
--
ALTER TABLE `product_taken`
  ADD PRIMARY KEY (`id_product_taken`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `forgot_code`
--
ALTER TABLE `forgot_code`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
