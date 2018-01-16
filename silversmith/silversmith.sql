/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.5.23 : Database - anheisg
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`silversmith` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `silversmith`;

/*Table structure for table `tb_character` */

DROP TABLE IF EXISTS `tb_character`;

CREATE TABLE `tb_character` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '角色的id号',
  `viptype` tinyint(4) DEFAULT '0' COMMENT '角色的类型（0普通 1 VIP1  2 vip2）',
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT '角色的昵称',
  `profession` tinyint(4) unsigned zerofill NOT NULL DEFAULT '0000' COMMENT '角色的职业 （0 新手 1战士 2 法师 3 游侠 4 牧师）',
  `figure` int(10) DEFAULT '101' COMMENT '角色的形象',
  `sex` tinyint(4) DEFAULT '1' COMMENT '1男 2女',
  `camp` tinyint(4) DEFAULT '0' COMMENT '所属阵营 0无 1魏 2蜀 3 吴',
  `level` int(10) DEFAULT '1' COMMENT '角色的等级 初始为1',
  `friendCount` int(10) DEFAULT '50' COMMENT '好友上限',
  `coin` int(20) DEFAULT '99999999' COMMENT '玩家的游戏币(金币) 初始为 10000',
  `gold` int(20) DEFAULT '99999999' COMMENT '魔钻 玩家充值购买的商城货币',
  `vipexp` int(20) DEFAULT '0' COMMENT 'vip经验值',
  `town` int(10) DEFAULT '1700' COMMENT '角色所在的场景的ID',
  `position_x` int(10) DEFAULT '20' COMMENT '角色的x坐标',
  `position_y` int(10) DEFAULT '16' COMMENT '角色的y坐标',
  `energy` int(10) DEFAULT '200' COMMENT '角色的活力值',
  `exp` int(20) DEFAULT '0' COMMENT '角色的经验值',
  `hp` int(20) DEFAULT '500' COMMENT '角色的当前血量',
  `mp` int(20) DEFAULT '100' COMMENT '角色的当前魔力值',
  `baseStr` int(20) DEFAULT '5' COMMENT '系统根据职业赋予的基础力量点',
  `baseVit` int(20) DEFAULT '5' COMMENT '系统根据职业赋予的基础体质点',
  `baseDex` int(20) DEFAULT '5' COMMENT '系统根据职业赋予的基础灵巧点（敏捷）',
  `baseWis` int(20) DEFAULT '5' COMMENT '系统根据职业赋予的基础智力点',
  `baseSpi` int(20) DEFAULT '5' COMMENT '系统根据职业赋予的基础精神点',
  `LastonlineTime` datetime DEFAULT '2007-05-06 00:00:00' COMMENT '最后在线时间',
  `contribution` int(20) DEFAULT '0' COMMENT '角色在行会的贡献度',
  `glory` int(20) DEFAULT '0' COMMENT '角色的荣耀值，影响角色的军衔',
  `rank` int(20) DEFAULT '0' COMMENT '角色的军衔',
  `appellation` int(20) DEFAULT '0' COMMENT '角色的称号',
  `packageSize` int(10) DEFAULT '24' COMMENT '包裹的大小，初始为24格',
  `famPackSize` int(10) DEFAULT '6' COMMENT '殖民包裹的大小',
  `outtime` datetime DEFAULT '2007-05-06 00:00:00' COMMENT '角色下线时间',
  `spirit` varchar(500) COLLATE utf8_unicode_ci DEFAULT '这家伙很懒，什么都么有写' COMMENT '角色心情',
  `nowmatrix` int(10) DEFAULT '100001' COMMENT '当前阵法',
  `novicestep` int(10) DEFAULT '1' COMMENT '新手奖励步骤',
  `dayawardtime` datetime DEFAULT '2007-05-06 00:00:00' COMMENT '每日奖励的领取时间',
  `isOnline` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否在线',
  `createtime` datetime NOT NULL COMMENT '创建日期',
  `donttalk` int(2) DEFAULT '0' COMMENT '0不禁言  1禁言',
  `prestige` int(20) DEFAULT '0' COMMENT '当前威望值',
  `NobilityLevel` int(20) DEFAULT '1' COMMENT '当前爵位等级',
  `morale` int(20) DEFAULT '0' COMMENT '当前斗气值',
  `leavetime` datetime DEFAULT '2007-05-06 00:00:00' COMMENT '离开军团的时间',
  `guanqia` int(20) DEFAULT '1000' COMMENT '角色当前的关卡ID',
  `skill` int(20) DEFAULT '100006' COMMENT '角色的技能',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1000001 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `tb_character` */

/*Table structure for table `tb_register` */

DROP TABLE IF EXISTS `tb_register`;

CREATE TABLE `tb_register` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT '用户密码',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT '' COMMENT '用户注册邮箱',
  `characterId` int(10) DEFAULT '0' COMMENT '用户的角色ID',
  `pid` int(11) DEFAULT '-1' COMMENT '邀请人的角色id',
  `lastonline` datetime NOT NULL DEFAULT '2012-06-05 00:00:00' COMMENT '最后在线时间',
  `logintimes` int(11) NOT NULL DEFAULT '0' COMMENT '登陆次数',
  `enable` tinyint(4) NOT NULL DEFAULT '1' COMMENT '是否可以登录',
  PRIMARY KEY (`id`,`username`)
) ENGINE=MyISAM AUTO_INCREMENT=2017 DEFAULT CHARSET=utf8;

/*Data for the table `tb_register` */
/*
insert  into `tb_register`(`id`,`username`,`password`,`email`,`characterId`,`pid`,`lastonline`,`logintimes`,`enable`) values (1915,'test106','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1916,'test101','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1917,'mmm001','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1918,'mmm002','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1919,'mmm003','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1920,'mmm004','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1921,'mmm005','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1922,'mmm006','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1923,'mmm007','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1924,'mmm008','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1925,'mmm009','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1926,'mmm010','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1927,'mmm011','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1928,'mmm012','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1929,'mmm013','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1930,'mmm014','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1931,'mmm015','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1932,'mmm016','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1933,'mmm017','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1934,'mmm018','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1935,'mmm019','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1936,'mmm020','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1937,'mmm021','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1938,'mmm022','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1939,'mmm023','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1940,'mmm024','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1941,'mmm025','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1942,'mmm026','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1943,'mmm027','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1944,'mmm028','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1945,'mmm029','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1946,'mmm030','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1947,'mmm031','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1948,'mmm032','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1949,'mmm033','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1950,'mmm034','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1951,'mmm035','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1952,'mmm036','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1953,'mmm037','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1954,'mmm038','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1955,'mmm039','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1956,'mmm040','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1957,'mmm041','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1958,'mmm042','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1959,'mmm043','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1960,'mmm044','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1961,'mmm045','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1962,'mmm046','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1963,'mmm047','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1964,'mmm048','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1965,'mmm049','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1966,'mmm050','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1967,'mmm051','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1968,'mmm052','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1969,'mmm053','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1970,'mmm054','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1971,'mmm055','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1972,'mmm056','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1973,'mmm057','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1974,'mmm058','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1975,'mmm059','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1976,'mmm060','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1977,'mmm061','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1978,'mmm062','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1979,'mmm063','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1980,'mmm064','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1981,'mmm065','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1982,'mmm066','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1983,'mmm067','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1984,'mmm068','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1985,'mmm069','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1986,'mmm070','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1987,'mmm071','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1988,'mmm072','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1989,'mmm073','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1990,'mmm074','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1991,'mmm075','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1992,'mmm076','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1993,'mmm077','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1994,'mmm078','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1995,'mmm079','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1996,'mmm080','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1997,'mmm081','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1998,'mmm082','111111','',0,-1,'2012-06-05 00:00:00',0,1),(1999,'mmm083','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2000,'mmm084','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2001,'mmm085','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2002,'mmm086','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2003,'mmm087','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2004,'mmm088','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2005,'mmm089','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2006,'mmm090','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2007,'mmm091','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2008,'mmm092','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2009,'mmm093','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2010,'mmm094','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2011,'mmm095','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2012,'mmm096','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2013,'mmm097','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2014,'mmm098','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2015,'mmm099','111111','',0,-1,'2012-06-05 00:00:00',0,1),(2016,'test100','111111','',0,-1,'2012-06-05 00:00:00',0,1);
*/
/*Table structure for table `tb_report` */


/*Table structure for table `tb_scene` */

DROP TABLE IF EXISTS `tb_scene`;

CREATE TABLE `tb_scene` (
  `id` int(20) NOT NULL DEFAULT '0' COMMENT '场景Id',
  `name` varchar(200) NOT NULL DEFAULT '' COMMENT '场景名称',
  `adjacencyId` varchar(200) NOT NULL DEFAULT '2' COMMENT '通过此场景可以到哪些场景中去例如 1，,3,5,6',
  `levelRequired` int(20) NOT NULL DEFAULT '-1' COMMENT '等级需求',
  `camp` int(20) NOT NULL DEFAULT '-1' COMMENT '阵营需求 此场景是否是几方pk',
  `memberRequired` int(20) NOT NULL DEFAULT '-1' COMMENT '场景可容纳人数',
  `areaHeight` int(20) NOT NULL DEFAULT '570' COMMENT '场景高度',
  `areaWidth` int(20) NOT NULL DEFAULT '2099' COMMENT '场景宽度',
  `monsters` varchar(500) NOT NULL DEFAULT '' COMMENT '场景中de怪物 id:(横坐标,纵坐标);',
  `npcs` varchar(200) NOT NULL DEFAULT '' COMMENT '场景中的NPC id:(横坐标,纵坐标);',
  `boss` int(20) NOT NULL DEFAULT '-1' COMMENT 'bossId,没有boss 填-1',
  `initPointX` int(20) NOT NULL DEFAULT '200' COMMENT '人物进入场景后的横坐标',
  `initPointY` int(20) NOT NULL DEFAULT '400' COMMENT '人物进入场景后的纵坐标',
  `areaid` int(20) NOT NULL DEFAULT '-1' COMMENT '场景所属区域Id',
  `resourceid` int(20) DEFAULT '1001' COMMENT '场景的资源id',
  `npclist` varchar(500) DEFAULT '' COMMENT 'npc列表',
  `portals` varchar(500) DEFAULT '' COMMENT '传送门列表',
  `type` int(10) DEFAULT '2' COMMENT '场景类型 1公共 2副本',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `tb_scene` */

/*Table structure for table `tb_user_character` */

DROP TABLE IF EXISTS `tb_user_character`;

CREATE TABLE `tb_user_character` (
  `id` int(11) NOT NULL COMMENT '用户id',
  `character_1` int(11) DEFAULT '0' COMMENT '用户第一个角色的id',
  `character_2` int(11) DEFAULT '0' COMMENT '用户第二个角色的id',
  `character_3` int(11) DEFAULT '0' COMMENT '用户第三个角色的id',
  `character_4` int(11) DEFAULT '0' COMMENT '用户第四个角色的id',
  `character_5` int(11) DEFAULT '0' COMMENT '用户第五个角色的id',
  `pid` int(11) DEFAULT '0' COMMENT '用户邀请人的id',
  `last_character` int(11) DEFAULT '-1' COMMENT '上次登录的角色',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `tb_user_character` */


