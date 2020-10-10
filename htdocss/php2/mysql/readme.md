## 登陆数据库

```bash
mysql -u root -p 
```

# 数据库操作

## 查看数据库下的所有的数据库

```bash
show databases;
```

### 选择要使用的数据库

```bash
use 数据库名字;
```

### 新建数据库

```bash
create database db2 character set utf8;
```

### 新建表

```bash
CREATE TABLE 表名(
  字段名1 数据类型,
  字段名2 数据类型,
  …
  字段名n 数据类型
)character set 字符集 collate 校对规则;
```

## 查看数据库中的表内容

```bash
show tables;
```

### 查看表的结构

```bash
desc 表名：
```

