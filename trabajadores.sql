-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-03-2023 a las 03:43:48
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `trabajadores`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_trabajadores`
--

CREATE TABLE `datos_trabajadores` (
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `cedula` int(11) NOT NULL,
  `horas_diurnas` int(10) NOT NULL,
  `horas_vespertinas` int(10) NOT NULL,
  `horas_nocturnas` int(10) NOT NULL,
  `salario_quincenal` decimal(10,0) NOT NULL,
  `ahorro_habitacional` decimal(10,0) NOT NULL,
  `seguro_social` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `datos_trabajadores`
--

INSERT INTO `datos_trabajadores` (`nombre`, `apellido`, `cedula`, `horas_diurnas`, `horas_vespertinas`, `horas_nocturnas`, `salario_quincenal`, `ahorro_habitacional`, `seguro_social`) VALUES
('Santiago', 'Viloria', 30139486, 4, 4, 4, '9325', '93', '140');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
