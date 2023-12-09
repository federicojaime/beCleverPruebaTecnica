-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-12-2023 a las 03:37:01
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `beclever`
--
CREATE DATABASE IF NOT EXISTS `beclever` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `beclever`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bussines`
--

CREATE TABLE IF NOT EXISTS `bussines` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bussines`
--

INSERT INTO `bussines` (`id`, `nombre`) VALUES
(1, 'Argentina'),
(2, 'Brazil'),
(3, 'España');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal`
--

CREATE TABLE IF NOT EXISTS `personal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `sexo` varchar(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `personal`
--

INSERT INTO `personal` (`id`, `nombre`, `apellido`, `sexo`) VALUES
(1, 'Federico', 'Jaime', 'M'),
(2, 'Hans', 'Araujo', 'M'),
(3, 'Ariel', 'Jaime', 'M'),
(4, 'Juana', 'Gomez', 'F'),
(5, 'Erica', 'Suarez', 'F'),
(6, 'Javiera', 'Gimenez', 'F');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE IF NOT EXISTS `registros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idemployee` int(11) NOT NULL,
  `date` date NOT NULL,
  `hora` time NOT NULL,
  `registertype` int(11) NOT NULL,
  `businesslocation` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`id`, `idemployee`, `date`, `hora`, `registertype`, `businesslocation`) VALUES
(1, 1, '2023-12-05', '12:00:00', 1, 1),
(2, 2, '2023-12-07', '12:00:00', 2, 2),
(3, 1, '2023-12-05', '12:00:00', 1, 1),
(4, 3, '2023-12-05', '12:00:00', 2, 3),
(5, 4, '2023-12-05', '12:00:00', 2, 1),
(6, 6, '2023-12-05', '12:00:00', 2, 2),
(7, 1, '2023-12-05', '12:00:00', 2, 1),
(8, 1, '2023-02-02', '15:05:08', 2, 3),
(9, 3, '2023-05-02', '15:05:08', 2, 3),
(10, 3, '2023-05-02', '15:05:08', 2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos`
--

CREATE TABLE IF NOT EXISTS `tipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipos`
--

INSERT INTO `tipos` (`id`, `descripcion`) VALUES
(1, 'Ingreso'),
(2, 'Egreso');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `pass` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `user`, `pass`) VALUES
(1, 'fnj', '$2b$10$1q52HQowJFneIBHxOdUSyuXrksTNkf0g/wMDBA8w1quQp6zHMLVFW');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
