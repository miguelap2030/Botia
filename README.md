# Botia - Sistema MLM de Trading Automático con IA

Sistema de Marketing Multi-Nivel (MLM) para trading automático con inteligencia artificial. Permite a los usuarios registrarse, invertir en diferentes planes y construir una red de referidos para generar ingresos pasivos.

## 🚀 Características

- **Trading Automático**: Bot de IA que opera 24/7 en los mercados financieros
- **Sistema MLM**: Red de referidos con comisiones por niveles
- **Múltiples Planes**: Starter ($100), Professional ($500), Enterprise ($1000)
- **Interfaz Moderna**: Diseño responsive con Tailwind CSS 3.3.3
- **Registro por Pasos**: Proceso de registro intuitivo en 3 pasos
- **Autenticación Segura**: Sistema de login con validaciones
- **Compatible con Termux**: Optimizado para funcionar en entornos móviles

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework CSS**: Tailwind CSS 3.3.3
- **JavaScript Framework**: Alpine.js 3.x
- **Build Tool**: Vite 5.0
- **Procesador CSS**: PostCSS + Autoprefixer

## 📁 Estructura del Proyecto

```
botia-mlm-trading/
├── pages/
│   ├── login.html          # Página de inicio de sesión
│   └── registro.html       # Página de registro MLM
├── src/
│   └── input.css          # Estilos base de Tailwind
├── dist/                  # Archivos compilados
├── index.html             # Página principal
├── package.json           # Dependencias del proyecto
├── tailwind.config.js     # Configuración de Tailwind
├── postcss.config.js      # Configuración de PostCSS
├── vite.config.js         # Configuración de Vite
└── README.md              # Documentación
```

## 🎨 Paleta de Colores

- **MLM Blue**: `#2563eb` - Color principal del sistema
- **MLM Purple**: `#7c3aed` - Color secundario
- **Trading Gold**: `#ffd700` - Acentos y elementos premium
- **Trading Success**: `#00ff88` - Indicadores de éxito
- **Trading Primary**: `#1a1a2e` - Fondos oscuros
- **Gradient**: `#667eea` → `#764ba2` - Fondo principal

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd botia-mlm-trading
```

2. Instalar dependencias:
```bash
npm install
```

3. Compilar estilos CSS:
```bash
npm run build-css
```

4. Iniciar servidor de desarrollo:
```bash
npm run dev
```

5. Abrir en el navegador: `http://localhost:3000`

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Compilar para producción
- `npm run preview` - Vista previa de la compilación
- `npm run build-css` - Compilar solo los estilos CSS

## 📱 Páginas Implementadas

### 1. Página Principal (`index.html`)
- Hero section con animaciones
- Características del sistema MLM
- Estadísticas en tiempo real
- Navegación a login y registro

### 2. Página de Login (`pages/login.html`)
- Formulario de autenticación
- Validación de campos
- Opción "Recordarme"
- Recuperación de contraseña
- Estadísticas del bot en tiempo real

### 3. Página de Registro (`pages/registro.html`)
- Proceso de registro en 3 pasos:
  1. **Información Personal**: Nombre, email, teléfono
  2. **Configuración de Cuenta**: Usuario, contraseña, código de referido
  3. **Plan de Inversión**: Selección de plan y términos
- Validación de formularios
- Sistema de referidos MLM
- Selección de planes de inversión

## 💰 Planes de Inversión

| Plan | Precio | Comisión MLM | Características |
|------|--------|--------------|-----------------|
| **Starter** | $100 | 5% | Bot básico, soporte email |
| **Professional** | $500 | 10% | Bot avanzado, soporte prioritario |
| **Enterprise** | $1000 | 15% | Bot premium, soporte 24/7 |

## 🔧 Personalización

### Colores
Editar `tailwind.config.js` para modificar la paleta de colores:

```javascript
colors: {
  'trading-primary': '#1a1a2e',
  'mlm-blue': '#2563eb',
  // ... más colores
}
```

### Estilos
Modificar `src/input.css` para agregar estilos personalizados:

```css
@layer components {
  .btn-custom {
    @apply bg-gradient-to-r from-blue-500 to-purple-600;
  }
}
```

## 🔒 Seguridad

- Validación de formularios en frontend
- Encriptación SSL mencionada en la UI
- Campos de contraseña con toggle de visibilidad
- Validación de confirmación de contraseña
- Términos y condiciones requeridos

## 📱 Compatibilidad

- ✅ Termux (Android)
- ✅ Navegadores modernos
- ✅ Dispositivos móviles
- ✅ Tablets y desktop
- ✅ Responsive design

## 🚀 Próximas Características

- [ ] Dashboard de usuario
- [ ] Panel de administración
- [ ] API backend
- [ ] Base de datos
- [ ] Sistema de pagos
- [ ] Notificaciones push
- [ ] Gráficos de trading en tiempo real
- [ ] Sistema de chat/soporte

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Soporte

Para soporte y consultas:
- Email: support@botia.com
- Telegram: @BotiaSupport
- Discord: Botia Community

---

⚠️ **Disclaimer**: Este es un proyecto educativo. El trading automático conlleva riesgos financieros. Siempre consulte con un asesor financiero antes de invertir.
