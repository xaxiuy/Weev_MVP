# Weev MVP

Weev es una plataforma que permite activar productos físicos (ropa, tecnología, accesorios, etc.) para obtener recompensas y generar trazabilidad para las marcas. Este MVP está construido con React + Vite y usa Supabase para autenticación, base de datos y almacenamiento.

## 🚀 Cómo correr el proyecto

### 1. Instalación

```bash
npm install
```

### 2. Variables de entorno

Crea un archivo `.env` en la raíz con estas claves:

```bash
VITE_SUPABASE_URL=https://TU_PROYECTO.supabase.co
VITE_SUPABASE_KEY=TU_CLAVE_PUBLICA
```

### 3. Correr en desarrollo

```bash
npm run dev
```

## 📦 Estructura del proyecto

```
weev-mvp/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
└── vite.config.js
```

## 🧠 Tecnologías usadas

- React + Vite
- Supabase (Auth, DB, Storage)
- React Router DOM
- Recharts (para estadísticas)
- Tailwind CSS (opcional)

## 🧪 Funcionalidades del MVP

- Registro e inicio de sesión por rol: usuario, marca, admin
- Activación de productos (Weev It)
- Subida de imágenes a Supabase Storage
- Swipe tipo Tinder (exploración de productos)
- Sistema de puntos y recompensas
- Panel de administración con estadísticas
- Feed público de activaciones recientes

## 📦 Deploy recomendado

Usar Vercel:

1. Importar el proyecto desde GitHub
2. Framework: `Vite`
3. Output: `dist`
4. Variables de entorno: agregar `.env`
5. Click en Deploy 🚀

---

Desarrollado por [@xaxiuy](https://github.com/xaxiuy) 🚀
