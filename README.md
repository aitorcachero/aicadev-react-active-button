# @aicadev/react-active-button

Un botón de activación moderno y elegante para React, con transiciones suaves y personalizable. Perfecto para crear interruptores (switches) con una interfaz profesional y atractiva.

<p align="center">
  <img src="https://i.imgur.com/wshSwmy.gif" alt="Demostración del Active Button" width="300" />
</p>

## 🚀 Instalación

```bash
npm install @aicadev/react-active-button
```

## 📖 Uso Básico

```jsx
import { ActiveButton } from '@aicadev/react-active-button';
import '@aicadev/react-active-button/styles.css';

function App() {
  return (
    <ActiveButton
      active={active}
      setActive={() => setActive(!active)}
      width={200}
      transition={500}
    />
  );
}
```

## ✨ Características

- 🎯 Diseño moderno y minimalista
- ⚡ Transiciones suaves personalizables
- 📱 Diseño totalmente responsive
- 🎨 Efectos visuales elegantes
- 📦 Ligero y fácil de integrar
- 🎯 Personalización completa de tamaños y tiempos

## ⚙️ Props

| Prop         | Tipo       | Valor por defecto | Descripción                                |
| ------------ | ---------- | ----------------- | ------------------------------------------ |
| `active`     | `boolean`  | `false`           | Estado del botón (activado/desactivado)    |
| `setActive`  | `function` | `undefined`       | Función para controlar el estado del botón |
| `width`      | `number`   | `200`             | Ancho del botón en píxeles                 |
| `transition` | `number`   | `1000`            | Duración de la transición en milisegundos  |

## 🎨 Características Detalladas

### Diseño Adaptable

- Tamaño completamente personalizable
- Diseño responsive que se adapta a cualquier contenedor
- Bordes redondeados automáticamente ajustados

### Animaciones Suaves

- Transiciones configurables
- Efectos suaves en los cambios de estado
- Animaciones optimizadas para rendimiento

### Interfaz Visual

- Diseño minimalista y moderno
- Estados visuales claros y distintivos
- Animaciones suaves en la interacción

## 🛠️ Requisitos

### Peer Dependencies

```json
{
  "react": ">=18.0.0",
  "react-dom": ">=18.0.0"
}
```

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT - vea el archivo LICENSE para más detalles.

## 👥 Autor

AICA Development

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir los cambios propuestos.

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 🆘 Soporte

Si encuentras algún problema o tienes alguna sugerencia, por favor abre un issue en el repositorio de GitHub .

## 🌟 Agradecimientos

Hecho con ❤️ por aicadev.
