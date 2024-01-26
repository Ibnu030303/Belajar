-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Jan 2024 pada 08.52
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `belajarphp`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `Id` int(11) NOT NULL,
  `Nama` char(30) NOT NULL,
  `NIM` varchar(12) NOT NULL,
  `Jurusan` char(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `mahasiswa`
--

INSERT INTO `mahasiswa` (`Id`, `Nama`, `NIM`, `Jurusan`) VALUES
(1, 'ibnu', '211011400455', 'Manajemen'),
(3, 'penul', '200110022123', 'Teknik Informatika'),
(4, 'azstar', '1234567899', 'Hukum'),
(5, 'penul', 'penul', 'Teknik Informatika'),
(6, 'Joko', '21120132', 'Teknik Informatika'),
(7, 'coba2', '0012345', 'Hukum'),
(8, 'test221', '21121312', 'Manajemen'),
(9, 'cogilllll', '00022123', 'Hukum'),
(16, 'Modal1', '002991281221', 'Manajemen'),
(24, 'dahsboard', '21013', 'Teknik Informatika'),
(25, 'kolla', '00213', 'Manajemen'),
(26, 'niasdoa', '201031', 'Teknik Informatika'),
(29, ' <div style=\"width: 100%; heig', '123132', 'Manajemen');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Level` enum('admin','user','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `Username`, `Password`, `Level`) VALUES
(1, 'admin', 'admin', 'admin'),
(3, 'admin1', '123', 'admin'),
(4, 'user', 'user', 'user'),
(5, 'penul', 'penul', 'user');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`Id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `mahasiswa`
--
ALTER TABLE `mahasiswa`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
