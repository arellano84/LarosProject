
# LarosBackend

**Última modificación:** 13/03/2026  
**Creado:** 2018

## Descripción

**LarosBackend** es un servicio **BackEnd** que expone APIs REST para la gestión de **Usuarios** y **Roles**.

El servicio forma parte de una arquitectura basada en microservicios y está integrado con componentes de infraestructura como **configuración centralizada**, **descubrimiento de servicios** y una **base de datos PostgreSQL**.

Este servicio es consumido por un cliente **FrontEnd** que interactúa con las APIs para realizar operaciones CRUD y autenticación de usuarios.

---

## Arquitectura

El sistema está compuesto por los siguientes servicios:

- **Config Server** — Centraliza la configuración de los microservicios.
- **Eureka Server** — Permite el descubrimiento dinámico de servicios.
- **PostgreSQL** — Base de datos utilizada por el backend.
- **pgAdmin** — Herramienta de administración para la base de datos.

---

## Servicios e Integraciones

### Config Server

Servidor de configuración centralizada utilizado por los microservicios.

Las propiedades de conexión a la base de datos PostgreSQL se encuentran en:

```
larosConfigData/larosBackend.properties
```

**Servicio:** `larosConfigServer`

**ConfigData:**

```
http://localhost:8001/ConfigData/default
```

**Configuración específica de LarosBackend:**

```
http://localhost:8001/LarosBackend/default
```

---

### Eureka Server

Servidor de descubrimiento de servicios para la arquitectura de microservicios.

> Nota (13/03/2026): Actualmente no se utiliza, ya que no hay ningún enrutador habilitado (Spring Cloud Gateway).

**Servicio:** `larosEurekaServer`

```
http://localhost:8010/
```

---

### Base de Datos

Base de datos **PostgreSQL** configurada mediante `docker-compose.yml`.

**Base de datos:** `larosdb`

**URL de conexión JDBC**

```
jdbc:postgresql://localhost:5435/larosdb
```

**Herramienta de administración (pgAdmin)**

```
http://localhost:8085/
```

---

## Endpoints disponibles

Una vez iniciado el servicio **BackEnd**, la API expone los siguientes endpoints principales:

```
GET http://localhost:8080/showConfig
GET http://localhost:8080/user/users
GET http://localhost:8080/role/roles
...
```

Dependiendo de la versión del servicio, pueden existir endpoints adicionales para operaciones **CRUD** sobre usuarios y roles.

---

## Cliente FrontEnd

El servicio BackEnd es consumido por el cliente FrontEnd.

**Proyecto:** `larosClient`

```
http://localhost:4200/
```

Este cliente permite interactuar con las APIs para la gestión de usuarios y roles. Para más información sobre el servicio Backend, consulte:

```
larosClient/README.md
```

---

## Ejecución del proyecto

### Requisitos

- Java 8
- Maven
- Docker Desktop
- Docker Compose

### Base de datos

La base de datos PostgreSQL se inicia mediante:

```bash
docker compose up -d
```

---

## Origen del proyecto

Este proyecto se inició siguiendo la línea del siguiente ejemplo.

**Video de referencia**

https://www.youtube.com/watch?v=ibApMXn4bTM

**Repositorios relacionados**

https://github.com/sambaf/restClient

https://github.com/sambaf/crudBackend
