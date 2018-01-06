USE `chat_rooms`;

/*Table structure for table `tb_active` */

DROP TABLE IF EXISTS `msg_log`;

CREATE TABLE `msg_log` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `active_no` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT 'msglog',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
