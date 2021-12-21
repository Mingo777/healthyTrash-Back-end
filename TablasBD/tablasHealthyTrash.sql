-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: healthytrash
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `descripcion` mediumtext NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (1,'Fernando Gonzalez','Mi primera paella','Lo principal que debe tener en cuenta es que LA CANTIDAD DE PAELLA QUE PODEMOS PREPARAR ESTA CONDICIONADA POR EL RECIPIENTE DONDE LA PREPAREMOS y va a ser el recipiente el que nos indique la cantidad de agua (o caldo), arroz y demás que precisa nuestra paella. Desconfien por principio de toda receta de paella que les de una lista de ingredientes con xxx gramos de arróz, xxx centilitros de caldo, etc. Así no se hace una paella.','https://cdn.pixabay.com/photo/2016/01/29/14/02/paella-1168003__340.jpg','2021-12-13'),(2,'Manuael Salazar','Cuando haces buena broza.','A ver si alguien tiene recetas para hacer caldo que hace un frio de cojones!!! Normalmente le echo lo tipico, pollo, hueso de jamon, etc pero no tiene nada que ver con los caldos que he probado por ahi','https://cdn.pixabay.com/photo/2018/10/25/19/15/goulash-3773134__340.jpg','2021-12-17'),(3,'Jose Francisco de la sierra','Esto si que es un buen pulpo','Me han dicho que cocer el pulpo en la olla a presión es muy fácil y queda muy bien, pero no recuerdo cuanto tiempo debe estar cociendose.Si hay alguien que pueda darme la receta se lo agradeceré.','https://cdn.pixabay.com/photo/2015/04/12/22/08/food-719680__340.jpg','2021-12-22');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'americana'),(2,'italiana'),(3,'japonesa'),(4,'india'),(5,'arabe'),(6,'mediterranea'),(7,'mexicana');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recetas`
--

DROP TABLE IF EXISTS `recetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recetas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `ingredientes` varchar(255) NOT NULL,
  `urlFotos` varchar(255) NOT NULL,
  `descripcion` mediumtext NOT NULL,
  `Fecha_inscripcion` date NOT NULL,
  `autor` varchar(45) NOT NULL,
  `modoDeCocinado` longtext NOT NULL,
  `categoria_id` int DEFAULT NULL,
  `usuario_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recetas`
--

LOCK TABLES `recetas` WRITE;
/*!40000 ALTER TABLE `recetas` DISABLE KEYS */;
INSERT INTO `recetas` VALUES (1,'Kikos saludables','1 bote de garbanzos cocidos,2 c/s de aceite de oliva virgen extra (AOVE),1/2 cucharadita de sal,Especias: ½ c/p de pimienta, 1 c/p de comino molido y 1 c/p de pimentón picante','https://cdn.pixabay.com/photo/2015/02/05/05/58/peanut-624601_960_720.jpg','kikos con un toque mediterraneo','2021-12-13','Carlos','Precalentar el horno a 200º,Escurrir los garbanzos para que queden bien secos (podéis usar papel absorbente o papel de cocina),En un bol, mezclar el aceite con todas las especias y crear una mezcla homogénea. Incorporar los garbanzos a la mezcla y removerlos con una cuchara para que se mezclen todos los ingredientes,Hornear a 200º durante 30-40’ (cada horno es diferente, tendréis que ir vigilando para que no se os quemen),Sacarlos del horno y enfriarlos durante unos minutos.',1,'33'),(2,'Chips de boniato al horno','Boniato,AOVE,Sal,Especias: Cúrcuma, pimienta negral y curry.','https://media.istockphoto.com/photos/sweet-potato-fries-with-cajun-spices-and-yogurt-and-dill-sauce-picture-id1048849496?b=1&k=20&m=1048849496&s=170667a&w=0&h=dmfuB_qSJzFohd8mn4GGxmHlMd_WGRCUE1thTA2JN3c=','Se trata simplemente de cortar a láminas muy finas el boniato y freírlo. De ese modo se obtienen unos chips crujientes y sabrosos. Se pueden condimentar con sal y pimienta.','2021-12-14','Maria','Primero de todo pelaremos y cortaremos los boniatos en forma de patata frita. Paralelamente, precalentaremos el horno a 200ª,En un bol, añadiremos los chips de boniato junto al aove, la sal, la pimienta y las especias (podéis usar los condimentos que queráis) y lo mezclaremos bien,Pondremos las chips en una fuente para horno esparcidas y separadas (no unas sobre otras),Hornear durante 30 minutos a 180ª',3,'32'),(3,'Hamburguesa de pollo y piña','2 rebanadas de pan de espelta integral (o cualquier otro cereal), Hamburguesa de pollo, 1 rodaja de piña, 1 puñadito de rúcula, 2 rodajas de tomate, Para acompañar: Patatas de boniato y mostaza de “dijon”.','https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg','una buena hamburguesa para juanan','2021-10-10','Juanan','Lavar y cortar la rúcula y el tomate,Cocinar la carne a temperatura media evitando que se queme,Cocinar la piña a la plancha aproximadamente 1 minuto (vuelta y vuelta hasta que quede un poco doradita),Finalmente, montamos la hamburguesa integrando e introduciendo todos los ingredientes.',1,'33'),(4,'Hummus','500gr de garbanzos cocidos','https://cdn.pixabay.com/photo/2015/11/23/09/21/hummus-1058000_960_720.jpg','Un buen Hummus','2021-11-10','Mario','Ponemos en nuestro procesador de ingredientes los garbanzos cocidos, el aove, los ajos, el zumo del limón y trituramos durante unos minutos hasta obtener una masa espesa y sin grumos,Incorporamos el comino en polvo, salpimentamos y por último añadimos la tahina,Volvemos a triturar todo hasta que queden perfectamente integrados todos los ingredientes,Dejamos enfriar en el frigorífico o si lo preferimos comemos directamente,Colocamos en un plato o bowl y rociamos por encima con un poquito de aove, comino, pimienta… (condimentamos como queramos).',2,'32'),(5,'Fingers de calabacín y queso','2 calabacines,3 huevos,2 c/s de mozzarella rallada,Pan rallado integra,1 c/s de queso parmesano rallado,AOVE,Especias: pimienta y orégano','https://media.istockphoto.com/photos/zuchini-fritters-snack-food-picture-id510162646?b=1&k=20&m=510162646&s=170667a&w=0&h=hobjIC5E7w0Lb_7XVfKXEiSpmPMVl6E14Jp-yycDiyI=','Buenos palitos de queso','2021-12-01','Carmen','Precalentar el horno a 180º,Lavar los calabacines y cortarlos a tiras más o menos iguales,En un bol, batir los huevos y en otro bol mezclar el resto de los ingredientes,Pasar los calabacines primero por el huevo batido y después por el pan rallado,Colocarlos en una fuente de horno a la que préviamente habremos pulverizado con un poco de aceite para que no se peguen,Hornear a 180º hasta que estén dorados (el tiempo dependerá de cada horno),Sacarlos y dejarlos enfriar antes de servir para que queden crujientes.',1,'32'),(6,'Chips de verduras','Calabacín,Zanahoria,Boniato,Calabaza,Nabo,AOVE,pimienta negra, ajo en polvo, cúrcuma, etc.','https://cdn.pixabay.com/photo/2015/08/31/19/20/cheese-food-915964__340.jpg','Buenas fritada de verduras','2021-10-01','Pablo','Pelar y cortar todas las verduras en láminas muy finas con ayuda de una mandolina,Secarlas varias veces con papel de cocina para que se absorba toda el agua,En un bol mezclar una c/s de aceite de oliva, pimienta negra, ajo en polvo y cúrcuma, Agregar las chips de verduras y empaparlas bien con la mezcla,Precalentar el horno a 120º y colocarla las chips(sin apelmazar, unas separadas de otras) en una bandeja de horno con papel de horno untado con un poco de aceite para que no se peguen.Dejar que se deshidraten las verduras durante 45’-1h (depende de lo crujientes que las queramos),Servir con un poco de sal.',2,'33'),(9,'Arroz frito con verduras ','1 caldo vegetal en cacitos Knorr o caldo de pollo Knorr, 500 g de arroz, 2 cucharadas de salsa de soja, 1 pimiento rojo morrón, 1 pimiento amarillo morrón, 150 g de guisantes frescos verdes o congelados, descongelados previamente, 1 huevo ','https://cdn.pixabay.com/photo/2017/07/16/11/57/fried-2509089__340.jpg','El arroz frito es un plato de la cocina china. Básicamente, consiste en un arroz cocido que se saltea a fuego alto y muy rápido en un wok con verduras como cebolla china, raíces chinas.','2021-11-11','Javier','Cortamos en rodajas las cebollas y las cebolletas. Cortamos los pimientos morrones en tiras. Batimos un poco el huevo. Disolvemos el Cacito de Caldo Vegetal o de Caldo de Pollo en 1 litro de agua, añadimos el arroz lavado, llevamos a ebullición, bajamos el fuego y cocinamos con la olla bien tapada durante unos 15 minutos o hasta que el arroz esté tierno. Retiramos el arroz del fuego y lo separamos con un tenedor. En una sartén grande, calentamos aceite de oliva y freímos la cebolla y los pimientos morrones hasta que estén un poco dorados y tiernos. Añadimos el arroz, los guisantes verdes y la salsa de soja. Freímos todo junto a fuego medio-fuerte durante unos 4 minutos. Añadimos el huevo y removemos rápidamente. Cocinamos 1 minuto más.',NULL,NULL);
/*!40000 ALTER TABLE `recetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (32,'Jose','Arcos','Jose@gmail.com','$2a$10$JTPUeYTglVuYWE/LRyQ3rupiue8cROjayqNs6Os2vY9RsdyjTBmAS','Jose777'),(33,'Carlos','Mingorance','cmingo@gmail.com','$2a$10$GF9r/FiUVIVcYZVnXoFf6u4DeDt40a9QuKe.If0UYmI2N6kCyOUeq','mingo777'),(35,'Javier','Martin','marti@gamil.com','$2a$10$4tLg2HlOMDsCfDyRbXAMoucVAAySUI6Px/PhDchfVG6YBzogU2Xgy','marti777'),(36,'Maria','De la Cruz','mari@gmail.com','$2a$10$4BmVNdZeoIRvsOyKrVQjQezAdrGkTr7Jd0m307wazWo3sj9isTjQC','mari777'),(37,'Francisco','huete','fran@gmail.com','$2a$10$MoB15mV777dAlc6Va7gDWe.Up0Zhy0OiIc0tNWyQfhvEBRgqopaka','fran777'),(39,'Manuel','Sanchez','san@gmail.com','$2a$10$FuZX5IYIwM7CLSBXxiwV6eSuBxwyTgO4vZarFo3rK97W4cqEMLZpy','san777');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-21 10:10:38
