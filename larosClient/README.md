
# LarosClient

**Última modificación:** 13/03/2026

## Descripción

**LarosClient** es una aplicación **FrontEnd** que permite consumir las APIs del sistema para la gestión de **Usuarios** y **Roles**.

La aplicación se conecta con el servicio **LarosBackend**, que expone los endpoints necesarios para realizar operaciones CRUD sobre los recursos del sistema.

---

## Ejecución del servicio

Una vez iniciado el proyecto, la aplicación FrontEnd se ejecuta en:

http://localhost:4200/

---

## Integración con Backend

El cliente se conecta con el servicio **LarosBackend**, que expone los siguientes endpoints:

```
http://localhost:8080/user/users
http://localhost:8080/role/roles
```

Para más información sobre el servicio Backend, consulte:

```
LarosBackend/README.md
```

---

## Instalación y ejecución

### Instalación de dependencias

```bash
npm install
```

### Ejecutar la aplicación

```bash
npm start
```

---

## Requisitos

- Node.js 8
