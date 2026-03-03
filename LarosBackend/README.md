Modificado: 03/03/2026

LarosBackend:
- Es un servicio BackEnd de APIs (Usuarios y Roles)
- Levanta correctamente:
  - Get http://localhost:8080/showConfig
  - Get http://localhost:8080/user/users
  - Get http://localhost:8080/role/roles
  - etc.
- Esta integrado con ConfigServer
  - larosConfigServer: http://localhost:8001/LarosBackend/default
- Esta integrado con EurekaServer
  - larosEurekaServer: http://localhost:8010/
- Conecta a BBDD postgres, configurada con docker-compose.yml
  - pgAdmin: http://localhost:8085/
  - bbdd: jdbc:postgresql://localhost:5434/larosdb
- Cliente se conecta a este servicio BackEnd:
  - larosClient: http://localhost:4200/


Creado: 2018

Este proyecto se inicio siguiendo la linea de este ejemplo:
https://www.youtube.com/watch?v=ibApMXn4bTM

https://github.com/sambaf/restClient

https://github.com/sambaf/crudBackend